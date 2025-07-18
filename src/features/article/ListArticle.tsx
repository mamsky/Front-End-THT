import type { ArticleDTO } from "@/DTOs/articleDTO";

const ListArticle = ({ article }: { article: ArticleDTO }) => {
  return (
    <a
      href="#"
      target="_blank"
      className="shadow-md hover:bg-teal-50 border-b-4 min-h-54 border-b-black/20 border-r-4 border-r-black/20 backdrop-blur-sm rounded-2xl bg-white/30"
    >
      <div className="p-2">
        <h1 className="text-2xl">{article.headline.main}</h1>
        <p>{article.byline.original}</p>
        <small>{article.pub_date}</small>
        <p className="mt-2">{article.abstract}</p>
      </div>
    </a>
  );
};

export default ListArticle;
