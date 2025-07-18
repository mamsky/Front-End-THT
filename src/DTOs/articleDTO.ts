export type ArticleDTO = {
  _id: string;
  abstract: string;
  byline: {
    original: string;
  };
  headline: {
    main: string;
  };
  pub_date: string;
  web_url: string;
};

export interface QueryArticle {
  response: {
    docs: ArticleDTO[];
  };
}
