'use client';

import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_INFO,
  CONTACT_TRUST_POINTS,
  ESTIMATE_FIT_CHECKLIST,
  SERVICES,
  SITE_INFO,
  TARGET_TIMELINE_OPTIONS,
} from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { formatLeadSource } from '@/lib/contact-source';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  targetTimeline: string;
  budgetRange: string;
  message: string;
  companyName: string;
  leadSource: string;
  entryPage: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  projectLocation: '',
  targetTimeline: '',
  budgetRange: '',
  message: '',
  companyName: '',
  leadSource: '',
  entryPage: '',
};

interface ContactProps {
  initialLeadSource?: string;
  initialProjectType?: string;
}

function getInitialFormData(initialValues?: {
  leadSource?: string;
  projectType?: string;
}): FormData {
  return {
    ...initialFormData,
    projectType: initialValues?.projectType ?? '',
    leadSource: initialValues?.leadSource ?? '',
  };
}

function normalizeFormData(formData: FormData): FormData {
  return {
    ...formData,
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    projectType: formData.projectType.trim(),
    projectLocation: formData.projectLocation.trim(),
    targetTimeline: formData.targetTimeline.trim(),
    budgetRange: formData.budgetRange.trim(),
    message: formData.message.trim(),
    companyName: formData.companyName.trim(),
    leadSource: formData.leadSource.trim(),
    entryPage: formData.entryPage.trim(),
  };
}

/**
 * Keeps validation rules close to the form so the required lead details stay explicit.
 */
