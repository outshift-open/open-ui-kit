import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Radio, RadioProps } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### The Radio Group allows the user to select one option from a set.

RadioGroup is a helpful wrapper used to group Radio components that provides an easier API,
and proper keyboard accessibility to the group.
 */
const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          importLine="import { Radio } from '@open-ui-kit/core';"
          blurb="Radio is a component that allows users to select one option from a set. It is commonly used in forms and surveys."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const ExampleRadioGroup = (args: RadioProps) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
  });

  return (
    <>
      <Radio {...args} {...controlProps("a")} color="primary" />
      <Radio {...args} {...controlProps("b")} color="secondary" />
      <Radio {...args} {...controlProps("c")} color="error" />
      <Radio {...args} {...controlProps("d")} color="warning" />
      <Radio {...args} {...controlProps("e")} color="info" />
      <Radio {...args} {...controlProps("f")} color="success" />
    </>
  );
};

export const BasicRadioGroup: Story = {
  render: ExampleRadioGroup,
};
