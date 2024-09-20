export interface ArticleCategory {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
  items: ArticleCategoryItems[]
}

export interface ArticleCategoryItems {
  metadata: { tags: [] };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    title: string;
    slug: string;
  };
}
