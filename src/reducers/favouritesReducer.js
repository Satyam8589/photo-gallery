export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const isAlreadyFavourited = state.some(
        (photo) => photo.id === action.payload.id
      );
      if (isAlreadyFavourited) {
        return state.filter((photo) => photo.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
};

export const loadFavouritesFromStorage = () => {
  try {
    const stored = localStorage.getItem("photo-gallery-favourites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};
