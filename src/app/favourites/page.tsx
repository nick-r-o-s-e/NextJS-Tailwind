import { ProductData } from "@/common/types";
import List from "./components/List";
import fetchListData from "@/api/fetchListData";
import ErrCard from "../components/ErrCard";

async function page() {
  return await fetchListData()
    .then(({ products }: { products: ProductData[] }) => (
      <List products={products} />
    ))
    .catch((err) => {
      console.log("Fetching Error: " + err);

      return <ErrCard errMsg={String(err)} />;
    });
}

export default page;
