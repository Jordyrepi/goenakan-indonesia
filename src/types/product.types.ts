export interface Product {
  includes: {
    Asset: {
      fields: {
        description: string;
        file: {
          url: string;
        };
        title: string;
      };
      metadata: {};
      sys: {
        createdAt: string;
        environment: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
          id: string;
        };
        id: string;
        space: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        type: string;
        updatedAt: string;
      };
    }[];
  };
  items: {
    fields: {
      bestSeller: boolean;
      category: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      images: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      }[];
      price: string;
      productsThatHaveBeenSold: string;
      slug: string;
      title: string;
    };
    sys: {
      contentType: {};
      createdAt: string;
      environment: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
        id: string;
      };
      id: string;
      space: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      type: string;
      updatedAt: string;
    };
  }[];
}
