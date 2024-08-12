export interface Categories {
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
      title: string;
      image: {
        sys: {
          id: string;
          linkType: string;
          type: string;
        };
      };
      slug: string;
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
