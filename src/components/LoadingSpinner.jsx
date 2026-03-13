const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-violet-100" />
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 animate-spin" />
    </div>
    <p className="text-violet-500 font-medium text-sm tracking-wide animate-pulse">
      Loading photos…
    </p>
  </div>
);

export default LoadingSpinner;
