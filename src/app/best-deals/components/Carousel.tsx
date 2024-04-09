"use client";

import { useEffect } from "react";
import { initCarousels } from "flowbite";
import { ProductData } from "@/common/types";
import CarouselControlBtn from "./CarouselControlBtn";
import CarouselCard from "./CarouselCard/CarouselCard";
import ErrCard from "@/app/components/ErrCard";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  products: ProductData[] | null;
  errMsg: string;
};

function Carousel({ products, errMsg }: Props) {
  useEffect(() => {
    initCarousels();
  }, []);

  if (!products) {
    return <ErrCard errMsg={errMsg} />;
  }

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
