import React, { useEffect } from "react";
import { useDropArea, useEvent } from "react-use";
import tw from "twin.macro";
import { File, Trash } from "react-feather";

type FileDropProps = {
  onDrop: (files: File[]) => void;
  types: string[];
  /**
   * Max file size in MB
   */
  maxSize?: number;
  maxFiles?: number;
  files?: File[];
};

function checkFiles(
  files: File[],
  types: string[],
  maxSize?: number,
  maxFiles?: number
) {
  if (maxFiles && files.length > maxFiles) {
    throw new Error(`You can only upload ${maxFiles} files`);
  }

  const filtered = files.filter((file) => {
    const extension = file.name.split(".").pop();

    if (!extension || !types.includes(extension)) {
      throw new Error("Invalid file type");
    }
    if (maxSize && file.size > maxSize * Math.pow(2, 20)) {
      throw new Error(`File size must be less than ${maxSize}MB`);
    }

    return types.includes(extension);
  });

  return filtered;
}

export const FileDrop = function ({
  onDrop,
  maxFiles,
  types,
  maxSize,
  files,
}: FileDropProps) {
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [bond] = useDropArea({
    onFiles: (files) => {
      try {
        const filtered = checkFiles(files, types, maxSize, maxFiles);
        onDrop(filtered);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    },
  });
  useEvent("dragenter", (e) => {
    e.preventDefault();
    setIsDragActive(true);
    setError(null);
  });
  useEvent("drop", (e) => {
    e.preventDefault();
    setIsDragActive(false);
  });
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      {...bond}
      css={[
        tw`border border-dashed text-base-light-500 flex flex-col items-center gap-2 rounded-lg py-10 px-14`,
        tw`transition-colors duration-200`,
        tw`max-w-lg h-48`,
        isDragActive && tw`border-base-light-500`,
      ]}
      onClick={() => {
        if (files?.length === 0) {
          inputRef.current?.click();
        }
      }}
    >
      <input
        type="file"
        ref={inputRef}
        hidden
        multiple
        onChange={(e) => {
          if (e.target.files) {
            try {
              const filtered = checkFiles(
                Array.from(e.target.files),
                types,
                maxSize,
                maxFiles
              );
              onDrop(filtered);
            } catch (e: unknown) {
              if (e instanceof Error) {
                setError(e.message);
              }
            }
          }
        }}
      />
      <div css={tw`min-h-full justify-center flex flex-col`}>
        {error && <div css={tw`text-red-500`}>{error}</div>}
        {!error && files?.length === 0 && (
          <>
            <div css={tw`flex gap-2 items-center`}>
              <div css={tw`text-gray-500`}>
                <File width={48} height={48} />
              </div>
              Drag file here to upload or browse
            </div>
            <div css={tw`text-base-light-200`}>
              {types?.join(", ")} files only.{" "}
              {maxSize && `Max file size is ${maxSize} MB.`}
            </div>
          </>
        )}
        {!error && files && files.length > 0 && (
          <div css={tw`grid gap-2 items-center grid-cols-[1fr auto]`}>
            {files.map((file) => {
              return (
                <>
                  <div>{file.name}</div>
                  <div
                    css={tw`text-red-700 cursor-pointer w-5`}
                    onClick={() => {
                      onDrop(files.filter((f) => f.name !== file.name));
                    }}
                  >
                    <Trash width={14} height={14} />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
