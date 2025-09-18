import type { Meta, StoryObj } from "@storybook/react";
import { Box, Slider } from "@mui/material";

/**
 *  ### Sliders allow users to make selections from a range of values.
 */
const meta: Meta<typeof Slider> = {
  title: "DEV/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slider>;

/**
 *  Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.
 */
export const Primary: Story = {
  args: {
    color: "primary",
  },
};

/**
 * Vertical slider with secondary color
 */
export const Vertical: Story = {
  render: (args) => (
    <Box sx={{ height: 300, paddingLeft: "40px" }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        defaultValue={30}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        {...args}
      />
    </Box>
  ),
  args: {
    color: "secondary",
    orientation: "vertical",
  },
};
