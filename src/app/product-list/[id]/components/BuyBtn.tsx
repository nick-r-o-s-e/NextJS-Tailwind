"use client";

import { useEffect } from "react";
import { initModals } from "flowbite";
import { ProductData } from "@/common/types";

type Props = {
  product: ProductData;
};

function BuyBtn({ product }: Props) {
  useEffect(() => {
    initModals();
  }, []);

  return (
    <button
      data-modal-target="popup-modal"
      data-modal-toggle="popup-modal"
      className="cursor-pointer inline-flex justify-center items-center py-2 px-4 lg:py-2.5 lg:px-5 text-md lg:text-2xl font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >
      {product.price.toFixed(2)} {product.currency}
    </button>
  );
}

export default BuyBtn;
