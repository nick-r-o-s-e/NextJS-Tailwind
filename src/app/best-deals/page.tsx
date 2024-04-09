import fetchListData from "@/api/fetchListData";
import Carousel from "./components/Carousel";
import { ProductData } from "@/common/types";
import Snippets from "../components/Snippets/Snippets";
import { CarouselSnippets } from "./CarouselSnippets";

async function page() {
  let errMsg = "";

  const products: ProductData[] | null = await fetchListData()
    .then(({ products }) => products)
    .catch((err) => {
      console.log("Fetching Error: " + err);

      errMsg = String(err);

      return null;
    });

  return (
    <div className="mx-auto max-w-screen-xl flex flex-col gap-8 xl:px-12">
      <Carousel products={products} errMsg={errMsg} />

      <Snippets snippetsRefs={CarouselSnippets} />
    </div>
  );
}

export default page;
