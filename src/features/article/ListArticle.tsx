import type { ArticleDTO } from "@/DTOs/articleDTO";
import { formatDate } from "@/utils/formatDate";
import { sliceString } from "@/utils/sliceString";

const ListArticle = ({ article }: { article: ArticleDTO }) => {
  return (
    <a
      href={article.web_url}
      target="_blank"
      className="shadow-md hover:bg-teal-50 border-b-4 min-h-[260px] border-b-black/20 border-r-4 border-r-black/20 backdrop-blur-sm rounded-2xl bg-white/30 flex flex-col"
    >
      <div className="px-4 py-2 flex-col">
        <h1 className="text-2xl font-bold">
          {sliceString(article.headline.main, 100)}
        </h1>
        <p className="mt-2 text-md">
          {article.byline.original == ""
            ? "By Anonymous"
            : sliceString(article.byline.original, 40)}
        </p>
        <small className="block mt-1 text-md">
          {formatDate(article.pub_date)}
        </small>
        <p className="my-2">{sliceString(article.abstract, 160)} ...</p>
      </div>
    </a>
  );
};

export default ListArticle;
