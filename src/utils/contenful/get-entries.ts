import { contenfulConfig } from "./config";

const { baseUrl, spaceId, accessToken, environtmentId } = contenfulConfig;

export const getEntries = async (contentType: string) => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=${contentType}`,
  );

  return response.json();
};

export const getEntriesBySlug = async (contentType: string, slug: string) => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=${contentType}&fields.slug=${slug}`,
    { cache: "no-store" },
  );

  return response.json();
};
