import { useCallback, useMemo, useReducer, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import {
  favouritesReducer,
  loadFavouritesFromStorage,
} from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorMessage from "./ErrorMessage";
import PhotoModal from "./PhotoModal";
import { useState } from "react";

const Gallery = ({ searchQuery, showFavourites, selectedPhoto, onPhotoSelect }) => {

  const { photos, loading, error } = useFetchPhotos();
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset pagination when search or favorites toggle
  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, showFavourites]);

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    loadFavouritesFromStorage
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        "photo-gallery-favourites",
        JSON.stringify(favourites)
      );
    } catch {
    }
  }, [favourites]);

  const handleToggleFavourite = useCallback((photo) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photo });
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const base = showFavourites ? favourites : photos;
    if (!query) return base;
    return base.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    );
  }, [photos, searchQuery, showFavourites, favourites]);

  // Subset of photos to actually display
  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {favourites.length > 0 && (
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-full px-4 py-1 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {favourites.length} favourite{favourites.length !== 1 ? "s" : ""}
          </span>
        </div>
      )}

      {filteredPhotos.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 opacity-40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={showFavourites
                ? "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                : "M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"}
            />
          </svg>
          <p className="text-sm font-medium">
            {showFavourites
              ? searchQuery
                ? `No favourites match "${searchQuery}"`
                : "No favourites yet — click ♥ on a photo to save it"
              : `No photos found for "${searchQuery}"`}
          </p>
        </div>
      )}

      <div
        id="photo-grid"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
      >
        {displayedPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourited={favourites.some((fav) => fav.id === photo.id)}
            onToggleFavourite={handleToggleFavourite}
            onClick={onPhotoSelect}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPhotos.length && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border border-gray-100 hover:border-violet-200 hover:text-violet-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-violet-100/50 flex items-center gap-3 active:scale-95"
          >
            Load More Photos
            <svg 
              className="w-5 h-5 group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      <PhotoModal 
        photo={selectedPhoto} 
        onClose={() => onPhotoSelect(null)} 
      />
    </div>
  );
};

export default Gallery;
