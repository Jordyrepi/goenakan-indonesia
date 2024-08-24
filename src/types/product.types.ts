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
      description: string;
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

export interface ProductDetails {
  sys: {
    type: string;
  };
  items: {
    sys: {
      space: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      revision: number;
      contentType: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      locale: string;
    };
    fields: {
      title: string;
      slug: string;
      price: string;
      images: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      }[];
      category: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      bestSeller?: boolean;
      description: string;
      capacity?: number;
    };
  }[];
  includes: {};
}

export interface ProductCardProps {
  description: string;
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
}
