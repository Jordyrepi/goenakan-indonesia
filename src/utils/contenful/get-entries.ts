import { contenfulConfig, contenfulConfigPublic } from "./config";

const { baseUrl, spaceId, accessToken, environtmentId } = contenfulConfig;
const {
  baseUrlPublic,
  spaceIdPublic,
  accessTokenPublic,
  environtmentIdPublic,
} = contenfulConfigPublic;

export const getEntries = async (contentType: string) => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=${contentType}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return response.json();
};

export const getBestSellerCategoriesEntries = async () => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=category&fields.isBestSeller=true`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return response.json();
};

export const getEntriesPagination = async (
  page: number,
  selectedCategory: string,
) => {
  const limit = 12;
  const skip = (page - 1) * limit;

  const res = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=product&fields.category.sys.id=${selectedCategory}&skip=${skip}&limit=${limit}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const getEntriesCategoryBySysId = async (categorySysId: string) => {
  const response = await fetch(
    `${baseUrlPublic}/spaces/${spaceIdPublic}/environments/${environtmentIdPublic}/entries?access_token=${accessTokenPublic}&content_type=category&sys.id=${categorySysId}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return response.json();
};

export const getEntriesBySlug = async (contentType: string, slug: string) => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=${contentType}&fields.slug=${slug}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return response.json();
};


export const getArticleEntries = async () => {
  const response = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=article&order=fields.createdAt`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return response.json();
}

export const getArticleEntriesPagination = async (
  page: number,
  selectedCategory: string,
) => {
  const limit = 10;
  const skip = (page - 1) * limit;

  const res = await fetch(
    `${baseUrl}/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=product&fields.category.sys.id=${selectedCategory}&skip=${skip}&limit=${limit}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );

  const data = await res.json();
  return data;
};