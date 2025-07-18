import type { QueryArticle } from "@/DTOs/articleDTO";
import { Http } from "@/services/Http";

export class ArticleDataSource {
  async getArticle(params: string) {
    const res = await Http.get<QueryArticle>(params);
    return res.data.response.docs;
  }
}
