import { Meta, StoryObj } from "@storybook/react";
import { Box, Divider, Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Spinner, SpinnerProps } from "../components/spinner";

/**
 * ### Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

Determinate indicators display how long an operation will take.
Indeterminate indicators visualize an unspecified wait time.
 */

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process."
          guideLink=""
          importLine='import { Spinner } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerComponent: Story = {
  render: (args: SpinnerProps) => {
    return (
      <Stack spacing={4} direction="row" alignItems={"center"}>
        <Box>
          <Spinner {...args} size={40} />
          <p>large</p>
        </Box>
        <Divider orientation="vertical" sx={{ height: "120px" }} />
        <Box>
          <Spinner {...args} size={24} />
          <p>medium</p>
        </Box>
        <Divider orientation="vertical" sx={{ height: "120px" }} />
        <Box>
          <Spinner {...args} size={20} />
          <p>small</p>
        </Box>
        <Divider orientation="vertical" sx={{ height: "120px" }} />
        <Box>
          <Spinner {...args} size={16} />
          <p>extra small</p>
        </Box>
      </Stack>
    );
  },
};
