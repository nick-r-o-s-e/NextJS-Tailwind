const getLocalStoredFavourites = () =>
  JSON.parse(localStorage.getItem("favouriteIds") || "[]");

export default getLocalStoredFavourites;
