'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_INFO,
  CONTACT_TRUST_POINTS,
  TARGET_TIMELINE_OPTIONS,
} from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

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
}

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
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData(initialFormData);
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
    <section id="contact" className="relative section-padding bg-cream">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">Get In Touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              Tell us what you&apos;re planning and we&apos;ll help you figure out the best next step without the runaround.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="right">
              <h3 className="mb-6 font-display text-3xl text-charcoal">Let&apos;s Talk About Your Home</h3>
              <p className="mb-12 text-lg leading-relaxed text-steel">
                Whether you&apos;re planning a major renovation or just exploring ideas, you&apos;ll get straightforward answers, a no-pressure estimate, and a clear sense of what comes next.
              </p>

              <div className="mb-12 grid gap-4">
                {CONTACT_TRUST_POINTS.map((point) => (
                  <div
                    key={point.id}
                    className="border border-sand/30 bg-white px-5 py-4 shadow-sm shadow-charcoal/5"
                  >
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
                <div className="group flex items-start gap-6">
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

                <div className="group flex items-start gap-6">
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

                <div className="group flex items-start gap-6">
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

                <div className="group flex items-start gap-6">
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
                <div className="border border-sand/30 bg-white p-8 text-center shadow-2xl shadow-charcoal/5 md:p-12">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-charcoal">Thank You!</h3>
                  <p className="mb-8 text-base leading-relaxed text-steel">
                    Your message has been sent. Scott will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:text-accent-dark"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-sand/30 bg-white p-8 shadow-2xl shadow-charcoal/5 md:p-12"
                >
                  <div className="mb-6 border border-accent/20 bg-accent/5 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                      Free estimate. No pressure. Clear next steps.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      Share a few details below and Scott will follow up to confirm fit, answer questions, and talk through timing.
                    </p>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="mb-6 flex flex-col gap-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-semibold uppercase tracking-widest text-steel"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="appearance-none border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a service...</option>
                      <option>Home Remodeling</option>
                      <option>Addition</option>
                      <option>Deck</option>
                      <option>Patio / Hardscaping</option>
                      <option>Bilco Door Installation</option>
                      <option>Windows & Doors</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="projectLocation"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        Project Town / Area
                      </label>
                      <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        required
                        placeholder="Langhorne, Newtown, Yardley..."
                        className="border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="targetTimeline"
                        className="text-xs font-semibold uppercase tracking-widest text-steel"
                      >
                        Target Timeline
                      </label>
                      <select
                        id="targetTimeline"
                        name="targetTimeline"
                        value={formData.targetTimeline}
                        onChange={handleChange}
                        required
                        className="appearance-none border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select timing...</option>
                        {TARGET_TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6 flex flex-col gap-2">
                    <label
                      htmlFor="budgetRange"
                      className="text-xs font-semibold uppercase tracking-widest text-steel"
                    >
                      Approximate Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="appearance-none border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a range...</option>
                      {BUDGET_RANGE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8 flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-widest text-steel"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe the project scope, the space involved, and anything important Scott should know before reaching out..."
                      className="min-h-[120px] resize-y border border-sand/50 bg-cream/50 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <Button type="submit" className="w-full md:w-auto" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Request'}
                  </Button>

                  <p className="mt-4 text-xs leading-relaxed text-steel">
                    Serving Bucks County and nearby South Jersey communities. Prefer to talk now? Call{' '}
                    <a
                      href="tel:2155191795"
                      className="font-semibold text-charcoal transition-colors hover:text-accent"
                    >
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
