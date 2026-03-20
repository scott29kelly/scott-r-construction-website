import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { ABOUT_CONTENT, HOMEOWNER_SAFEGUARDS, SITE_INFO } from '@/lib/constants';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden section-padding text-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.1),transparent_22%),radial-gradient(circle_at_90%_10%,rgba(221,183,132,0.12),transparent_18%),linear-gradient(180deg,rgba(251,248,242,0.94),rgba(243,238,229,0.96))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <ScrollReveal>
              <SectionLabel>About Scott</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="max-w-4xl whitespace-pre-line font-display text-4xl leading-[0.96] text-charcoal md:text-5xl lg:text-[4.2rem]">
                {ABOUT_CONTENT.heading}
              </h2>
            </ScrollReveal>

            <div className="mt-8 space-y-6">
              {ABOUT_CONTENT.paragraphs.map((text, index) => (
                <ScrollReveal key={text} delay={0.14 + index * 0.06}>
                  <p
                    className={
                      index === 0
                        ? 'max-w-2xl text-lg leading-relaxed text-charcoal'
                        : 'max-w-2xl text-lg leading-relaxed text-steel'
                    }
                  >
                    {text}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="site-panel p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Working style
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    Scott stays involved in the estimate, the build, and the final walkthrough so
                    the person you trust at the start is still accountable at the end.
                  </p>
                </div>
                <div className="site-panel p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Homeowner reassurance
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    Questions about scope, fit, and timing are welcomed early so the project feels
                    clear before commitments get made.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <div className="site-panel mt-10 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                      Why it feels safer to reach out
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal">
                      Local, owner-operated, and established since {SITE_INFO.established}.
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
                      The business is built around being reachable, transparent, and present in
                      the work instead of being a name attached to a sales layer.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {HOMEOWNER_SAFEGUARDS.map((item) => (
                    <div key={item.id} className="border border-sand/25 bg-white/72 px-5 py-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
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
          </div>

          <div>
            <ScrollReveal direction="left" delay={0.18}>
              <div className="site-frame">
                <div className="site-panel p-3 md:p-4">
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/images/scott-romanoski-self-photo-1.jpeg"
                    alt="Scott Romanoski"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <div className="max-w-md border border-white/40 bg-white/88 p-5 backdrop-blur-sm">
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                          Owner-led by design
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-steel">
                          Homeowners are not handed off to a sales layer. The same person
                          discussing the estimate is accountable for how the work gets built.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <div className="site-panel-dark bg-noise mt-8 p-6 text-cream">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                  Credentials homeowners can verify
                </p>
                <div className="mt-5 grid gap-3">
                  {ABOUT_CONTENT.credentials.map((credential) => (
                    <div key={credential} className="border border-white/10 bg-white/6 px-5 py-4">
                      <p className="text-sm leading-relaxed text-ash">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
