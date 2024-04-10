import { ProductData } from "@/common/types";
import LinkArrowBtn from "@/app/components/Buttons/LinkArrowBtn";

type Props = {
  product: ProductData;
};

function FavoriteCard({ product }: Props) {
  return (
    <div className="flex relative flex-col justify-between  p-5 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <h3 className="mt-2 mb-3  text-xl text-gray-900 dark:text-gray-300">
          Category:{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-200">
            {product.category}
          </span>
        </h3>

        <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
      </div>

      <div className="flex flex-wrap-reverse justify-between gap-4 mb-0 ">
        <LinkArrowBtn text="Read more" href={`product-list/${product.id}`} />

        <h4 className=" border-gray-600 text-4xl font-semibold text-gray-900 dark:text-gray-200">
          {product.price.toFixed(2).split(".")[0]}.
          <span className="text-3xl">
            {product.price.toFixed(2).split(".")[1]}
          </span>
          <span className="ml-1 text-sm dark:text-gray-300">
            {product.currency}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default FavoriteCard;
