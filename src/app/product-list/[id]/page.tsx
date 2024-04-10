import React from "react";
import { ProductData } from "@/common/types";
import ExtendedProduct from "./components/ExtendedProduct";
import fetchListData from "@/api/fetchListData";
import { notFound } from "next/navigation";

async function page({ params }: { params: { id: string } }) {
  const products: ProductData[] = await fetchListData().then(
    (data) => data.products
  );

  const product = products.find((item) => item.id == params.id);

  if (!product) {
    notFound();
  }

  return <ExtendedProduct product={product} />;
}

export default page;
