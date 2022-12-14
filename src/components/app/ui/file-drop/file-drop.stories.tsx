import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FileDrop } from "@ui/components";

export default {
  title: "UI/FileDrop",
  component: FileDrop,
} as ComponentMeta<typeof FileDrop>;

const Template: ComponentStory<typeof FileDrop> = (args) => {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <FileDrop
      {...args}
      files={files}
      onDrop={(files) => {
        setFiles(files);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  types: ["odt", "pdf", "png"],
  maxSize: 50,
  maxFiles: 1,
};

const TemplateWithFiles: ComponentStory<typeof FileDrop> = (args) => {
  const [files, setFiles] = React.useState<File[]>([
    new File(["File 1"], "file1.png"),
    new File(["File 2"], "file2.png"),
  ]);

  return (
    <FileDrop
      {...args}
      files={files}
      onDrop={(files) => {
        setFiles(files);
      }}
    />
  );
};

export const WithFiles = TemplateWithFiles.bind({});
WithFiles.args = {
  types: ["odt", "pdf", "png"],
  maxSize: 50,
  maxFiles: 2,
};
