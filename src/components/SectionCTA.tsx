import Link from "next/link";

interface SectionCTAProps {
  headline: string;
  body: string;
  buttonText: string;
  href?: string;
}

export default function SectionCTA({
  headline,
  body,
  buttonText,
  href = "/start",
}: SectionCTAProps) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-elevated">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
          {headline}
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          {body}
        </p>
        <Link
          href={href}
          className="inline-block px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-sm hover:bg-accent-hover transition-colors duration-200"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
