"use client";

import { ProductData } from "@/common/types";
import { useEffect, useRef, useState } from "react";
import BuyBtn from "./BuyBtn";
import ModalPopup from "./ModalPopup";
import LinkArrowBtn from "@/app/components/LinkArrowBtn";
import getLocalStoredFavourites from "@/app/utils/getLocalStoredFavourites";
import HeartCheckbox from "@/app/components/HeartCheckbox";
import handleFavouriteChange from "@/app/utils/handleFavouriteChange";
import SizedTitle from "@/app/components/SizedTitle";

type Props = {
  product: ProductData;
};

function ExtendedProduct({ product }: Props) {
  const ExtendedProductRef = useRef<HTMLDivElement | null>(null);

  const [rendered, setRendered] = useState(false);

  const [isFavourite, setIsFavourite] = useState<boolean>(
    getLocalStoredFavourites().includes(product.id)
  );

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <>
      <ModalPopup />

      <div
        ref={ExtendedProductRef}
        className={`${
          !rendered && "opacity-0"
        }  rounded-lg  md:p-4 lg:px-12 mb-8 z-10 relative`}
      >
        <LinkArrowBtn
          text={product.category}
          href={`/product-list?specificCategory=${product.category}`}
          className="relative cursor-pointer bg-purple-100 text-purple-800 !shadow-purple-400 border-purple-400 rounded-md dark:bg-gray-700 dark:text-purple-400 shadow-[_0px_0px_4px] hover:shadow-[_0px_0px_10px] border-[1px]  transition-all duration-200 text-[1rem] md:text-sm  lg:text-xl  font-medium inline-flex items-center px-3 py-1   sm:ml-2  mb-4"
        />

        <SizedTitle
          multiplier={1.5}
          parentRef={ExtendedProductRef}
          text={product.name}
          className="text-gray-900 leading-none  dark:text-white pointer-events-none font-extrabold mb-8"
          maxSize={128}
        />

        <p className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-gray-300 mb-6">
          {product.description}
        </p>

        <div className="flex gap-3 items-center">
          <BuyBtn product={product} />

          <HeartCheckbox
            isFav={isFavourite}
            onChange={(e) => {
              const { checked } = e.target;
              setIsFavourite(checked);
              handleFavouriteChange(checked, product.id);
            }}
            sizeStyles="w-6 h-6 lg:w-8 lg:h-8"
          />
        </div>
      </div>
    </>
  );
}

export default ExtendedProduct;
