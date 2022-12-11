import { ChevronLeft, ChevronRight } from "react-feather";
import tw, { styled } from "twin.macro";
import usePagination from "@mui/material/usePagination";
import { ComponentProps } from "react";

const Arrow = styled.div(({ disabled }: { disabled?: boolean }) => [
  tw`cursor-pointer text-black bg-gray-50 rounded-lg h-9 w-9 font-bold shadow-sm border border-gray-100 flex items-center justify-center`,
  disabled &&
    tw`bg-transparent border-transparent opacity-50 pointer-events-none shadow-none`,
  tw`hover:bg-gray-100`,
]);
const Page = styled.div(
  ({
    clickable = true,
    current,
  }: {
    clickable?: boolean;
    current?: boolean;
  }) => [
    tw`rounded-full h-6 w-6 text-gray-500 text-center font-medium text-xs flex items-center justify-center`,
    clickable && tw`cursor-pointer`,
    current && tw`bg-gray-200 text-gray-900 font-semibold`,
  ]
);

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
} & Pick<ComponentProps<"div">, "css">;

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  ...props
}: PaginationProps) {
  const { items } = usePagination({
    count: totalPages,
    onChange: (_, page) => onPageChange(page),
    page: currentPage,
  });

  return (
    <div css={[tw`flex gap-2 items-center`, props.css]}>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = <Page clickable={false}>...</Page>;
        } else if (type === "page") {
          children = (
            <Page
              key={page}
              onClick={(e) => {
                item.onClick(e);
              }}
              current={page === currentPage}
            >
              {page}
            </Page>
          );
        } else if (type === "previous") {
          children = (
            <Arrow onClick={item.onClick} disabled={currentPage === 1}>
              <ChevronLeft />
            </Arrow>
          );
        } else if (type === "next") {
          children = (
            <Arrow onClick={item.onClick} disabled={currentPage === totalPages}>
              <ChevronRight />
            </Arrow>
          );
        } else {
          children = (
            <button type="button" {...item}>
              {type}
            </button>
          );
        }

        return children;
      })}
    </div>
  );
}
