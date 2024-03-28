import { ProductData } from "@/common/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HeartCheckbox from "@/app/components/HeartCheckbox";
import handleFavouriteChange from "@/app/utils/handleFavouriteChange";

type Props = {
  item: ProductData;
  isFav: boolean;
};

function ProductRow({ item, isFav }: Props) {
  const router = useRouter();

  const [isFavourite, setIsFavourite] = useState<boolean>(isFav);

  return (
    <tr
      onClick={() => router.push(`/product-list/${item.id}`)}
      className="relative cursor-pointer transition-colors duration-100  border-b border-gray-300  dark:border-gray-700 hover:bg-gray-200/80 dark:hover:bg-gray-600"
    >
      <td
        className="w-2 pl-3 pr-2"
        onClick={(e) => {
          e.stopPropagation();
          setIsFavourite(!isFavourite);
          handleFavouriteChange(!isFavourite, item.id);
        }}
      >
        <HeartCheckbox
          isFav={isFavourite}
          onChange={() => {}}
          sizeStyles="w-4 h-4"
        />
      </td>

      <td
        scope="row"
        className="px-2 xs:px-4 py-3 whitespace-break-spaces font-medium text-gray-900  dark:text-white"
      >
        {item.name}
      </td>

      <td className="px-2 xs:px-4 py-3">{item.category}</td>

      <td className="px-2 xs:px-4 py-3">
        {item.price.toFixed(2)}
        <span className="ml-[3px] text-[.7rem]">{item.currency}</span>
      </td>
    </tr>
  );
}

export default ProductRow;
