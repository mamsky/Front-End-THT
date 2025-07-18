const Skeleton = () => {
  return (
    <div className="w-full border rounded-xl p-2">
      <div className="h-4 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-full mb-1"></div>
      <div className="h-4 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 max-w-48 mb-2.5"></div>
      <div className="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 mb-2.5 w-48"></div>
      <div className="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 max-w-36 mb-2.5"></div>
      <div className="h-3 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-3 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 "></div>
    </div>
  );
};

const SkeletonArticle = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
};

export default SkeletonArticle;
