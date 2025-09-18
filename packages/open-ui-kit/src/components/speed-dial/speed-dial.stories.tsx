import type { Meta, StoryObj } from "@storybook/react";
import { Box, SpeedDialIcon, SpeedDialAction, SpeedDial } from "@mui/material";

/**
 * When pressed, a floating action button can display three to
 * six related actions in the form of a Speed Dial.
 */
const meta: Meta<typeof SpeedDial> = {
  title: "DEV/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
};

export default meta;

const actions = [{ icon: <SpeedDialIcon />, name: "Template" }];

type Story = StoryObj<typeof SpeedDial>;

export const BasicSpeedDial: Story = {
  render: (args) => (
    <Box sx={{ height: 128, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        {...args}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ),
  args: {
    direction: "up",
  },
};
