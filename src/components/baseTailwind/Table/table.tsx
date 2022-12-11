import { ComponentProps } from "react";
import SearchPagination from "./SearchPagination/search-pagination";
import Pagination from "./Pagination/pagination";
import styles from "./styles.module.scss";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
import React from "react";
import tw, {css as csstw} from "twin.macro";
import { Space } from "@tw/components/index";
import Filters from "./Filters/filters";
import { Skeleton } from "@mui/material";
import {ArrowSort} from "../../icons/ArrowSort";

type TableProps<T> = {
  pagination?: ComponentProps<typeof Pagination>;
  data?: T[];
  columns: ColumnDef<T>[];
  searchPagination?: ComponentProps<typeof SearchPagination>;
  before?: React.ReactNode;
  filters?: ComponentProps<typeof Filters>;
  after?: React.ReactNode;
  loading?: boolean;
  onRowClick?: (row: T) => void;
  placeholder?: React.ReactNode | string;
};

export const Table = function <T>({
  pagination,
  columns,
  data,
  searchPagination,
  before,
  filters,
  after,
  loading,
  onRowClick,
  placeholder,
}: TableProps<T>) {
  const memoData = React.useMemo(() => data, [data]);
  const [sorting, setSorting] = React.useState<SortingState>([])

/*  const table1 = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })*/
  const table = useReactTable<T>({
    columns,
    data:
      memoData ??
      new Array(searchPagination?.value ? +searchPagination.value : 10).fill(
        null
      ),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination: {
        pageSize: searchPagination?.value ? +searchPagination.value : 10,
        pageIndex: 0,
      },
    },
  });
  const haveFooter =
    table
      .getFooterGroups()
      .filter(
        (group) =>
          group.headers.filter((header) => header.column.columnDef.footer)
            .length > 0
      ).length > 0;

  return (
    <Space css={tw`flex flex-col w-full overflow-hidden`}>
      {(before || filters || searchPagination || after) && (
        <div
          css={[
            tw`flex flex-wrap`,
            (before || filters) &&
              (searchPagination || after) &&
              tw`justify-between flex-col text-sm md:(flex-row items-center text-base) gap-4`,
            !(before || filters) &&
              (searchPagination || after) &&
              tw`justify-end`,
          ]}
        >
          {(before || filters) && (
            <div css={[tw`flex gap-2 items-center`]}>
              {before}
              {filters && <Filters {...filters} />}
            </div>
          )}
          {(searchPagination || after) && (
            <div css={[tw`flex gap-2 items-center flex-wrap`]}>
              {searchPagination && <SearchPagination {...searchPagination} />}
              {after}
            </div>
          )}
        </div>
      )}
      <div css={tw`overflow-auto`}>
        <table css={tw`rounded-md w-full border-separate border-spacing-0`}>
          <thead css={tw`border-b border-gray-light-200`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      css={[
                        tw`text-left font-semibold text-xs text-base-light-900`,
                        tw`py-2 px-4 whitespace-nowrap`,
                        header.column.getCanSort()
                          ? csstw`cursor-pointer select-none`
                          : '',
                      ]}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={`${styles.HeaderTableCell} ${header.column.getCanSort() ? styles.Hover : ""}`}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <div className={styles.Sort}><ArrowSort active={"top"}/></div>,
                            desc: <div className={styles.Sort}><ArrowSort active={"bottom"}/></div>,
                          }[header.column.getIsSorted() as string] ?? (header.column.getCanSort() ?
                            <div className={styles.Sort}><ArrowSort active={"none"}/></div>: null)}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {data &&
              table.getRowModel().rows.map((row, i) => {
                return (
                  <tr
                    key={row.id}
                    css={[
                      tw`bg-white`,
                      onRowClick && tw`cursor-pointer hover:bg-blue-50`,
                    ]}
                    onClick={() => onRowClick?.(row.original)}
                  >
                    {row.getVisibleCells().map((cell, j) => {
                      return (
                        <td
                          key={cell.id}
                          css={[
                            tw`border-gray-light-200 text-sm`,
                            tw`py-4 px-4 font-medium text-base-light-900`,
                            // upper right
                            i === 0 &&
                              row.getVisibleCells().length - 1 === j &&
                              tw`rounded-tr-md border-r border-t border-b`,
                            // upper left
                            i === 0 &&
                              j === 0 &&
                              tw`rounded-tl-md border-l border-t border-b`,
                            // lower right
                            !haveFooter
                              ? i === table.getRowModel().rows.length - 1 &&
                                row.getVisibleCells().length - 1 === j &&
                                tw`rounded-br-md border-b border-r`
                              : tw`border-b`,
                            // lower left
                            !haveFooter
                              ? i === table.getRowModel().rows.length - 1 &&
                                j === 0 &&
                                tw`rounded-bl-md border-b border-l`
                              : tw`border-b`,
                            // first line except corners
                            i === 0 &&
                              j !== 0 &&
                              row.getVisibleCells().length - 1 !== j &&
                              tw`border-t border-b`,
                            // last line except corners
                            i === table.getRowModel().rows.length - 1 &&
                              j !== 0 &&
                              row.getVisibleCells().length - 1 !== j &&
                              tw`border-b`,
                            // middle lines
                            i > 0 &&
                              i !== table.getRowModel().rows.length - 1 &&
                              tw`border-b`,
                            // first column
                            j === 0 && tw`border-l`,
                            // last column
                            j === row.getVisibleCells().length - 1 &&
                              tw`border-r`,
                          ]}
                        >
                          {!loading ? (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          ) : (
                            <Skeleton />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            {!loading &&
              data &&
              data.length > 0 &&
              haveFooter &&
              table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((footer, i) => {
                    return (
                      <td
                        key={footer.id}
                        colSpan={footer.colSpan}
                        css={[
                          // left column
                          i === 0 && tw`rounded-bl-md border-l border-b`,
                          // last column
                          i === footerGroup.headers.length - 1 &&
                            tw`rounded-br-md border-r border-b`,
                          // middle columns
                          i > 0 &&
                            i !== footerGroup.headers.length - 1 &&
                            tw`border-b`,
                          tw`text-left font-medium text-base-light-900 bg-gray-light-100`,
                          tw`py-2 px-4`,
                        ]}
                      >
                        {footer.isPlaceholder ? null : (
                          <div>
                            {!loading ? (
                              flexRender(
                                footer.column.columnDef.footer,
                                footer.getContext()
                              )
                            ) : (
                              <Skeleton />
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
        {!loading &&
          (!data || data?.length === 0) &&
          (React.isValidElement(placeholder) ? (
            placeholder
          ) : (
            <p
              css={tw`mt-4 flex justify-center text-center text-base-light-500 text-sm`}
            >
              {placeholder ?? "Not found"}
            </p>
          ))}
      </div>
      {pagination && (
        <div css={tw`flex justify-center`}>
          <Pagination {...pagination} />
        </div>
      )}
    </Space>
  );
};
