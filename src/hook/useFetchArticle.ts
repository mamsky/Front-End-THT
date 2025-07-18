import type { ArticleDTO } from "@/DTOs/articleDTO";
import { ArticleRepositoryImpl } from "@/features/article/Repository/ArticleRepository";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useFetchArticle = (repository: ArticleRepositoryImpl) => {
  const queryClient = useQueryClient();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState<string>("");

  const debounce = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  useEffect(() => {
    if (query) {
      queryClient.refetchQueries({ queryKey: ["article"] });
    }
  }, [query, queryClient]);

  const params = `?q=${query}&fq=timesTag.location:"New York City"&api-key=${apiKey}`;

  const { data, isFetching } = useQuery<ArticleDTO[]>({
    queryKey: ["article"],
    queryFn: () => repository.getArticle(params),
  });

  const isScroll = data?.length == 3;

  return {
    data,
    isScroll,
    debounce,
    isFetching,
  };
};
