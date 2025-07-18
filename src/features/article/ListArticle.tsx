import type { ArticleDTO } from "@/DTOs/articleDTO";
import { formatDate } from "@/utils/formatDate";

const ListArticle = ({ article }: { article: ArticleDTO }) => {
  return (
    <a
      href={article.web_url}
      target="_blank"
      className="shadow-md hover:bg-teal-50 border-b-4 min-h-[240px] border-b-black/20 border-r-4 border-r-black/20 backdrop-blur-sm rounded-2xl bg-white/30 flex flex-col"
    >
      <div className="px-4 py-2 flex-col">
        <h1 className="text-2xl font-bold">{article.headline.main}</h1>
        <p className="mt-2 text-md">{article.byline.original}</p>
        <small className="block mt-1 text-md">
          {formatDate(article.pub_date)}
        </small>
      </div>
      <p className="px-4 flex-grow flex items-center">
        <span>{article.abstract}</span>
      </p>
    </a>
  );
};

export default ListArticle;
