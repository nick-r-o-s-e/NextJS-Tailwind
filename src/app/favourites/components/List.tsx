"use client";

import { ProductData } from "@/common/types";
import FavoriteCard from "./FavoriteCard";
import AddFavsCard from "./AddFavsCard";

type Props = {
  products: ProductData[];
};

function List({ products }: Props) {
  const favouritesIds = JSON.parse(
    localStorage.getItem("favouriteIds") || "[]"
  );

  const favs = products.filter((item) => favouritesIds.includes(item.id));

  if (favs.length == 0) {
    return <AddFavsCard />;
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 min-w-full items-stretch  2xl:grid-cols-4 gap-4 xl:px-6 ">
      {favs.map((product) => (
        <FavoriteCard key={product.id + "Fav"} product={product} />
      ))}
    </div>
  );
}

export default List;
