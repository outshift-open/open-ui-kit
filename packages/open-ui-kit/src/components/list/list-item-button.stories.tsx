import { Meta, StoryObj } from "@storybook/react";
import {
  List,
  Stack,
  ListItemButtonProps,
  ListItemButton,
} from "@mui/material";

const meta: Meta<typeof ListItemButton> = {
  title: "DEV/List/ListItemButton",
  component: ListItemButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ListItemButton>;

export const Playground: Story = {
  render: function Playground(args: ListItemButtonProps) {
    return (
      <Stack spacing={2}>
        <List>
          <Stack direction="row" spacing={2}>
            <ListItemButton {...args}>Default</ListItemButton>
            <ListItemButton
              classes={{
                root: "Mui-selected",
              }}
            >
              Selected
            </ListItemButton>
            <ListItemButton classes={{ root: "Mui-focusVisible" }}>
              Focused
            </ListItemButton>
            <ListItemButton
              classes={{
                root: "Mui-disabled",
              }}
            >
              Disabled
            </ListItemButton>
          </Stack>
        </List>
        <Stack direction="row" spacing={2}>
          <ListItemButton dense>Dense Default</ListItemButton>
          <ListItemButton
            dense
            classes={{
              root: "Mui-selected",
            }}
          >
            Dense Selected
          </ListItemButton>
          <ListItemButton dense classes={{ root: "Mui-focusVisible" }}>
            Dense Focused
          </ListItemButton>
          <ListItemButton
            dense
            classes={{
              root: "Mui-disabled",
            }}
          >
            Dense Disabled
          </ListItemButton>
        </Stack>
      </Stack>
    );
  },
};
