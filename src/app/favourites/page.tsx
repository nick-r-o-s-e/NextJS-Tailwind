import { ProductData } from "@/common/types";
import List from "./components/List";
import fetchListData from "@/api/fetchListData";

async function page() {
  const products: ProductData[] = await fetchListData().then(
    (data) => data.products
  );

  if (!products) {
    throw new Error("Failed to fetch data");
  }

  return <List products={products} />;
}

export default page;
