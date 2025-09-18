import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchField, SearchFieldProps } from "../components/search-field";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 *  ### The SearchField component allows the user to type a search input.
 */
const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  args: {
    onChangeCallback: fn(),
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="The SearchField component allows the user to type a search input."
          guideLink=""
          importLine='import { SearchField } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

function SimpleSearchFieldComponent(args: SearchFieldProps) {
  return <SearchField {...args} />;
}

export const SimpleSearchField: Story = {
  render: SimpleSearchFieldComponent,
  args: {},
};
