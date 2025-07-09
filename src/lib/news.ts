export interface NewsItem {
  id: number;
  title: string;
  description: string | null;
  content: string;
  cover_image: string | null;
  created_at: string;
  updated_at: string;
  slug: string;
  author_id: number;
}