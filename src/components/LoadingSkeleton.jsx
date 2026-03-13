const PhotoSkeleton = () => (
  <div className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100/50 shadow-sm animate-pulse">
    {/* Image placeholder */}
    <div className="aspect-[4/5] bg-gray-200" />
    
    {/* Footer placeholder */}
    <div className="px-5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Avatar circle */}
        <div className="w-8 h-8 rounded-xl bg-gray-200" />
        {/* Name block */}
        <div className="h-4 w-24 bg-gray-200 rounded-md" />
      </div>
      {/* Icon block */}
      <div className="w-8 h-8 rounded-xl bg-gray-100" />
    </div>
  </div>
);

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(8)].map((_, i) => (
        <PhotoSkeleton key={i} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
