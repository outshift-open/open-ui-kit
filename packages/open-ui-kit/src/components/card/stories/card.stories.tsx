import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../button/components/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
} from "../components/card";
import CardDescription from "../components/card-description";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Cards group related information in a flexible-size container. Normally for interactive groups."
          guideLink=""
          importLine={`import { Card, CardHeader, CardContent, CardActions, CardActionArea } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: (args) => (
    <Card sx={{ minWidth: 275 }} {...args}>
      <CardHeader
        title="Marketing strategy manager"
        subheader="March 26, 2025"
      />
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </CardDescription>
      </CardContent>
      <CardActions>
        <Button size="small" variant="tertariary">
          Get Started →
        </Button>
      </CardActions>
    </Card>
  ),
};

export const Clickable: Story = {
  render: (args) => (
    <CardActionArea sx={{ borderRadius: "8px" }}>
      <Card sx={{ minWidth: 275 }} {...args}>
        <CardHeader
          title="Marketing strategy manager"
          subheader="March 26, 2025"
        />
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </CardDescription>
        </CardContent>
      </Card>
    </CardActionArea>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Card sx={{ minWidth: 275, opacity: 0.5 }} {...args}>
      <CardHeader
        title="Marketing strategy manager"
        subheader="March 26, 2025"
      />
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </CardDescription>
      </CardContent>
    </Card>
  ),
};
