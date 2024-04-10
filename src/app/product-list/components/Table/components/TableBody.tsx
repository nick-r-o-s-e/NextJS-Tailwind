import ProductRow from "./ProductRow";
import { v4 as uuidv4 } from "uuid";
import { useListContext } from "@/contexts/ListContext";
import NoResults from "./NoResults";
import getLocalStoredFavourites from "@/app/utils/getLocalStoredFavourites";

function TableBody() {
  const { visibleRows } = useListContext();

  const emptyRows = 10 - visibleRows.length;

  const favouriteIds = getLocalStoredFavourites();

  return (
    <tbody>
      {visibleRows.map((item) => (
        <ProductRow
          key={item.id}
          item={item}
          isFav={favouriteIds.includes(item.id)}
        />
      ))}

      {Array.from({ length: emptyRows }).map((_, i) => (
        <tr
          key={uuidv4()}
          className={`w-full h-[48.75px] ${
            i == emptyRows - 1 && "border-b dark:border-gray-700"
          }`}
        ></tr>
      ))}

      {emptyRows == 10 && <NoResults />}
    </tbody>
  );
}

export default TableBody;
