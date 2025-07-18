import { ArticleDataSource } from "@/features/article/DataSources/ArticleApiDataSource";
import ListArticle from "@/features/article/ListArticle";
import { ArticleRepositoryImpl } from "@/features/article/Repository/ArticleRepository";
import SearchArticleForm from "@/features/article/SearchArticleForm";
import SkeletonArticle from "@/features/article/SkeletonArticle";
import Layout from "@/features/components/Layout";
import { useFetchArticle } from "@/hook/useFetchArticle";

const ArticlePage = () => {
  const { data, debounce, isScroll, isLoading, isFetching } = useFetchArticle(
    new ArticleRepositoryImpl(new ArticleDataSource())
  );
  return (
    <Layout>
      <main className="backdrop-blur-sm bg-white/40 shadow-2xl p-2 mx-2 rounded-2xl w-full max-w-xl flex flex-col gap-2">
        <section className="p-2 w-full">
          <SearchArticleForm onSearch={debounce} isFetching={isFetching} />
        </section>
        <article
          className={`flex flex-col gap-5 p-2 w-full min-h-[90%] max-h-[95%] ${
            isScroll ? "" : "overflow-y-scroll"
          }`}
        >
          {isLoading || isFetching ? <SkeletonArticle /> : false}
          {data?.length == 0
            ? "Data Article Available"
            : data?.map((field) => (
                <ListArticle key={field._id} article={field} />
              ))}
        </article>
      </main>
    </Layout>
  );
};

export default ArticlePage;
