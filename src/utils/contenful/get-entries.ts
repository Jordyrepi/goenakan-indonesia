import { contenfulConfig } from "./config";

const { baseUrl, spaceId, accessToken, environtmentId } = contenfulConfig;

export const getEntries = async (contentType: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CONTENFUL_BASE_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENFUL_ENVIRONTMENT_ID}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_TOKEN}&content_type=${contentType}`,
  );

  return response.json();
};
