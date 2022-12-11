import { Button, Select } from "@tw/components/index";
import { ReactNode } from "react";
import tw from "twin.macro";

type SearchPaginationProps = {
  value?: string;
  options?: {
    value: string;
    label: ReactNode;
  }[];
  onChange?: (value: string) => void;
  onDefaultClick?: () => void;
};

export default function SearchPagination({
  value,
  options,
  onChange,
  onDefaultClick,
}: SearchPaginationProps) {
  return (
    <div css={tw`flex items-center gap-2`}>
      <label css={tw`text-base-light-900`}>Show Per Page</label>
      <Select.Simple
        //@ts-ignore
        options={options}
        value={value}
        onChange={(value) => {
          if (typeof value === "string" && onChange) {
            onChange(value);
          }
        }}
      />
      <Button onClick={onDefaultClick} variant="ghost">
        Default
      </Button>
    </div>
  );
}
