import { getSiteUrl } from "./site";

const address = {
  "@type": "PostalAddress" as const,
  streetAddress: "8350 W. Sahara Ave Ste 170",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89117",
  addressCountry: "US",
};

export function getOrganizationJsonLd() {
  const base = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${base}/#clinic`,
        name: "Hoffman Medical",
        url: base,
        knowsAbout: [
          "DOT physical examination",
          "CDL medical exam",
          "FMCSA medical certification",
          "Immigration medical examination",
          "USCIS Form I-693",
        ],
        telephone: "+1-702-243-8100",
        faxNumber: "+1-702-360-9416",
        email: "contact@drhoffmanmedical.com",
        image: `${base}/media/drHoffman.png`,
        address,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "13:00",
            closes: "16:00",
          },
        ],
      },
      {
        "@type": "Physician",
        "@id": `${base}/#physician`,
        name: "Dr. Edward Hoffman",
        image: `${base}/media/drHoffman.png`,
        telephone: "+1-702-243-8100",
        address,
        medicalSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Family Medicine",
        },
        worksFor: { "@id": `${base}/#clinic` },
      },
    ],
  };
}
