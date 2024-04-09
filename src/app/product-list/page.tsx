import { Suspense } from "react";
import { ProductData } from "@/common/types";
import TableSkeleton from "./components/TableSkeleton";
import fetchListData from "@/api/fetchListData";
import ProductList from "./components/ProductList";
import Snippets from "../components/Snippets/Snippets";
import { tableCodeSnippets } from "./components/TableCodeSnippets";

export async function PageContent() {
  const products: ProductData[] = await fetchListData()
    .then((data) => data.products)
    .catch(() => {
      return null;
    });

  return (
    <>
      <ProductList data={products} />;
      <Snippets snippetsRefs={tableCodeSnippets} />
    </>
  );
}

export default async function page() {
  return (
    <div className="mx-auto max-w-screen-xl lg:px-12">
      <Suspense fallback={<TableSkeleton err={false} />}>
        <PageContent />
      </Suspense>
    </div>
  );
}
