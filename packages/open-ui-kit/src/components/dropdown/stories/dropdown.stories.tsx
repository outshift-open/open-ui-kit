import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "../components/dropdown";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="DropMenu is a component that allows users to select from a list of options in a dropdown format. It can be used for various purposes, such as filtering or selecting items."
          guideLink="#"
          importLine='import { Dropdown } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

const OPTIONS = [
  { label: "Option a", value: "a" },
  { label: "Option b", value: "b" },
];

type DropwdownStory = StoryObj<typeof Dropdown>;

const DropdownBaseStory = ({ ...args }) => {
  const [selected, setSelected] = useState(OPTIONS[0]);

  return (
    <Dropdown
      {...args}
      isActive={selected.value !== OPTIONS[0].value}
      onChange={(value) => setSelected(value)}
      options={args.options}
      selected={selected}
    />
  );
};

export const Example: DropwdownStory = {
  args: {
    options: OPTIONS,
    label: "General button",
    showSelectedOption: false,
  },
  render: (args) => {
    return <DropdownBaseStory {...args} />;
  },
};

export const ExampleWithLabel: DropwdownStory = {
  args: {
    options: OPTIONS,
    label: "General button: ",
  },
  render: (args) => {
    return <DropdownBaseStory {...args} />;
  },
};
