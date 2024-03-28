import { Suspense } from "react";
import Table from "./components/Table/Table";
import { ProductData } from "@/common/types";
import TableSkeleton from "./components/TableSkeleton";
import fetchListData from "@/api/fetchListData";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export async function PageContent() {
  const products: ProductData[] = await fetchListData().then(
    (data) => data.products
  );

  if (!products) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="mx-auto max-w-screen-xl lg:px-12">
      <Table data={products} />
    </div>
  );
}

export default async function page() {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <PageContent />
    </Suspense>
  );
}
