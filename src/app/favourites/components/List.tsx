"use client";

import { ProductData } from "@/common/types";
import FavoriteCard from "./FavoriteCard";
import InfoCard from "@/app/components/InfoCard";
import LinkArrowBtn from "@/app/components/Buttons/LinkArrowBtn";

type Props = {
  products: ProductData[];
};

function List({ products }: Props) {
  const favouritesIds = JSON.parse(
    localStorage.getItem("favouriteIds") || "[]"
  );

  const favs = products.filter((item) => favouritesIds.includes(item.id));

  if (favs.length == 0) {
    return (
      <div className="mx-auto flex justify-self center max-w-[740px] ">
        <InfoCard
          title="Find your favourites now!"
          content="You have not yet added any product to your favourite list, you can do
          it by visiting the product list."
          type="Info"
          actionButtons={
            <LinkArrowBtn text="See Product List" href="/product-list" />
          }
        />
      </div>
    );
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
