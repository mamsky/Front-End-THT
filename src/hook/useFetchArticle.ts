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

  const debounce = useDebouncedCallback(
    (value: string) => setQuery(value),
    500
  );

  const queryParams = query
    ? `?q=${query}&fq=timesTag.location:"New York City"&api-key=${apiKey}`
    : `?q=war&begin_date=20240122&end_date=20250122&fq=timesTag.location:"New York City"&api-key=${apiKey}`;

  const {
    data: queryData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<ArticleDTO[]>({
    queryKey: ["article"],
    queryFn: () => repository.getArticle(queryParams),
  });

  useEffect(() => {
    if (query !== undefined) {
      refetch();
    }
  }, [query, refetch]);

  const isScroll = data?.length < 2;

  data = keywordNotFound.includes(query) ? [] : queryData;

  return {
    data,
    isScroll,
    debounce,
    isLoading,
    isFetching,
  };
};
