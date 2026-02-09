export interface Poster {
  id: string;
  title: string;
  titleKo: string;
  year: string;
  client: string;
  tags: string[];
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'wide' | 'tall';
  color: string;
  accentColor: string;
  description: string;
}
