"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contactFields, formOptions } from "@/content/site";

type Variant = "contact" | "discovery" | "clinical" | "individual";

function InquiryFields({
  variant,
  submitLabel,
  consent,
  initialInterest = "",
}: {
  variant: Variant;
  submitLabel: string;
  consent?: string;
  initialInterest?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="panel grid gap-5 p-6 md:p-8">
      <input type="hidden" name="form" value={variant} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">{contactFields.nameLabel}</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        {variant === "individual" ? null : (
          <div className="field">
            <label htmlFor={variant === "clinical" ? "affiliation" : "organisation"}>
              {variant === "clinical" ? contactFields.affiliationLabel : contactFields.organisationLabel}
            </label>
            <input
              id={variant === "clinical" ? "affiliation" : "organisation"}
              name={variant === "clinical" ? "affiliation" : "organisation"}
              autoComplete="organization"
            />
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">
          {variant === "contact" ? contactFields.workEmailLabel : contactFields.emailLabel}
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      {variant === "contact" ? (
        <>
          <div className="field">
            <label htmlFor="interest">{contactFields.interestLabel}</label>
            <select id="interest" name="interest" defaultValue={initialInterest} required>
              <option value="" disabled>
                Select an area
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
            <span className="text-[13px] text-[var(--text-muted)]">{contactFields.messageHint}</span>
            <textarea id="message" name="message" required />
          </div>
        </>
      ) : null}

      {variant === "discovery" ? (
        <>
          <div className="field">
            <label htmlFor="role">{contactFields.roleLabel}</label>
            <select id="role" name="role" defaultValue="" required>
              <option value="" disabled>
                Select a role
              </option>
              {formOptions.roles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="useCase">{contactFields.useCaseLabel}</label>
            <select id="useCase" name="useCase" defaultValue="" required>
              <option value="" disabled>
                Select a use case
              </option>
              {formOptions.useCases.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">{contactFields.descriptionLabel}</label>
            <textarea id="description" name="description" maxLength={900} />
          </div>
        </>
      ) : null}

      {variant === "clinical" ? (
        <>
          <div className="field">
            <label htmlFor="specialty">{contactFields.specialtyLabel}</label>
            <select id="specialty" name="specialty" defaultValue="" required>
              <option value="" disabled>
                Select a specialty
              </option>
              {formOptions.specialties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="track">{contactFields.trackLabel}</label>
            <span className="text-[13px] text-[var(--text-muted)]">{contactFields.trackHint}</span>
            <select id="track" name="track" defaultValue="">
              <option value="">Select an option</option>
              {formOptions.clinicianTrack.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : null}

      {variant === "individual" ? (
        <div className="field">
          <label htmlFor="track">{contactFields.trackLabel}</label>
          <span className="text-[13px] text-[var(--text-muted)]">{contactFields.trackHint}</span>
          <select id="track" name="track" defaultValue="">
            <option value="">Select an option</option>
            {formOptions.individualTrack.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {consent ? (
        <label className="flex items-start gap-3 text-[14px] leading-6 text-[var(--text-secondary)]">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 accent-[var(--accent)]"
          />
          <span>{consent}</span>
        </label>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        {submitLabel}
      </button>
      {sent ? (
        <p role="status" className="text-[14px] text-[var(--accent)]">
          {contactFields.thanks}
        </p>
      ) : null}
    </form>
  );
}

function ContactInquiry({
  submitLabel,
}: {
  submitLabel: string;
}) {
  const searchParams = useSearchParams();
  const preset = searchParams.get("interest") ?? "";
  const initialInterest = (contactFields.interests as readonly string[]).includes(preset) ? preset : "";
  return <InquiryFields variant="contact" submitLabel={submitLabel} initialInterest={initialInterest} />;
}

export function InquiryForm({
  variant,
  submitLabel,
  consent,
}: {
  variant: Variant;
  submitLabel: string;
  consent?: string;
}) {
  if (variant === "contact") {
    return (
      <Suspense fallback={<div className="panel min-h-[22rem] p-6 md:p-8" />}>
        <ContactInquiry submitLabel={submitLabel} />
      </Suspense>
    );
  }

  return <InquiryFields variant={variant} submitLabel={submitLabel} consent={consent} />;
}
