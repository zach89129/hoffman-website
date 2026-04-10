import { getSiteUrl } from "./site";

const clinicId = () => `${getSiteUrl().origin}/#clinic`;

export function getDotPhysicalServiceJsonLd() {
  const base = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "@id": `${base}/services/dot-physicals#service`,
        name: "DOT physical examinations (FMCSA)",
        description:
          "Department of Transportation medical exams for commercial motor vehicle drivers in Las Vegas, including CDL and Class C physicals, walk-in Monday through Friday.",
        url: `${base}/services/dot-physicals`,
        provider: { "@id": clinicId() },
        serviceType: "DOT physical",
        areaServed: {
          "@type": "City",
          name: "Las Vegas",
          containedInPlace: { "@type": "State", name: "Nevada" },
        },
        audience: {
          "@type": "PeopleAudience",
          audienceType: "Commercial motor vehicle drivers",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/services/dot-physicals#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DOT physicals",
            item: `${base}/services/dot-physicals`,
          },
        ],
      },
    ],
  };
}

export function getImmigrationPhysicalServiceJsonLd() {
  const base = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "@id": `${base}/services/immigration-physicals#service`,
        name: "Immigration medical examination (Form I-693)",
        description:
          "USCIS immigration medical exams and I-693 paperwork in Las Vegas. Appointments Monday–Friday; passport or valid ID required.",
        url: `${base}/services/immigration-physicals`,
        provider: { "@id": clinicId() },
        serviceType: "Immigration physical",
        areaServed: {
          "@type": "City",
          name: "Las Vegas",
          containedInPlace: { "@type": "State", name: "Nevada" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/services/immigration-physicals#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Immigration physicals",
            item: `${base}/services/immigration-physicals`,
          },
        ],
      },
    ],
  };
}
