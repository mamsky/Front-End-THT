import ListArticle from "@/features/article/ListArticle";
import SearchArticleForm from "@/features/article/SearchArticleForm";
import Layout from "@/features/components/Layout";

const ArticlePage = () => {
  return (
    <Layout>
      <main className="backdrop-blur-sm bg-white/40 shadow-2xl p-2 mx-2 rounded-2xl w-full max-w-xl flex flex-col gap-2">
        <section className="p-2 w-full">
          <SearchArticleForm />
        </section>
        <article className="flex flex-col gap-5 p-2 w-full min-h-[90%] max-h-[95%] overflow-y-scroll">
          <ListArticle />
          <ListArticle />
          <ListArticle />
          <ListArticle />
          <ListArticle />
        </article>
      </main>
    </Layout>
  );
};

export default ArticlePage;
