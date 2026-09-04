import { AskList } from "@/components/site/AskList";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function InquiryPage({
  eyebrow,
  headline,
  lede,
  note,
  variant,
  submitLabel,
  consent,
  showAskList = false,
}: {
  eyebrow: string;
  headline: string;
  lede: string;
  note?: string;
  variant: "discovery" | "clinical" | "individual";
  submitLabel: string;
  consent?: string;
  showAskList?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} headline={headline} lede={lede} note={note} />
      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <div className={`grid items-start gap-8 ${showAskList ? "lg:grid-cols-[1.1fr_0.9fr]" : "max-w-2xl"}`}>
            <Reveal>
              <InquiryForm variant={variant} submitLabel={submitLabel} consent={consent} />
            </Reveal>
            {showAskList ? (
              <Reveal delay={80}>
                <AskList />
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
