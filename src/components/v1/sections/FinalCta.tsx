"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactFields, finalCta } from "@/content/v1";

function ContactForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("interest") ?? "";
  const initialInterest = (contactFields.interests as readonly string[]).includes(preset) ? preset : "";
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST FormData to the Immunovus contact endpoint when it is ready.
    // Do not embed the destination email address in client-side code.
    setSent(true);
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} className="panel grid gap-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">{contactFields.nameLabel}</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="organisation">{contactFields.organisationLabel}</label>
          <input id="organisation" name="organisation" autoComplete="organization" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">{contactFields.emailLabel}</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="interest">{contactFields.interestLabel}</label>
        <select id="interest" name="interest" defaultValue={initialInterest} required>
          <option value="" disabled>
            Select one
          </option>
          {contactFields.interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">{contactFields.messageLabel}</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        {contactFields.submit}
      </button>
      {sent && (
        <p role="status" className="text-[14px] text-[var(--accent)]">
          {contactFields.thanks}
        </p>
      )}
    </form>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <h2 className="display max-w-[14ch]">{finalCta.headline}</h2>
            <p className="lede mt-6">{finalCta.copy}</p>
            <a href={finalCta.secondaryCta.href} className="btn btn-secondary mt-8">
              {finalCta.secondaryCta.label}
            </a>
          </Reveal>

          <Reveal delay={80}>
            <Suspense fallback={<div className="panel min-h-[28rem] p-6 md:p-8" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
