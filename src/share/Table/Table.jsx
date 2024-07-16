import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useMemo } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ReactPaginate from "react-paginate";

const Table = ({
  tabelData,
  columns,
  pagination,
  setPagination,
  totalData,
  loading,
  search,
  setSearch,
}) => {
  const data = useMemo(() => tabelData, [tabelData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter: search,
    },
    manualFiltering: true,
    manualPagination: true,
    pageCount: Math.ceil(totalData / pagination?.pageSize),
    onGlobalFilterChange: setSearch,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  // Rerender on search change
  useEffect(() => {
    table.setGlobalFilter(search);
    table.resetPagination();
  }, [search]);
  return (
    <div className="overflow-x-auto py-5 relative rounded-lg">
      <table className="w-full table-auto min-w-max shadow-lg  bg-white ">
        <thead>
          {table?.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup?.id} className="bg-primary/10 rounded-lg ">
              {headerGroup?.headers?.map((header) => (
                <th key={header.id} className="p-5 text-start font-semibold">
                  {flexRender(
                    header?.column?.columnDef?.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel().rows?.length > 0 ? (
            table?.getRowModel()?.rows?.map((row) => (
              <tr
                key={row.id}
                className=" transition duration-700 border-b border-b-gray-200/80"
              >
                {row?.getVisibleCells()?.map((cell) => (
                  <td
                    key={cell?.id}
                    className="p-5 font-[400] text-grayText text-start "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <span> No data found</span>
          )}
        </tbody>
      </table>
      <div className="py-2">
        {table.getPageCount() > 0 && (
          <ReactPaginate
            pageCount={table.getPageCount()}
            forcePage={table.getState().pagination?.pageIndex}
            onPageChange={({ selected }) => table.setPageIndex(selected)}
            previousLabel={<IoChevronBack className="paginate-icon" />}
            previousLinkClassName="h-10 w-10 flex items-center justify-center gap-1 rounded-full whitespace-nowrap text-base font-medium text-gray-600 dark:text-gray-300 tracking-wide transition-colors focus:outline-none focus:ring-2 ring-offset-2 ring-gray-300 dark:ring-gray-700/60 dark:ring-offset-gray-900 bg-gray-200 hover:bg-gray-200/80 dark:bg-gray-700 dark:hover:bg-gray-700/90"
            nextLabel={<IoChevronForward className="paginate-icon" />}
            nextLinkClassName="h-10 w-10 flex items-center justify-center gap-1 rounded-full whitespace-nowrap text-base font-medium text-gray-600 dark:text-gray-300 tracking-wide transition-colors focus:outline-none focus:ring-2 ring-offset-2 ring-gray-300 dark:ring-gray-700/60 dark:ring-offset-gray-900 bg-gray-200 hover:bg-gray-200/80 dark:bg-gray-700 dark:hover:bg-gray-700/90"
            disabledClassName="pointer-events-none opacity-50"
            containerClassName="flex items-center justify-center gap-4 pt-4"
            pageClassName="w-10 h-10 font-medium rounded-full border-2 dark:border-gray-800 overflow-hidden"
            pageLinkClassName="w-full h-full flex items-center justify-center focus:outline-none"
            activeClassName=" text-white !border-primary dark:text-blue-300"
            activeLinkClassName="!bg-primary dark:bg-blue-950"
            breakLabel="..."
            pageRangeDisplayed={1}
            renderOnZeroPageCount={null}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
