import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getDotPhysicalServiceJsonLd } from "@/lib/serviceJsonLd";
import { getSiteUrl } from "@/lib/site";
import "@/styles/service-landing.css";

const canonical = new URL("/services/dot-physicals", getSiteUrl());

const title = "DOT Physicals & CDL Exams in Las Vegas, NV";
const description =
  "Walk-in DOT physicals for commercial drivers in Las Vegas (FMCSA). CDL exams $75, Class C & taxi $60. Near W. Sahara Ave. Valid ID required — Hoffman Medical.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/dot-physicals" },
  openGraph: {
    title: `${title} | Hoffman Medical`,
    description,
    url: canonical.toString(),
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Hoffman Medical`,
    description,
  },
};

export default function DotPhysicalsPage() {
  const jsonLd = getDotPhysicalServiceJsonLd();

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="service-landing">
        <h1>DOT physicals for commercial drivers in Las Vegas</h1>
        <p className="lead">
          Hoffman Medical provides Department of Transportation (DOT) medical
          examinations for commercial motor vehicle drivers. Our team follows
          Federal Motor Carrier Safety Administration (FMCSA) standards so you
          can stay qualified to drive.
        </p>

        <section>
          <h2>Walk-in DOT physicals</h2>
          <ul>
            <li>Walk-in services Monday through Friday</li>
            <li>Bring a valid ID and form of payment</li>
            <li>Office provides required paperwork</li>
            <li>CDL physicals: $75</li>
            <li>Class C and taxi physicals: $60</li>
          </ul>
        </section>

        <section>
          <h2>Location</h2>
          <address>
            8350 W. Sahara Ave Ste 170
            <br />
            Las Vegas, NV 89117
          </address>
        </section>

        <div className="cta">
          <p>
            <Link href="/#contact-section">Call or email for hours and directions</Link> ·{" "}
            <Link href="/#services-section">All services</Link>
          </p>
        </div>
      </article>
    </PageShell>
  );
}
