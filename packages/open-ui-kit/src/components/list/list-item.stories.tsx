import { Meta, StoryObj } from "@storybook/react";
import { List, Stack, ListItemProps, ListItem } from "@mui/material";

const meta: Meta<typeof ListItem> = {
  title: "DEV/List/ListItem",
  component: ListItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Playground: Story = {
  render: function Playground(args: ListItemProps) {
    return (
      <Stack spacing={2}>
        <List>
          <Stack direction="row" spacing={2}>
            <ListItem {...args}>Default</ListItem>
            <ListItem
              classes={{
                root: "Mui-selected",
              }}
            >
              Selected
            </ListItem>
            <ListItem classes={{ root: "Mui-focusVisible" }}>Focused</ListItem>
            <ListItem
              classes={{
                root: "Mui-disabled",
              }}
            >
              Disabled
            </ListItem>
          </Stack>
        </List>
        <Stack direction="row" spacing={2}>
          <ListItem dense>Dense Default</ListItem>
          <ListItem
            dense
            classes={{
              root: "Mui-selected",
            }}
          >
            Dense Selected
          </ListItem>
          <ListItem dense classes={{ root: "Mui-focusVisible" }}>
            Dense Focused
          </ListItem>
          <ListItem
            dense
            classes={{
              root: "Mui-disabled",
            }}
          >
            Dense Disabled
          </ListItem>
        </Stack>
      </Stack>
    );
  },
};
