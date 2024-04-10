"use client";

import { useEffect } from "react";
import { initCarousels } from "flowbite";
import { ProductData } from "@/common/types";
import CarouselControlBtn from "./CarouselControlBtn";
import CarouselCard from "./CarouselCard/CarouselCard";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  products: ProductData[];
};

function Carousel({ products }: Props) {
  useEffect(() => {
    initCarousels();
  }, []);

  const cheapestN = (n: number) =>
    products.sort((a, b) => a.price - b.price).slice(0, n);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full max-w-[480px] lg:max-w-[800px] mx-auto"
        data-carousel="slide"
      >
        <div className="relative grid min-h-fit h-fit max-w-full rounded-lg overflow-hidden text-ellipsis">
          {cheapestN(5).map((product) => (
            <CarouselCard key={product.id} product={product} />
          ))}

          <CarouselControlBtn action="Previous" />

          <CarouselControlBtn action="Next" />
        </div>
      </div>
    </>
  );
}

export default Carousel;
