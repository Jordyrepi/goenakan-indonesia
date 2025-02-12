export interface Client {
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
      clientName: string;
      logoClient: {
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

export interface CarouselClientProps {
  clients?: Client;
}

export const initialClientState: Client = {
  includes: {
    Asset: [],
  },
  items: [],
};