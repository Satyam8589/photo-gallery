// Error message component shown when API fetch fails
const ErrorMessage = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 px-4">
    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71
             3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    </div>
    <div className="text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        Failed to load photos
      </h2>
      <p className="text-sm text-gray-500 max-w-sm">{message}</p>
    </div>
    <button
      id="retry-btn"
      onClick={() => window.location.reload()}
      className="mt-2 px-5 py-2 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors"
    >
      Try again
    </button>
  </div>
);

export default ErrorMessage;
