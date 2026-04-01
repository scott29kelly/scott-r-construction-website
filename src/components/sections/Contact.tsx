'use client';

import React, { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import {
  ArrowRight,
  ArrowLeft,
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
import { FileUpload } from '@/components/ui/FileUpload';

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

interface PhotoAttachment {
  filename: string;
  content: string;
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

const STEP_1_FIELDS: (keyof FormData)[] = ['projectType', 'projectLocation', 'targetTimeline'];
const STEP_2_FIELDS: (keyof FormData)[] = ['message'];
const STEP_3_FIELDS: (keyof FormData)[] = ['firstName', 'lastName', 'email'];

function validateStep(formData: FormData, step: number): FormErrors {
  const d = normalizeFormData(formData);
  const errors: FormErrors = {};

  const fields = step === 1 ? STEP_1_FIELDS : step === 2 ? STEP_2_FIELDS : STEP_3_FIELDS;

  if (fields.includes('firstName') && !d.firstName) errors.firstName = 'First name is required.';
  if (fields.includes('lastName') && !d.lastName) errors.lastName = 'Last name is required.';
  if (fields.includes('email')) {
    if (!d.email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      errors.email = 'Enter a valid email address.';
    }
  }
  if (fields.includes('projectType') && !d.projectType)
    errors.projectType = 'Select the type of project you are planning.';
  if (fields.includes('projectLocation') && !d.projectLocation)
    errors.projectLocation = 'Project town or area is required.';
  if (fields.includes('targetTimeline') && !d.targetTimeline)
    errors.targetTimeline = 'Choose your target timeline.';
  if (fields.includes('message')) {
    if (!d.message) {
      errors.message = 'A short project description helps Scott give a useful first response.';
    } else if (d.message.length < 20) {
      errors.message = 'Share a little more detail so the follow-up can be more helpful.';
    }
  }

  // Phone always optional but validate format if provided
  if (step === 3 && d.phone && d.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a valid phone number or leave this field blank.';
  }

  return errors;
}

function validateAllSteps(formData: FormData): FormErrors {
  return {
    ...validateStep(formData, 1),
    ...validateStep(formData, 2),
    ...validateStep(formData, 3),
  };
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const baseField =
  'w-full border bg-white px-4 py-3.5 font-body text-[15px] text-charcoal outline-none transition-colors';
const fieldOk = `${baseField} border-sand/30 focus:border-charcoal`;
const fieldErr = `${baseField} border-red-400 focus:border-red-500`;

/* ------------------------------------------------------------------ */
/*  Step Indicator                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ current }: { current: number }) {
  const steps = [
    { num: 1, label: 'Project' },
    { num: 2, label: 'Details' },
    { num: 3, label: 'Contact' },
  ];

  return (
    <div className="mb-10 flex items-center justify-center gap-3">
      {steps.map((step, i) => (
        <React.Fragment key={step.num}>
          {i > 0 && <div className="h-px w-8 bg-border" />}
          <div className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-medium transition-colors ${
                step.num === current
                  ? 'bg-warm-black text-white'
                  : step.num < current
                    ? 'bg-charcoal/20 text-charcoal'
                    : 'border border-sand/30 text-ash/80'
              }`}
            >
              {step.num < current ? <CheckCircle2 size={16} /> : step.num}
            </div>
            <span className="text-[13px] font-medium uppercase tracking-nav text-steel max-sm:hidden">
              {step.label}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

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
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState<File[]>([]);

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
    const v = validateStep(formData, step);
    setErrors((prev) => {
      const next = { ...prev };
      if (v[field]) next[field] = v[field];
      else delete next[field];
      return next;
    });
  };

  const goNext = () => {
    const v = validateStep(formData, step);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(3, s + 1));
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeFormData(formData);
    const v = validateAllSteps(normalized);

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
      let photoAttachments: PhotoAttachment[] | undefined;
      if (photos.length > 0) {
        photoAttachments = await Promise.all(
          photos.map(async (file) => ({
            filename: file.name,
            content: await fileToBase64(file),
          }))
        );
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...normalized, photoAttachments }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      trackEvent('generate_lead', {
        lead_source: normalized.leadSource,
        project_type: normalized.projectType,
      });
      setFormData((prev) => ({
        ...getInitialFormData({
          leadSource: initialLeadSource,
          projectType: initialProjectType,
        }),
        entryPage: prev.entryPage,
      }));
      setPhotos([]);
      setStep(1);
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
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-steel">Get In Touch</p>
          <h2 className="mx-auto mt-4 max-w-content-xl font-display text-section-heading text-charcoal">
            Start Your Project Conversation
          </h2>
          <p className="mx-auto mt-6 max-w-content-md text-body-lg text-concrete">
            Share the basics and Scott will follow up within one business day
            with clear next steps.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ---- Form column ---- */}
          <div>
            {status === 'success' ? (
              <div className="border border-sand/30 bg-cream p-12 text-center">
                <CheckCircle2 size={48} className="mx-auto text-charcoal" />
                <h3 className="mt-6 font-display text-card-heading text-charcoal">
                  Request Received
                </h3>
                <p className="mt-4 text-body-lg text-concrete">
                  Scott will review the details and follow up within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <StepIndicator current={step} />

                {/* ---- Step 1: Project Type + Location + Timeline ---- */}
                {step === 1 && (
                  <div>
                    {/* Project type */}
                    <div>
                      <label htmlFor="projectType" className="section-label text-steel">
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
                      <p className="mt-3 text-body-sm italic text-ash">
                        {selectedService.qualificationPrompt}
                      </p>
                    )}

                    {/* Location + Timeline */}
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectLocation" className="section-label text-steel">
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
                        <label htmlFor="targetTimeline" className="section-label text-steel">
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
                  </div>
                )}

                {/* ---- Step 2: Budget + Message + Photos ---- */}
                {step === 2 && (
                  <div>
                    {/* Budget */}
                    <div>
                      <label htmlFor="budgetRange" className="section-label text-steel">
                        Approximate Budget <span className="normal-case tracking-normal text-ash/80">(optional)</span>
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
                      <label htmlFor="message" className="section-label text-steel">
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
                      <div className="mt-1 flex justify-between text-[13px] text-ash/80">
                        <span>A few sentences is enough.</span>
                        <span>{formData.message.trim().length}/1500</span>
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Photos */}
                    <div className="mt-6">
                      <label className="section-label text-steel">
                        Project Photos <span className="normal-case tracking-normal text-ash/80">(optional)</span>
                      </label>
                      <div className="mt-2">
                        <FileUpload files={photos} onChange={setPhotos} maxFiles={5} maxSizeMB={10} />
                      </div>
                    </div>
                  </div>
                )}

                {/* ---- Step 3: Contact Info ---- */}
                {step === 3 && (
                  <div>
                    {/* Name row */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="section-label text-steel">
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
                        <label htmlFor="lastName" className="section-label text-steel">
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
                        <label htmlFor="email" className="section-label text-steel">
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
                        <label htmlFor="phone" className="section-label text-steel">
                          Phone <span className="normal-case tracking-normal text-ash/80">(optional)</span>
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
                  </div>
                )}

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

                {/* Navigation buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="btn-outline btn-outline-dark"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="btn-primary btn-primary-dark"
                    >
                      Next
                      <ArrowRight className="btn-arrow" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary btn-primary-dark disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Sending...' : 'Request My Estimate'}
                      <ArrowRight className="btn-arrow" />
                    </button>
                  )}

                  {step === 3 && (
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="btn-outline btn-outline-dark"
                    >
                      <Phone size={14} />
                      Call Scott
                    </a>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* ---- Info column ---- */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="border border-sand/30 bg-cream p-card-pad">
              <h3 className="font-display text-card-heading text-charcoal">
                Contact Details
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-ash/80" />
                  <div>
                    <p className="section-label text-ash">Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="mt-1 block text-body-lg text-charcoal transition-opacity hover:opacity-70"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-ash/80" />
                  <div>
                    <p className="section-label text-ash">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 block text-body-lg text-charcoal transition-opacity hover:opacity-70"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-ash/80" />
                  <div>
                    <p className="section-label text-ash">Location</p>
                    <p className="mt-1 text-body-lg text-charcoal">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-1 shrink-0 text-ash/80" />
                  <div>
                    <p className="section-label text-ash">Hours</p>
                    {CONTACT_INFO.hours.map((hour) => (
                      <p key={hour} className="mt-1 text-body-lg text-charcoal">
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="border border-sand/30 bg-warm-black p-card-pad text-white">
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
