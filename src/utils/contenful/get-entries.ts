import { contenfulConfig } from "./config";

const { baseUrl, spaceId, accessToken, environtmentId } = contenfulConfig;

export const getEntries = async (contentType: string) => {
  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=${contentType}`,
  );

  return response.json();
};
