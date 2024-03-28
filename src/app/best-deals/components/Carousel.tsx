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
  const fiveCheapest = products.sort((a, b) => a.price - b.price).slice(0, 5);

  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full max-w-[480px] lg:max-w-[800px] mb-8 mx-auto"
        data-carousel="slide"
      >
        <div className="relative grid min-h-fit h-fit max-w-full rounded-lg overflow-hidden text-ellipsis">
          {fiveCheapest.map((product) => (
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
