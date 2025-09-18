import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { Severity } from "@/common";
import { SeverityBar } from "../components/severity-bar";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 *  ### A color indicator severity badge. Either works with Severity types or with a value score system.
 */
const meta: Meta<typeof SeverityBar> = {
  title: "Components/SeverityBar",
  component: SeverityBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Text Fields let users enter and edit text."
          guideLink="#"
          importLine='import { TextField } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type SeverityBarStory = StoryObj<typeof SeverityBar>;

export const Example: SeverityBarStory = {
  render: (args) => <SeverityBar {...args} />,
};

export const ExampleBySeverityType: SeverityBarStory = {
  render: () => (
    <Stack direction={"row"} spacing={3}>
      {Object.keys(Severity).map((severity) => {
        return <SeverityBar key={severity} severity={severity as Severity} />;
      })}
    </Stack>
  ),
};
