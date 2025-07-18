import type { QueryArticle } from "@/DTOs/articleDTO";
import { Http } from "@/services/Http";
import { isAxiosError } from "axios";

export class ArticleDataSource {
  async getArticle(params: string) {
    try {
      const res = await Http.get<QueryArticle>(params);
      return res.data.response.docs;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
      return [];
    }
  }
}
