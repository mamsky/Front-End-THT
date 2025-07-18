import type { QueryArticle } from "@/DTOs/articleDTO";
import { Http } from "@/services/Http";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

export class ArticleDataSource {
  async getArticle(params: string) {
    try {
      const res = await Http.get<QueryArticle>(params);
      return res.data.response.docs;
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 400:
            toast("Bad request: Check your query parameters.");
            break;
          case 401:
            toast("Unauthorized request");
            break;
          case 429:
            toast("Too many requests: please wait 1 minutes");
            break;
          default:
            console.error("An error occurred: ", error.message);
        }
      }
      return [];
    }
  }
}
