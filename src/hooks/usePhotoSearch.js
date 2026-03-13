import { useMemo } from "react";

/**
 * A custom hook to filter a list of photos by photographer name.
 * 
 * @param {Array} photos - The array of photo objects to search through.
 * @param {string} query - The search string.
 * @returns {Array} - The filtered array of photos.
 */
const usePhotoSearch = (photos, query) => {
  const filteredPhotos = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) {
      return photos;
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(trimmedQuery)
    );
  }, [photos, query]);

  return filteredPhotos;
};

export default usePhotoSearch;
