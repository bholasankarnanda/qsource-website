// lib/strapi.ts
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Fetch the first "What We Offer" entry from Strapi with sections populated.
 * Returns the entry object (or null).
 */
export async function getWhatWeOffer() {
  const url = `${STRAPI_URL}/api/what-we-offers?populate[sections][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    // Throwing helps you catch the error where you call this function.
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  // Return the first entry (or null if none)
  console.log(json?.[0]);
  return json?.data?.[0] ?? null;
}
