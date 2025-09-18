import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import CardSubheader from "../components/card-subheader";
import CardDescription from "../components/card-description";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Cards contain content and actions about a single subject.

Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information.
Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 */
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
          guideLink=""
          importLine='import { Card } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  render: (args) => (
    <Card sx={{ minWidth: 275 }} {...args}>
      <CardHeader title="Header title for card storybook" />
      <CardContent>
        <CardSubheader>Sub header</CardSubheader>
        <CardDescription>Description</CardDescription>
      </CardContent>
      <CardActions>
        <Button size="small">Card action - Learn More</Button>
      </CardActions>
    </Card>
  ),
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};

export const ClickableCard: Story = {
  render: (args) => (
    <CardActionArea>
      <Card sx={{ minWidth: 275 }} {...args}>
        <CardHeader title="Header title for card storybook" />
        <CardContent>
          <CardSubheader>Sub header</CardSubheader>
          <CardDescription>Description</CardDescription>
        </CardContent>
      </Card>
    </CardActionArea>
  ),
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};
