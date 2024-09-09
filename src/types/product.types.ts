export interface Product {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
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
    Entry: {
      fields: {
        image: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        slug: string;
        title: string;
      };
      metadata: {
        tags: {}[];
      };
      sys: {
        contentType: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        createdAt: string;
        environment: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        id: string;
        locale: string;
        revision: string;
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
      isAvailable: boolean;
      long: number;
      width: number;
      capacity: number;
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
      productsThatHaveBeenSold: string;
      isAvailable: boolean;
      long: number;
      width: number;
      capacity: number;
    };
  }[];
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
    Entry: {
      fields: {
        image: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        slug: string;
        title: string;
      };
      metadata: {
        tags: {}[];
      };
      sys: {
        contentType: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        createdAt: string;
        environment: {
          sys: {
            id: string;
            linkType: string;
            type: string;
          };
        };
        id: string;
        locale: string;
        revision: string;
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
  isAvailable: boolean;
  long: number;
  width: number;
  capacity: number;
}
