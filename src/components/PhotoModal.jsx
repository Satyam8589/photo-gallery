import { useState, useEffect } from "react";

const PhotoModal = ({ photo, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [photo?.id]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close Button - Outside the card to avoid overlap */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[60] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-all duration-200 hover:scale-110 active:scale-95 border border-white/20 shadow-2xl"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="relative max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="flex-1 bg-gray-100 flex items-center justify-center min-h-[300px] md:min-h-[600px] relative overflow-hidden">
            {/* Low-res Placeholder (Already cached from Grid) */}
            <img
              src={`https://picsum.photos/id/${photo.id}/400/400`}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            />
            
            {/* High-res Image */}
            <img
              src={`https://picsum.photos/id/${photo.id}/1200/800`}
              alt={`Photo by ${photo.author}`}
              onLoad={() => setIsLoaded(true)}
              className={`relative max-h-[80vh] w-full object-contain transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Loading Spinner overlay (subtle) */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 md:w-80 flex flex-col items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-violet-200">
                  {photo.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{photo.author}</h3>
                  <p className="text-sm text-gray-500 text-nowrap">Photographer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  This stunning photograph captured by <strong>{photo.author}</strong> is part of the curated collections from Picsum Photos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
