export interface FooterTypes {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
  items: {
    fields: {
      contactPerson1: string;
      contactPersonName1: string;
      contactPerson2: string;
      contactPersonName2: string;
      contactPerson3: string;
      contactPersonName3: string;
      location: string;
      linkedInLink?: string
      facebookLink?: string
      tiktokLink?: string
      instagramLink?: string
    };
  }[];
}
