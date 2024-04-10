"use client";

// Components: //
import BuyBtn from "./BuyBtn";
import ModalPopup from "./ModalPopup";
import HeartCheckbox from "@/app/components/HeartCheckbox";
import SizedTitle from "@/app/components/SizedTitle";

// Hooks: //
import { ChangeEvent, useEffect, useRef, useState } from "react";

// Utils: //
import { ProductData } from "@/common/types";
import getLocalStoredFavourites from "@/app/utils/getLocalStoredFavourites";
import handleFavouriteChange from "@/app/utils/handleFavouriteChange";
import { initTooltips } from "flowbite";
import Link from "next/link";
import { isMobile } from "react-device-detect";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  product: ProductData;
};

const timeoutsIds: ReturnType<typeof setTimeout>[] = [];

const clearTimeouts = () => {
  timeoutsIds.forEach((id) => clearTimeout(id));
};

function ExtendedProduct({ product }: Props) {
  const ExtendedProductRef = useRef<HTMLDivElement | null>(null);

  const [rendered, setRendered] = useState(false);

  const [isFavourite, setIsFavourite] = useState<boolean>(
    getLocalStoredFavourites().includes(product.id)
  );

  const [addFavTip, setAddFavTip] = useState<
    "Add to Favourites" | "Added" | "Removed" | "Remove from Favourites"
  >("Remove from Favourites");

  const handleFavChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsFavourite(checked);

    handleFavouriteChange(checked, product.id);

    setAddFavTip(checked ? "Added" : "Removed");

    clearTimeouts();

    await new Promise((resolve) =>
      timeoutsIds.push(
        setTimeout(() => {
          setAddFavTip(
            checked ? "Remove from Favourites" : "Add to Favourites"
          );
          resolve;
        }, 1000)
      )
    );
  };

  useEffect(() => {
    initTooltips();
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
        <Link
          type="button"
          href={`/product-list?specificCategory=${product.category}`}
          className="relative cursor-pointer bg-purple-100 text-purple-800 !shadow-purple-400 border-purple-400 rounded-md dark:bg-gray-700 dark:text-purple-400 shadow-[_0px_0px_4px] hover:shadow-[_0px_0px_10px] border-[1px]  transition-all duration-200 text-[1rem] md:text-sm  lg:text-xl  font-medium inline-flex items-center px-3 py-1   sm:ml-2  mb-4"
        >
          {product.category}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>

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

          <button
            type="button"
            data-tooltip-target="tooltip-add-fav"
            data-tooltip-placement="right"
          >
            {!isMobile && (
              <div
                id="tooltip-add-fav"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-[0.3rem] text-sm font-medium text-white transition-opacity duration-300 bg-gray-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600"
              >
                {addFavTip}
              </div>
            )}

            <HeartCheckbox
              isFav={isFavourite}
              onChange={handleFavChange}
              sizeStyles="w-6 h-6 lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ExtendedProduct;
