"use client";

import { ProductData } from "@/common/types";
import Table from "./Table/Table";
import { useEffect, useState } from "react";
import TableSkeleton from "./TableSkeleton";
import fetchListData from "@/api/fetchListData";
import ErrMsg from "./ErrMsg";

type Props = {
  data: ProductData[] | null;
};

function ProductList({ data }: Props) {
  const [products, setProducts] = useState(data);

  const [loading, setLoading] = useState(!data);

  const refetchData = async () => {
    setLoading(true);

    const res: ProductData[] = await fetchListData()
      .then((data) => data.products)
      .catch(() => null);

    setProducts(res);

    await new Promise((resolve) =>
      setTimeout(() => {
        setLoading(false);
        resolve;
      }, 700)
    );
  };

  useEffect(() => {
    !products && refetchData();
  }, []);

  if (loading) {
    return <TableSkeleton err={false} />;
  } else if (products) {
    return <Table data={products} />;
  } else {
    return (
      <div className="relative overflow-hidden">
        <TableSkeleton err={true} />

        <ErrMsg refetchData={refetchData} />
      </div>
    );
  }
}

export default ProductList;
