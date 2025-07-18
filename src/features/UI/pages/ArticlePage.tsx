import ListArticle from "../../article/ListArticle";
import SearchArticleForm from "../../article/SearchArticleForm";
import Layout from "../../components/Layout";

const ArticlePage = () => {
  return (
    <Layout>
      <main className="backdrop-blur-xl bg-white/50 shadow-xl p-2 mx-2 rounded-2xl w-full max-w-xl flex flex-col gap-2">
        <section className="p-2 w-full">
          <SearchArticleForm />
        </section>
        <article className="flex flex-col gap-2 p-2 w-full max-h-[95%] overflow-y-scroll scrollbar">
          <ListArticle />
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
