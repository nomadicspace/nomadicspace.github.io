export interface ArticleContent {
  subtitle: string;
  text: string;
  image: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  published_date: string;
  category: string;
  tags: string[];
  content: ArticleContent[];
}
