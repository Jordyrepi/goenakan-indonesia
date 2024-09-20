import { Document } from "@contentful/rich-text-types";

export interface Article {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
  items: ArticleItems[];
  includes: ArticleIncludes;
}

export interface ArticleItems {
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
    category: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    title: string;
    slug: string;
    thumbnail: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    createdAt: string;
    content: Document;
  };
}

export interface ArticleIncludes {
  Entry: {
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
  }[];
  Asset: {
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
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
        details: {
          size: number;
        };
        fileName: string;
        contentType: string;
      };
    };
  }[];
}
