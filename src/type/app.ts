interface Article {
  title: string;
  link: string;
}

interface CategoryGroup {
  [source: string]: Article[]
}

interface RSSNews {
  [category: string]: CategoryGroup
}

export type {
  Article,
  CategoryGroup,
  RSSNews
}