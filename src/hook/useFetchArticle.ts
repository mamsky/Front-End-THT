import type { ArticleDTO } from "@/DTOs/articleDTO";
import { ArticleRepositoryImpl } from "@/features/article/Repository/ArticleRepository";
import { Delay } from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export const useFetchArticle = (repository: ArticleRepositoryImpl) => {
  const { value } = Delay();
  const apiKey = import.meta.env.VITE_API_KEY;
  const query = value ? `q=${value}&` : "";
  const params = `?${query}fq=timesTag.location:"New York City"&api-key=${apiKey}`;

  const { data } = useQuery<ArticleDTO[]>({
    queryKey: ["article"],
    queryFn: () => repository.getArticle(params),
  });

  return {
    data,
  };
};
