export interface Client {
  id: number;
  name: string;
  image: string;
}

export interface CarouselClientProps {
  clients: Client[];
}
