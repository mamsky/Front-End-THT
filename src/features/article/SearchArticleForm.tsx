import { Delay } from "@/utils/delay";
import SearchIcon from "../../assets/images/transparency.png";

const SearchArticleForm = () => {
  const { debounced } = Delay();
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search article...."
        onChange={(e) => debounced(e.target.value)}
        className="p-2 rounded-md w-full border bg-white/50 focus:bg-white/10 shadow-2xl"
      />
      <img
        src={SearchIcon}
        alt="search"
        className="absolute top-0.5 right-0.5 p-2 w-9 h-9 bg-none rounded-xl"
      />
    </div>
  );
};

export default SearchArticleForm;
