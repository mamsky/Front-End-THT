import type { ArticleDTO } from "@/DTOs/articleDTO";
import { ArticleRepositoryImpl } from "@/features/article/Repository/ArticleRepository";
import { keywordNotFound } from "@/utils/keywordFound";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useFetchArticle = (repository: ArticleRepositoryImpl) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState<string>("");
  let data: ArticleDTO[] | undefined = [];
  const debounce = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  const params = query
    ? `?q=${query}&fq=timesTag.location:"New York City"&api-key=${apiKey}`
    : `?q=&fq=timesTag.location:"New York City"&api-key=${apiKey}`;

  const {
    data: queryData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<ArticleDTO[]>({
    queryKey: ["article"],
    queryFn: () => repository.getArticle(params),
  });

  useEffect(() => {
    if (query || query === "") {
      refetch();
    }
  }, [query, refetch]);

  const isScroll = data?.length < 2;
  data = queryData;
  if (keywordNotFound.includes(query)) {
    data = [];
  }
  return {
    data,
    isScroll,
    debounce,
    isLoading,
    isFetching,
  };
};
