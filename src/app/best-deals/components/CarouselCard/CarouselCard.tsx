import { ProductData } from "@/common/types";
import Link from "next/link";
import CardContent from "./CardContent";

type Props = {
  product: ProductData;
};

function CarouselCard({ product }: Props) {
  return (
    <>
      {/* Since carousel cards can have different height based on the content
      and at the same time they are absolute positioned, which means that parent box 
      with overlay: hidden cannot detect absolute children size to auto fit content,
      my carousel wrapper will be a grid box with invisible duplicates of all cards as grid items inside single cell,
      to have proper dynamic container dimensions, so carousel will have size to fit the biggest card.*/}

      <div style={{ opacity: "0", gridRow: "1", gridColumn: "1" }}>
        <div className="flex flex-col flex-wrap justify-around h-fit w-full gap-2 pt-2 pb-4 px-[2.5rem] lg:px-[4.5rem]  lg:py-6">
          <CardContent product={product} />
        </div>
      </div>

      <div
        className="hidden h-full duration-4000 ease-in-out overflow-hidden"
        data-carousel-item
      >
        <Link
          href={`product-list/${product.id}`}
          className="flex flex-col h-full flex-wrap justify-around  w-fit gap-2  bg-gray-100 pt-2 pb-4 lg:py-6 px-[2.5rem] lg:px-[4.5rem]  rounded-lg  hover:bg-gray-200 dark:bg-gray-800  dark:hover:bg-gray-700"
        >
          <CardContent product={product} />
        </Link>
      </div>
    </>
  );
}

export default CarouselCard;
