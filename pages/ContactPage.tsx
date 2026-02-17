import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { FormField } from '../components/ui/FormField';
import { Button } from '../components/ui/Button';
import { fetchStudioInfo } from '../lib/sanity';
import type { StudioInfo } from '../types';

export function ContactPage() {
  const [studio, setStudio] = useState<StudioInfo | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchStudioInfo().then(setStudio);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <Container>
        <div className="pt-8 md:pt-16 mb-12 md:mb-22">
          <ScrollReveal>
            <h1 className="font-display text-page-title mb-4">Contact</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-body text-body-lg text-text-secondary max-w-reading">
              프로젝트 문의나 협업 제안을 기다립니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-section">
          {/* Form */}
          <div className="md:col-span-7">
            <ScrollReveal delay={200}>
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="font-display text-xl font-medium mb-2">감사합니다</p>
                  <p className="font-body text-body text-text-secondary">메시지가 전송되었습니다. 곧 연락드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      label="Name"
                      name="name"
                      value={form.name}
                      onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                      required
                    />
                  </div>
                  <FormField
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                    required
                  />
                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={form.message}
                    onChange={(v) => setForm((p) => ({ ...p, message: v }))}
                    required
                    rows={6}
                  />
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="md:col-span-4 md:col-start-9">
            <ScrollReveal delay={300}>
              <div className="space-y-8">
                {studio && (
                  <>
                    <div>
                      <p className="font-mono text-caption uppercase text-text-tertiary mb-2 tracking-[0.12em]">Email</p>
                      <a href={`mailto:${studio.email}`} className="font-body text-body hover:text-text-secondary transition-colors">
                        {studio.email}
                      </a>
                    </div>
                    {studio.phone && (
                      <div>
                        <p className="font-mono text-caption uppercase text-text-tertiary mb-2 tracking-[0.12em]">Phone</p>
                        <p className="font-body text-body">{studio.phone}</p>
                      </div>
                    )}
                    <div>
                      <p className="font-mono text-caption uppercase text-text-tertiary mb-2 tracking-[0.12em]">Address</p>
                      <p className="font-body text-body">{studio.addressKo}</p>
                    </div>
                    <div>
                      <p className="font-mono text-caption uppercase text-text-tertiary mb-2 tracking-[0.12em]">Social</p>
                      <div className="flex flex-col gap-1.5">
                        {studio.social.map((s) => (
                          <a
                            key={s.platform}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-body text-text-secondary hover:text-text-primary transition-colors w-fit"
                          >
                            {s.platform}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
