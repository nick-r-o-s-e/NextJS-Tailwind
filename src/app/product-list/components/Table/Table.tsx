"use client";

import { ProductData } from "@/common/types";
import PaginationFooter from "./components/PaginationFooter";
import { ListProvider } from "@/contexts/ListContext";
import TableControls from "./components/TableControls/TableControls";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

type Props = {
  data: ProductData[];
};

function Table({ data }: Props) {
  return (

    
    <ListProvider data={data}>
      <section className="bg-transperant rounded-lg mb-10 ">
        <div className="bg-gray-100 dark:bg-gray-800 relative shadow-lg rounded-lg">
          <TableControls />

          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <TableHead />

              <TableBody />
            </table>
          </div>

          <PaginationFooter />
        </div>
      </section>
    </ListProvider>
  );
}

export default Table;
