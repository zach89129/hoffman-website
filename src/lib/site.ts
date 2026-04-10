export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://drhoffmanmedical.com";
  const trimmed = raw.replace(/\/$/, "");
  return new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
}
