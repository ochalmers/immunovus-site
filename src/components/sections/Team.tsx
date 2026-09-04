import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/content/site";

export function Team() {
  return (
    <section className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{team.eyebrow}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="panel overflow-hidden">
                <div className="relative aspect-[1/1] bg-[var(--surface-raised)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h2 className="h4">{member.name}</h2>
                  <p className="mt-2 text-[13px] uppercase tracking-[0.14em] text-[var(--accent)]">{member.role}</p>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)]">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
