'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_INFO,
  SERVICE_DETAILS,
  SERVICE_PROJECT_TYPE_OPTIONS,
  TARGET_TIMELINE_OPTIONS,
} from '@/content';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

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

function validateFormData(formData: FormData): FormErrors {
  const d = normalizeFormData(formData);
  const errors: FormErrors = {};

  if (!d.firstName) errors.firstName = 'First name is required.';
  if (!d.lastName) errors.lastName = 'Last name is required.';
  if (!d.email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (d.phone && d.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a valid phone number or leave this field blank.';
  }
  if (!d.projectType) errors.projectType = 'Select the type of project you are planning.';
  if (!d.projectLocation) errors.projectLocation = 'Project town or area is required.';
  if (!d.targetTimeline) errors.targetTimeline = 'Choose your target timeline.';
  if (!d.message) {
    errors.message = 'A short project description helps Scott give a useful first response.';
  } else if (d.message.length < 20) {
    errors.message = 'Share a little more detail so the follow-up can be more helpful.';
  }

  return errors;
}

const baseField =
  'w-full border bg-white px-4 py-3 font-body text-[15px] text-navy outline-none transition-colors';
const fieldOk = `${baseField} border-border focus:border-navy`;
const fieldErr = `${baseField} border-red-400 focus:border-red-500`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface ContactProps {
  initialLeadSource?: string;
  initialProjectType?: string;
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
    const next = getInitialFormData({
      leadSource: initialLeadSource,
      projectType: initialProjectType,
    });
    const entryPage = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    setFormData((prev) => ({
      ...prev,
      projectType: next.projectType,
      leadSource: next.leadSource,
      entryPage,
    }));
  }, [initialLeadSource, initialProjectType]);

  const selectedService = SERVICE_DETAILS.find(
    (s) =>
      s.contactProjectType === formData.projectType ||
      s.projectTypeOptions.includes(formData.projectType),
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormData];
        return next;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const field = e.target.name as keyof FormData;
    const v = validateFormData(formData);
    setErrors((prev) => {
      const next = { ...prev };
      if (v[field]) next[field] = v[field];
      else delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeFormData(formData);
    const v = validateFormData(normalized);

    if (Object.keys(v).length > 0) {
      setErrors(v);
      setStatus('error');
      setErrorMessage('Please review the highlighted fields and try again.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    setErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalized),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setFormData((prev) => ({
        ...getInitialFormData({
          leadSource: initialLeadSource,
          projectType: initialProjectType,
        }),
        entryPage: prev.entryPage,
      }));
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.',
      );
    }
  };

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-navy/60">Get In Touch</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Start Your Project Conversation
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-navy/70">
            Share the basics and Scott will follow up within one business day
            with clear next steps.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ---- Form column ---- */}
          <div>
            {status === 'success' ? (
              <div className="border border-border bg-cream p-12 text-center">
                <CheckCircle2 size={48} className="mx-auto text-navy" />
                <h3 className="mt-6 font-display text-card-heading text-navy">
                  Request Received
                </h3>
                <p className="mt-4 text-body-lg text-navy/70">
                  Scott will review the details and follow up within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="section-label text-navy/60">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 ${errors.firstName ? fieldErr : fieldOk}`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="section-label text-navy/60">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 ${errors.lastName ? fieldErr : fieldOk}`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="section-label text-navy/60">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 ${errors.email ? fieldErr : fieldOk}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="section-label text-navy/60">
                      Phone <span className="normal-case tracking-normal text-navy/40">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 ${errors.phone ? fieldErr : fieldOk}`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Project type */}
                <div className="mt-6">
                  <label htmlFor="projectType" className="section-label text-navy/60">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-2 appearance-none ${errors.projectType ? fieldErr : fieldOk}`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_PROJECT_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-[13px] text-red-500">{errors.projectType}</p>
                  )}
                </div>

                {selectedService && (
                  <p className="mt-3 text-body-sm italic text-navy/50">
                    {selectedService.qualificationPrompt}
                  </p>
                )}

                {/* Location + Timeline */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectLocation" className="section-label text-navy/60">
                      Project Town / Area
                    </label>
                    <input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Langhorne, Newtown, Yardley..."
                      value={formData.projectLocation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 ${errors.projectLocation ? fieldErr : fieldOk}`}
                    />
                    {errors.projectLocation && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.projectLocation}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="targetTimeline" className="section-label text-navy/60">
                      Target Timeline
                    </label>
                    <select
                      id="targetTimeline"
                      name="targetTimeline"
                      value={formData.targetTimeline}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 appearance-none ${errors.targetTimeline ? fieldErr : fieldOk}`}
                    >
                      <option value="">Select timing...</option>
                      {TARGET_TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.targetTimeline && (
                      <p className="mt-1 text-[13px] text-red-500">{errors.targetTimeline}</p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div className="mt-6">
                  <label htmlFor="budgetRange" className="section-label text-navy/60">
                    Approximate Budget <span className="normal-case tracking-normal text-navy/40">(optional)</span>
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-2 appearance-none ${fieldOk}`}
                  >
                    <option value="">Select a range...</option>
                    {BUDGET_RANGE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label htmlFor="message" className="section-label text-navy/60">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    maxLength={1500}
                    placeholder="Describe the project scope, the space involved, and anything Scott should know..."
                    className={`mt-2 min-h-[140px] resize-y ${errors.message ? fieldErr : fieldOk}`}
                  />
                  <div className="mt-1 flex justify-between text-[13px] text-navy/40">
                    <span>A few sentences is enough.</span>
                    <span>{formData.message.trim().length}/1500</span>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot + hidden fields */}
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

                {/* Error banner */}
                {status === 'error' && (
                  <div className="mt-6 border border-red-300 bg-red-50 p-4 text-[14px] text-red-700" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div aria-live="polite" className="sr-only">
                  {status === 'loading' && 'Sending your request.'}
                  {status === 'error' && errorMessage}
                </div>

                {/* Submit */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary btn-primary-dark disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Request My Estimate'}
                    <ArrowRight className="btn-arrow" />
                  </button>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="btn-outline btn-outline-dark"
                  >
                    <Phone size={14} />
                    Call Scott
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ---- Info column ---- */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="border border-border bg-cream p-[35px]">
              <h3 className="font-display text-card-heading text-navy">
                Contact Details
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-navy/40" />
                  <div>
                    <p className="section-label text-navy/50">Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="mt-1 block text-body-lg text-navy transition-opacity hover:opacity-70"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-navy/40" />
                  <div>
                    <p className="section-label text-navy/50">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 block text-body-lg text-navy transition-opacity hover:opacity-70"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-navy/40" />
                  <div>
                    <p className="section-label text-navy/50">Location</p>
                    <p className="mt-1 text-body-lg text-navy">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-1 shrink-0 text-navy/40" />
                  <div>
                    <p className="section-label text-navy/50">Hours</p>
                    {CONTACT_INFO.hours.map((hour) => (
                      <p key={hour} className="mt-1 text-body-lg text-navy">
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="border border-border bg-navy p-[35px] text-white">
              <h3 className="font-display text-card-heading">
                Why Homeowners Trust Scott
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Owner-led', detail: 'Scott stays involved from estimate to final walkthrough.' },
                  { label: 'Licensed & Insured', detail: 'PA & NJ licensed. Fully insured for residential work.' },
                  { label: 'Fast Response', detail: 'Most inquiries get a reply within one business day.' },
                  { label: 'A+ BBB Rating', detail: 'Zero complaints. Verified third-party trust signal.' },
                ].map((item) => (
                  <div key={item.label} className="border-b border-white/15 pb-4 last:border-0 last:pb-0">
                    <p className="section-label text-white/50">{item.label}</p>
                    <p className="mt-1 text-body-sm text-white/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
