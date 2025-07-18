/* eslint-disable */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ArticleDTO } from "@/DTOs/articleDTO";
import { useFetchArticle } from "@/hook/useFetchArticle";
import { mockArticle } from "./mock/mockArticle";

// Mock Repository
const mockGetArticle = vi.fn();
const mockRepository = {
  getArticle: mockGetArticle,
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFetchArticle", () => {
  beforeEach(() => {
    mockGetArticle.mockReset();
  });

  it("should fetch articles with empty query initially", async () => {
    const fakeData: ArticleDTO[] = mockArticle; // sesuaikan bentuk DTO
    mockGetArticle.mockResolvedValueOnce(fakeData);

    const { result, waitFor } = renderHook(
      () => useFetchArticle(mockRepository),
      {
        wrapper: createWrapper(),
      }
    );

    await waitFor(() => result.current.data !== undefined);

    expect(result.current.data).toEqual(fakeData);
    expect(result.current.isLoading).toBe(false);
    expect(mockGetArticle).toHaveBeenCalled();
  });

  it("should debounce and call refetch with new query", async () => {
    const fakeData: ArticleDTO[] = mockArticle;
    mockGetArticle.mockResolvedValue(fakeData);

    const { result, waitFor } = renderHook(
      () => useFetchArticle(mockRepository),
      {
        wrapper: createWrapper(),
      }
    );

    // Simulasi debounce input
    act(() => {
      result.current.debounce("new york");
    });

    await waitFor(() => result.current.data !== undefined);

    expect(mockGetArticle).toHaveBeenCalled();
  });
});
