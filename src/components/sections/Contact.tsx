'use client';

import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_INFO,
  CONTACT_TRUST_POINTS,
  ESTIMATE_EXPECTATIONS,
  ESTIMATE_FIT_CHECKLIST,
  SERVICES,
  SITE_INFO,
  TARGET_TIMELINE_OPTIONS,
} from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
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

  if (!normalizedData.firstName) {
    errors.firstName = 'First name is required.';
  }

  if (!normalizedData.lastName) {
    errors.lastName = 'Last name is required.';
  }

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

      if (fieldError) {
        nextErrors[fieldName] = fieldError;
      } else {
        delete nextErrors[fieldName];
      }

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

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

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
    <section id="contact" className="relative overflow-hidden bg-cream section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">Get In Touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Ready to start your project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              Tell us what you&apos;re planning and we&apos;ll help you figure out the best next
              step without the runaround.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="right">
              <h3 className="mb-6 font-display text-3xl text-charcoal">
                Let&apos;s talk about your home
              </h3>
              <p className="mb-12 text-lg leading-relaxed text-steel">
                Whether you&apos;re planning a major renovation or just exploring ideas,
                you&apos;ll get straightforward answers, a no-pressure estimate, and a clear
                sense of what comes next.
              </p>

              <div className="site-panel mb-12 p-7 text-charcoal md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CircleHelp size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Estimate fit guide
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight">
                      Not sure if you&apos;re ready to reach out yet? This usually means yes.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-steel">
                      If two or three of these sound like you, the form is probably the right
                      next step.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {ESTIMATE_FIT_CHECKLIST.map((item) => (
                    <div key={item.id} className="border border-sand/25 bg-white/72 px-5 py-4">
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

              <div className="mb-12 grid gap-4">
                {CONTACT_TRUST_POINTS.map((point) => (
                  <div key={point.id} className="site-panel px-5 py-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <ShieldCheck size={18} />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                        {point.title}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-steel">{point.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="site-panel group flex items-start gap-6 px-5 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-charcoal text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-warm-black">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-steel">
                      Phone
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-lg font-medium text-charcoal transition-colors hover:text-accent"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="site-panel group flex items-start gap-6 px-5 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-charcoal text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-warm-black">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-steel">
                      Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-lg font-medium text-charcoal transition-colors hover:text-accent"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="site-panel group flex items-start gap-6 px-5 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-charcoal text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-warm-black">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-steel">
                      Location
                    </span>
                    <p className="text-lg font-medium text-charcoal">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="site-panel group flex items-start gap-6 px-5 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-charcoal text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-warm-black">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-steel">
                      Hours
                    </span>
                    {CONTACT_INFO.hours.map((hour) => (
                      <p key={hour} className="text-lg font-medium text-charcoal">
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.2}>
              {status === 'success' ? (
                <div className="site-panel p-8 text-center md:p-12">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-charcoal">Thanks for reaching out.</h3>
                  <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-steel">
                    Your message has been sent. Scott will review the project details and
                    follow up within one business day with the best next step.
                  </p>

                  <div className="mx-auto mb-8 max-w-xl border border-sand/30 bg-white/55 p-5 text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                      What happens next
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-steel">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>Scott reviews your location, project type, timing, and notes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>You get a direct reply with fit, timing, or estimate guidance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>If it makes sense, the next step is a call or site visit.</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setErrorMessage('');
                    }}
                    className="text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:text-accent-dark"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="site-panel p-8 md:p-12"
                >
                  <div className="mb-6 border border-accent/20 bg-accent/5 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                      Free estimate. No pressure. Clear next steps.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      Share a few details below and Scott will follow up to confirm fit, answer
                      questions, and talk through timing.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-steel">
                      Lead source: {formatLeadSource(formData.leadSource)}
                    </p>
                  </div>

                  {selectedService && (
                    <div className="site-panel mb-6 px-5 py-4 text-charcoal">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                        Service selected
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight">
                        {selectedService.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-steel">
                        {selectedService.qualificationPrompt}
                      </p>
                    </div>
                  )}

                  <div className="mb-6 grid gap-3 sm:grid-cols-3">
                    <div className="border border-sand/30 bg-white/55 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                        Established
                      </p>
                      <p className="mt-2 text-sm font-semibold text-charcoal">{SITE_INFO.established}</p>
                    </div>
                    <div className="border border-sand/30 bg-white/55 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                        PA license
                      </p>
                      <p className="mt-2 text-sm font-semibold text-charcoal">PA012701</p>
                    </div>
                    <div className="border border-sand/30 bg-white/55 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                        Response window
                      </p>
                      <p className="mt-2 text-sm font-semibold text-charcoal">1 business day</p>
                    </div>
                  </div>

                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    {ESTIMATE_EXPECTATIONS.map((group) => (
                      <div key={group.id} className="border border-sand/30 bg-white/55 px-5 py-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                          {group.heading}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-steel">
                          {group.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 border border-dashed border-sand/40 bg-white/45 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                      Faster fit check
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      Project type, town, timing, and a short description usually give Scott
                      enough context for a more useful first reply.
                    </p>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.firstName))}
                        aria-invalid={Boolean(errors.firstName)}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && <p id="firstName-error" className="text-sm text-red-700">{errors.firstName}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.lastName))}
                        aria-invalid={Boolean(errors.lastName)}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && <p id="lastName-error" className="text-sm text-red-700">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={getFieldClasses(Boolean(errors.email))}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p id="email-error" className="text-sm text-red-700">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Optional"
                        className={getFieldClasses(Boolean(errors.phone))}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && <p id="phone-error" className="text-sm text-red-700">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-widest text-steel">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`appearance-none ${getFieldClasses(Boolean(errors.projectType))}`}
                      aria-invalid={Boolean(errors.projectType)}
                      aria-describedby={errors.projectType ? 'projectType-error' : 'projectType-help'}
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
                    <p id="projectType-help" className="text-xs leading-relaxed text-steel">
                      This helps Scott respond with the right questions and the most useful next step.
                    </p>
                    {errors.projectType && <p id="projectType-error" className="text-sm text-red-700">{errors.projectType}</p>}
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectLocation" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        Project Town / Area
                      </label>
                      <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        autoComplete="address-level2"
                        value={formData.projectLocation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Langhorne, Newtown, Yardley..."
                        className={getFieldClasses(Boolean(errors.projectLocation))}
                        aria-invalid={Boolean(errors.projectLocation)}
                        aria-describedby={errors.projectLocation ? 'projectLocation-error' : undefined}
                      />
                      {errors.projectLocation && <p id="projectLocation-error" className="text-sm text-red-700">{errors.projectLocation}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="targetTimeline" className="text-xs font-semibold uppercase tracking-widest text-steel">
                        Target Timeline
                      </label>
                      <select
                        id="targetTimeline"
                        name="targetTimeline"
                        value={formData.targetTimeline}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={`appearance-none ${getFieldClasses(Boolean(errors.targetTimeline))}`}
                        aria-invalid={Boolean(errors.targetTimeline)}
                        aria-describedby={errors.targetTimeline ? 'targetTimeline-error' : undefined}
                      >
                        <option value="">Select timing...</option>
                        {TARGET_TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.targetTimeline && <p id="targetTimeline-error" className="text-sm text-red-700">{errors.targetTimeline}</p>}
                    </div>
                  </div>

                  <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="budgetRange" className="text-xs font-semibold uppercase tracking-widest text-steel">
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
                    <p className="text-xs leading-relaxed text-steel">
                      Optional, but helpful if you want quicker guidance on fit and scope.
                    </p>
                  </div>

                  <div className="mb-8 flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-steel">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      rows={5}
                      maxLength={1500}
                      placeholder="Describe the project scope, the space involved, and anything important Scott should know before reaching out..."
                      className={`min-h-[140px] resize-y ${getFieldClasses(Boolean(errors.message))}`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : 'message-help'}
                    />
                    <div className="flex items-center justify-between gap-4 text-xs text-steel">
                      <p id="message-help" className="leading-relaxed">
                        A couple of sentences is enough. The more specific you are, the more helpful the first response can be.
                      </p>
                      <span>{formData.message.trim().length}/1500</span>
                    </div>
                    {errors.message && <p id="message-error" className="text-sm text-red-700">{errors.message}</p>}
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
                    <input
                      type="text"
                      id="leadSource"
                      name="leadSource"
                      value={formData.leadSource}
                      readOnly
                    />
                    <input
                      type="text"
                      id="entryPage"
                      name="entryPage"
                      value={formData.entryPage}
                      readOnly
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div aria-live="polite" className="sr-only">
                    {status === 'loading' && 'Sending your request.'}
                    {status === 'error' && errorMessage}
                  </div>

                  <Button type="submit" className="w-full md:w-auto" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Request My Estimate'}
                  </Button>

                  <p className="mt-4 text-xs leading-relaxed text-steel">
                    Serving Bucks County and nearby South Jersey communities. Prefer to talk now? Call{' '}
                    <a href="tel:2155191795" className="font-semibold text-charcoal transition-colors hover:text-accent">
                      (215) 519-1795
                    </a>
                    .
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-steel">
                    Most estimate requests receive a response within one business day.
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
