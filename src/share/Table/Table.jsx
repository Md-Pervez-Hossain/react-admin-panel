import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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
      <div className="shadow-lg bg-white overflow-hidden">
        <table className="w-full table-auto min-w-max divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table?.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows?.length > 0 ? (
              table?.getRowModel()?.rows?.map((row) => (
                <tr key={row.id}>
                  {row?.getVisibleCells()?.map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="py-4 flex items-center justify-center">
        {table.getPageCount() > 0 && (
          <ReactPaginate
            pageCount={table.getPageCount()}
            forcePage={table.getState().pagination?.pageIndex}
            onPageChange={({ selected }) => table.setPageIndex(selected)}
            previousLabel={<IoChevronBack className="paginate-icon" />}
            previousLinkClassName="paginate-link"
            nextLabel={<IoChevronForward className="paginate-icon" />}
            nextLinkClassName="paginate-link"
            disabledClassName="pointer-events-none opacity-50"
            containerClassName="flex items-center justify-center gap-4 pt-4"
            pageClassName="paginate-page"
            pageLinkClassName="paginate-link"
            activeClassName="paginate-active"
            activeLinkClassName="paginate-active-link"
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
