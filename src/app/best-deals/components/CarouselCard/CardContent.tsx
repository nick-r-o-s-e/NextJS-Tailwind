import { ProductData } from "@/common/types";

type Props = {
  product: ProductData;
};

function CardContent({ product }: Props) {
  return (
    <div className="flex flex-col justify-around h-full">
      <h5
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
        className="text-5xl sm:text-6xl lg:text-8xl text-center mb-2 lg:mb-4 font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {product.name}
      </h5>

      <h3 className=" pl-2 text-center xs:text-start text-xl lg:text-3xl text-gray-900 dark:text-gray-400">
        Category:{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-200">
          {product.category}
        </span>
      </h3>

      <div className="flex max-xs:flex-wrap   gap-2  max-xs:justify-center md:justify-between">
        <h2 className="text-center xs:text-start  xs:pl-4  text-md lg:text-2xl text-gray-900 dark:text-gray-400">
          {product.description}
        </h2>

        <h4 className="text-end h-fit mt-auto mb-0 leading-[0] text-6xl sm:text-7xl lg:text-[9rem] font-bold  text-red-600 dark:text-red-600">
          {product.price.toFixed(2).split(".")[0]}.
          <span className="text-5xl sm:text-6xl lg:text-9xl ">
            {product.price.toFixed(2).split(".")[1]}
          </span>
          <span className="text-sm sm:text-lg lg:text-3xl dark:text-red-600">
            {product.currency}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default CardContent;
