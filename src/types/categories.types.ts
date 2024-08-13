// Asset Interface
interface Asset {
  fields: {
    description: string;
    file: {
      url: string;
    };
    title: string;
  };
  metadata: Record<string, unknown>;
  sys: {
    createdAt: string;
    environment: SysLink;
    id: string;
    space: SysLink;
    type: string;
    updatedAt: string;
  };
}

// SysLink Interface
interface SysLink {
  id: string;
  linkType: string;
  type: string;
}

// CategoryItem Interface
interface CategoryItem {
  fields: {
    title: string;
    image: {
      sys: SysLink;
    };
    slug: string;
  };
  sys: {
    contentType: Record<string, unknown>;
    createdAt: string;
    environment: SysLink;
    id: string;
    space: SysLink;
    type: string;
    updatedAt: string;
  };
}

// Categories Interface
export interface Categories {
  includes: {
    Asset: Asset[];
  };
  items: CategoryItem[];
}
