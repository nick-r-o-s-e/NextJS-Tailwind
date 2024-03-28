import getLocalStoredFavourites from "./getLocalStoredFavourites";

const handleFavouriteChange = (checked: boolean, itemId: string | number) => {
  const favsIds = getLocalStoredFavourites();

  if (checked) {
    favsIds.push(itemId);
  } else {
    const index = favsIds.indexOf(itemId);

    index !== -1 && favsIds.splice(index, 1);
  }

  localStorage.setItem("favouriteIds", JSON.stringify(favsIds));
};

export default handleFavouriteChange;
