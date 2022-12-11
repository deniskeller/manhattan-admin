import { Input, Select } from "@tw/components/index";
import React from "react";
import { useKeyboard } from "react-aria";
import { Search } from "react-feather";
import tw from "twin.macro";

export default function Filters({
  options,
  onSearch,
  value,
  onChange,
  search,
  onSearchChange,
}: {
  options: {
    label: string;
    value: string;
  }[];
  onSearch: ({ label, value }: { label: string; value: string }) => void;
  value: string;
  onChange: (value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}) {
  const onlyOne = options.length === 1;
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e: any) => {
      if (e.key === "Enter") {
        onSearch({ label: value, value: search });
      }
    },
  });

  return (
    <div css={tw`flex gap-2 w-full items-center`}>
      <div css={tw`whitespace-pre text-base-light-900`}>
        Search{onlyOne && " by " + options[0].label + ":"}
      </div>
      <div css={tw`flex w-full`}>
        {!onlyOne && (
          <Select.Simple
           /* css={[tw`rounded-r-none text-sm`]}*/
            options={options.map((option) => ({
              label: "By " + option.label,
              value: option.value,
            }))}
            onChange={(value) => {
              if (typeof value === "string") {
                onChange(value);
                onSearchChange("");
              }
            }}
            value={value}
          />
        )}
        <div css={[!onlyOne && tw`[*]:rounded-l-none! text-sm`, tw`w-full`]}>
          <Input
            {...keyboardProps}
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            right={
              <div
                css={tw`bg-blue-600 cursor-pointer absolute right-0 top-0 h-full flex items-center justify-center aspect-square rounded-r-md`}
                onClick={(e) => {
                  onSearch({ label: value, value: search });
                }}
              >
                <Search stroke="white" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