function validateFormData(formData: FormData): FormErrors {
  const normalizedData = normalizeFormData(formData);
  const errors: FormErrors = {};

  if (!normalizedData.firstName) errors.firstName = 'First name is required.';
  if (!normalizedData.lastName) errors.lastName = 'Last name is required.';
  if (!normalizedData.email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedData.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (normalizedData.phone && normalizedData.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a valid phone number or leave this field blank.';
  }
  if (!normalizedData.projectType) {
    errors.projectType = 'Select the type of project you are planning.';
  }
  if (!normalizedData.projectLocation) {
    errors.projectLocation = 'Project town or area is required.';
  }
  if (!normalizedData.targetTimeline) {
    errors.targetTimeline = 'Choose your target timeline.';
  }
  if (!normalizedData.message) {
    errors.message = 'A short project description helps Scott give a useful first response.';
  } else if (normalizedData.message.length < 20) {
    errors.message = 'Share a little more detail so the follow-up can be more helpful.';
  }

  return errors;
}

function getFieldClasses(hasError: boolean): string {
  return [
    'field-shell text-base',
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-200'
      : 'focus:border-accent focus:ring-2 focus:ring-accent/15',
  ].join(' ');
}

export function Contact({
  initialLeadSource = '',
  initialProjectType = '',
}: ContactProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const nextInitialData = getInitialFormData({
      leadSource: initialLeadSource,
      projectType: initialProjectType,
    });
    const entryPage = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    setFormData((prev) => ({
      ...prev,
      projectType: nextInitialData.projectType,
      leadSource: nextInitialData.leadSource,
      entryPage,
    }));
  }, [initialLeadSource, initialProjectType]);

  const selectedService = SERVICES.find(
    (service) => service.contactProjectType === formData.projectType
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name as keyof FormData];
        return nextErrors;
      });
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = event.target.name as keyof FormData;
    const validationErrors = validateFormData(formData);

    setErrors((prev) => {
      const nextErrors = { ...prev };
      const fieldError = validationErrors[fieldName];

      if (fieldError) nextErrors[fieldName] = fieldError;
      else delete nextErrors[fieldName];

      return nextErrors;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const normalizedData = normalizeFormData(formData);
    const validationErrors = validateFormData(normalizedData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      setErrorMessage('Please review the highlighted fields and try again.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalizedData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setFormData((prev) => ({
        ...getInitialFormData({
          leadSource: initialLeadSource,
          projectType: initialProjectType,
        }),
        entryPage: prev.entryPage,
      }));
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.12),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(221,183,132,0.16),transparent_20%),linear-gradient(180deg,rgba(251,248,242,0.98),rgba(244,239,231,0.98))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <ScrollReveal>
            <SectionLabel className="justify-center">Consult Planner</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[0.96] text-charcoal md:text-5xl lg:text-[4.6rem]">
              A quieter, clearer way to start your project conversation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-steel md:text-xl">
              Share the project basics and Scott will help you decide whether it is a good fit,
              what the next step should be, and how quickly it can realistically move.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="order-2 space-y-8 lg:order-1">
            <ScrollReveal direction="right">
              <div className="site-panel-dark bg-noise p-7 text-cream md:p-8">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                  What to expect
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
                  If your project is a fit, you will know the next step without having to chase it.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ash">
                  The goal is to make the first reply feel specific and helpful, not generic.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    'Town, timing, and scope are enough for Scott to judge fit.',
                    'The first reply should make the next step obvious.',
                    'A few specific details help the estimate conversation feel much more useful.',
                  ].map((item) => (
                    <div key={item} className="border border-white/10 bg-white/6 px-5 py-4">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Estimate fit check
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ash">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: 'Owner-led accountability',
                    body: 'You are talking to the owner who stays close to the work.',
                  },
                  {
                    title: 'Realistic scheduling',
                    body: 'Location, scope, and timing are used to set early expectations.',
                  },
                  {
                    title: 'Clear trust signals',
                    body: 'Licensing, insurance, and experience are easy to scan before you submit.',
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="site-panel h-full p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Planning pillar
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-charcoal">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="site-panel p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                    <CircleHelp size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Start with what you know
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-charcoal md:text-[2rem]">
                      You do not need a perfect plan to start the conversation.
                    </h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {ESTIMATE_FIT_CHECKLIST.map((item) => (
                    <div key={item.id} className="border border-sand/25 bg-white/70 px-4 py-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-steel">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="site-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/10 bg-charcoal text-accent">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-steel">
                        Phone
                      </p>
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                        className="mt-1 block text-lg font-medium text-charcoal transition-colors hover:text-accent"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="site-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/10 bg-charcoal text-accent">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-steel">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="mt-1 block text-lg font-medium text-charcoal transition-colors hover:text-accent"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="site-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/10 bg-charcoal text-accent">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-steel">
                        Location
                      </p>
                      <p className="mt-1 text-lg font-medium text-charcoal">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
                <div className="site-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/10 bg-charcoal text-accent">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-steel">
                        Hours
                      </p>
                      {CONTACT_INFO.hours.map((hour) => (
                        <p key={hour} className="mt-1 text-lg font-medium text-charcoal">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.14}>
              {status === 'success' ? (
                <div className="site-panel-dark bg-noise p-8 text-cream md:p-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border border-white/10 bg-white/8">
                    <CheckCircle2 size={32} className="text-warm-sand" />
                  </div>
                  <p className="mt-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                    Request received
                  </p>
                  <h3 className="mt-4 text-center font-display text-3xl leading-tight text-cream">
                    Thanks. We have what we need to review the project.
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ash">
                    Scott will review the details and follow up within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="site-panel-dark bg-noise p-7 text-cream md:p-10"
                >
                  <div className="flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Free estimate. Clear next steps.
                      </p>
                      <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-[2.6rem]">
                        Tell us what you are planning and we will help you sort the path forward.
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-ash">
                      Lead source: {formatLeadSource(formData.leadSource)}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Established
                      </p>
                      <p className="mt-2 text-sm font-semibold text-cream">{SITE_INFO.established}</p>
                    </div>
                    <div className="border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        PA license
                      </p>
                      <p className="mt-2 text-sm font-semibold text-cream">PA012701</p>
                    </div>
                    <div className="border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Response window
                      </p>
                      <p className="mt-2 text-sm font-semibold text-cream">1 business day</p>
                    </div>
                  </div>

                  {selectedService && (
                    <div className="mt-6 border border-accent/25 bg-accent/8 px-5 py-4 text-cream">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Service selected
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight text-cream">
                        {selectedService.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ash">
                        {selectedService.qualificationPrompt}
                      </p>
                    </div>
                  )}

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {CONTACT_TRUST_POINTS.slice(0, 2).map((point) => (
                      <div key={point.id} className="border border-white/10 bg-white/6 px-5 py-4">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                          {point.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ash">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.firstName))}
                      />
                      {errors.firstName && <p className="text-sm text-red-300">{errors.firstName}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.lastName))}
                      />
                      {errors.lastName && <p className="text-sm text-red-300">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.email))}
                      />
                      {errors.email && <p className="text-sm text-red-300">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Optional"
                        className={getFieldClasses(Boolean(errors.phone))}
                      />
                      {errors.phone && <p className="text-sm text-red-300">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`appearance-none ${getFieldClasses(Boolean(errors.projectType))}`}
                    >
                      <option value="">Select a service...</option>
                      <option>Home Remodeling</option>
                      <option>Addition</option>
                      <option>Deck</option>
                      <option>Patio / Hardscaping</option>
                      <option>Bilco Door Installation</option>
                      <option>Windows & Doors</option>
                      <option>Other / Not sure yet</option>
                    </select>
                    {errors.projectType && <p className="text-sm text-red-300">{errors.projectType}</p>}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectLocation" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Project Town / Area
                      </label>
                      <input
                        id="projectLocation"
                        name="projectLocation"
                        type="text"
                        autoComplete="address-level2"
                        value={formData.projectLocation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Langhorne, Newtown, Yardley..."
                        className={getFieldClasses(Boolean(errors.projectLocation))}
                      />
                      {errors.projectLocation && (
                        <p className="text-sm text-red-300">{errors.projectLocation}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="targetTimeline" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                        Target Timeline
                      </label>
                      <select
                        id="targetTimeline"
                        name="targetTimeline"
                        value={formData.targetTimeline}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={`appearance-none ${getFieldClasses(Boolean(errors.targetTimeline))}`}
                      >
                        <option value="">Select timing...</option>
                        {TARGET_TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.targetTimeline && (
                        <p className="text-sm text-red-300">{errors.targetTimeline}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="budgetRange" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                      Approximate Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`appearance-none ${getFieldClasses(false)}`}
                    >
                      <option value="">Select a range...</option>
                      {BUDGET_RANGE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      rows={6}
                      maxLength={1500}
                      placeholder="Describe the project scope, the space involved, and anything important Scott should know before reaching out..."
                      className={`min-h-[150px] resize-y ${getFieldClasses(Boolean(errors.message))}`}
                    />
                    <div className="flex items-center justify-between gap-4 text-xs text-ash">
                      <p>A couple of sentences is enough. The more specific you are, the more helpful the first response can be.</p>
                      <span>{formData.message.trim().length}/1500</span>
                    </div>
                    {errors.message && <p className="text-sm text-red-300">{errors.message}</p>}
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    <input type="text" id="leadSource" name="leadSource" value={formData.leadSource} readOnly />
                    <input type="text" id="entryPage" name="entryPage" value={formData.entryPage} readOnly />
                  </div>

                  {status === 'error' && (
                    <div className="mt-6 border border-red-300/40 bg-red-500/10 p-4 text-sm text-red-100" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div aria-live="polite" className="sr-only">
                    {status === 'loading' && 'Sending your request.'}
                    {status === 'error' && errorMessage}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button type="submit" className="w-full sm:w-auto" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : 'Request My Estimate'}
                    </Button>
                    <a
                      href="tel:2155191795"
                      className="inline-flex items-center justify-center gap-2 border border-white/12 bg-white/8 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/12"
                    >
                      <Phone size={16} />
                      Call Scott
                    </a>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
