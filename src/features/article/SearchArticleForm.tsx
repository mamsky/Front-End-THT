import SearchIcon from "../../assets/images/transparency.png";

interface props {
  onSearch: (value: string) => void;
}
const SearchArticleForm = ({ onSearch }: props) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search article...."
        onChange={(e) => onSearch(e.target.value)}
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
