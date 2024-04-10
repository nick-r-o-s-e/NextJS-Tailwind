import { ProductData } from "@/common/types";
import List from "./components/List";
import fetchListData from "@/api/fetchListData";
import InfoCard from "../components/InfoCard";
import LinkArrowBtn from "../components/Buttons/LinkArrowBtn";

async function page() {
  return await fetchListData()
    .then(({ products }: { products: ProductData[] }) => (
      <List products={products} />
    ))
    .catch((err) => {
      console.log("Fetching Error: " + err);

      return (
        <div className="mx-auto flex justify-self center max-w-[740px] ">
          <InfoCard
            title="Ooops, something went wrong..."
            content={String(err)}
            type="Error"
            actionButtons={
              <>
                <LinkArrowBtn
                  text="See on GitHub"
                  target="_blank"
                  href="https://github.com/nick-r-o-s-e/NextJS-Tailwind/tree/main/src/app/favourites"
                />

                <LinkArrowBtn text="See Product List" href="/product-list" />
              </>
            }
          />
        </div>
      );
    });
}

export default page;
