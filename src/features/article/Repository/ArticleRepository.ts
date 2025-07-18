import type { ArticleDTO } from "@/DTOs/articleDTO";
import type { ArticleDataSource } from "../DataSources/ArticleApiDataSource";

export interface ArticleRepository {
  getArticle(params: string): Promise<ArticleDTO[]>;
}

export class ArticleRepositoryImpl implements ArticleRepository {
  datasource: ArticleDataSource;

  constructor(datasource: ArticleDataSource) {
    this.datasource = datasource;
  }

  async getArticle(params: string): Promise<ArticleDTO[]> {
    return await this.datasource.getArticle(params);
  }
}
