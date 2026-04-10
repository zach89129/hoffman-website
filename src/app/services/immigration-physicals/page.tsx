import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getImmigrationPhysicalServiceJsonLd } from "@/lib/serviceJsonLd";
import { getSiteUrl } from "@/lib/site";
import "@/styles/service-landing.css";

const canonical = new URL("/services/immigration-physicals", getSiteUrl());

const title = "Immigration Medical Exam (I-693) in Las Vegas, NV";
const description =
  "USCIS immigration physicals and Form I-693 completion in Las Vegas. Appointments Mon–Fri. Passport or valid ID. Includes exam, labs, and paperwork — Hoffman Medical.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/immigration-physicals" },
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

export default function ImmigrationPhysicalsPage() {
  const jsonLd = getImmigrationPhysicalServiceJsonLd();

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="service-landing">
        <h1>Immigration physicals &amp; Form I-693 in Las Vegas</h1>
        <p className="lead">
          Dr. Hoffman offers efficient immigration medical examinations for your
          adjustment of status or visa process. Staff help with paperwork,
          vaccine history review, and required samples so your I-693 steps stay
          on track.
        </p>

        <section>
          <h2>Appointments &amp; what to bring</h2>
          <ul>
            <li>Appointment only — Monday through Friday</li>
            <li>Passport or valid government ID</li>
            <li>Vaccine history is helpful but not required for scheduling</li>
            <li>
              I-693 package $350 — includes blood and urine testing, physical
              exam, and required documentation
            </li>
            <li>
              TB testing and vaccines are not included; referrals provided when
              needed
            </li>
          </ul>
        </section>

        <section>
          <h2>Office location</h2>
          <address>
            8350 W. Sahara Ave Ste 170
            <br />
            Las Vegas, NV 89117
          </address>
        </section>

        <div className="cta">
          <p>
            <Link href="/#contact-section">Contact us to schedule</Link> ·{" "}
            <Link href="/#services-section">All services</Link>
          </p>
        </div>
      </article>
    </PageShell>
  );
}
