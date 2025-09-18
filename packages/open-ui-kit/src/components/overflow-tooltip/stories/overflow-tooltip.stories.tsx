import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import {
  OverflowTooltip,
  OverflowTooltipProps,
} from "../components/overflow-tooltip";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof OverflowTooltip> = {
  title: "Components/OverflowTooltip",
  component: OverflowTooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="OverflowTooltip is a component that displays a tooltip when the text overflows its container. It is useful for displaying long text in a limited space."
          guideLink=""
          importLine="import { OverflowTooltip } from '@open-ui-kit/core';"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof OverflowTooltip>;

const USERNAME = "John Doe John Doe John Doe John Doe John Doe John Doe";

function Template(args: OverflowTooltipProps) {
  return (
    <Stack spacing={2}>
      {/* overflow  */}
      <Box height="20px" display="flex">
        <Typography
          variant="body2"
          marginRight={1}
          component="div"
          maxWidth={100}
        >
          <OverflowTooltip {...args} />
        </Typography>
      </Box>
      {/* RTL overflow */}
      <Box height="20px" display="flex">
        <Typography
          variant="body2"
          marginRight={1}
          component="div"
          maxWidth={100}
        >
          <OverflowTooltip
            {...args}
            value="./path/to/a/really/long/file/name"
            someLongText="./path/to/a/really/long/file/name/.git"
            ellipsisDirection="start"
          />
        </Typography>
      </Box>
      {/* no overflow */}
      <Box height="20px" display="flex">
        <Typography
          variant="body2"
          marginRight={1}
          component="div"
          maxWidth={100}
        >
          <OverflowTooltip {...args} value="John Doe" someLongText="John Doe" />
        </Typography>
      </Box>
    </Stack>
  );
}

export const SimpleOverflowTooltip: Story = {
  render: Template,
  args: {
    value: USERNAME,
    someLongText: USERNAME,
  },
};
