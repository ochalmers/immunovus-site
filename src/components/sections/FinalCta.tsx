import { InquiryForm } from "@/components/site/InquiryForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactFields, finalCta } from "@/content/site";

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
            <InquiryForm variant="contact" submitLabel={contactFields.submit} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
