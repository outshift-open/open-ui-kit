import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, Stack } from "@mui/material";

/**
 * ### Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.

The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen
 */
const meta: Meta<typeof Skeleton> = {
  title: "DEV/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Example: Story = {
  render: (args) => {
    return (
      <Stack spacing={1} width={210}>
        {/* For variant="text", adjust font-size */}
        <Skeleton
          {...args}
          variant="text"
          animation={"wave"}
          sx={{ fontSize: "1rem" }}
        />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton
          {...args}
          variant="circular"
          animation={"wave"}
          width={40}
          height={40}
        />
        <Skeleton
          {...args}
          variant="rectangular"
          animation={"wave"}
          height={60}
        />
        <Skeleton {...args} variant="rounded" animation={"wave"} height={60} />
      </Stack>
    );
  },
};

export const SkeletonByVariant: Story = {
  render: (args) => {
    return (
      <Skeleton
        variant={args.variant}
        animation={"wave"}
        width={args.variant === "circular" ? 40 : 510}
        height={40}
      />
    );
  },
  args: {
    variant: "rectangular",
  },
};
