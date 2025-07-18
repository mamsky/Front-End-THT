const ListArticle = () => {
  return (
    <a
      href="#"
      target="_blank"
      className="shadow-md hover:bg-teal-50 border-b-4 min-h-40 border-b-black/20 border-r-4 border-r-black/20 backdrop-blur-sm rounded-2xl bg-white/30"
    >
      <div className="p-2">
        <h1 className="text-2xl">Title</h1>
        <p>origin Name</p>
        <small>create At</small>
        <p className="my-2">Description</p>
      </div>
    </a>
  );
};

export default ListArticle;
