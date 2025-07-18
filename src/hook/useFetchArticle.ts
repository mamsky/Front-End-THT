import type { ArticleDTO } from "@/DTOs/articleDTO";
import { ArticleRepositoryImpl } from "@/features/article/Repository/ArticleRepository";
import { useQuery } from "@tanstack/react-query";

export const useFetchArticle = (repository: ArticleRepositoryImpl) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const params = `?fq=timesTag.location:"New York City"&api-key=${apiKey}`;

  const { data } = useQuery<ArticleDTO[]>({
    queryKey: ["article"],
    queryFn: () => repository.getArticle(params),
  });

  return {
    data,
  };
};
