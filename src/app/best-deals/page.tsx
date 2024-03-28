import fetchListData from "@/api/fetchListData";
import Carousel from "./components/Carousel";
import { ProductData } from "@/common/types";

async function page() {
  const products: ProductData[] = await fetchListData().then(
    (data) => data.products
  );

  if (!products) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="mx-auto max-w-screen-xl xl:px-12">
      <Carousel products={products} />
    </div>
  );
}

export default page;
