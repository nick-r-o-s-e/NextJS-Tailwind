import fetchListData from "@/api/fetchListData";
import Carousel from "./components/Carousel";
import { ProductData } from "@/common/types";
import Snippets from "../components/Snippets/Snippets";
import { carouselSnippetsRefs } from "./carouselSnippetsRefs";
import LinkArrowBtn from "../components/Buttons/LinkArrowBtn";
import InfoCard from "../components/InfoCard";

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
      {products == null ? (
        <div className="mx-auto flex justify-self center max-w-[740px] ">
          <InfoCard
            title="Ooops, something went wrong..."
            content={errMsg}
            type="Error"
            actionButtons={
              <>
                <LinkArrowBtn
                  text="See on GitHub"
                  target="_blank"
                  href="https://github.com/nick-r-o-s-e/NextJS-Tailwind/tree/main/src/app/best-deals"
                />

                <LinkArrowBtn text="See Product List" href="/product-list" />
              </>
            }
          />
        </div>
      ) : (
        <Carousel products={products} />
      )}

      <Snippets snippetsRefs={carouselSnippetsRefs} />
    </div>
  );
}

export default page;
