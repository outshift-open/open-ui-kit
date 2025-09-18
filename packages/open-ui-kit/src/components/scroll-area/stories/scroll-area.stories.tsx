import { Meta, StoryFn } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { ScrollArea } from "../components/scroll-area";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

export default {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="ScrollArea is a component that allows you to create scrollable areas in your application. It can be used to contain content that exceeds the available space, providing a way for users to scroll through the content."
          guideLink=""
          importLine='import { ScrollArea } from "@open-ui-kit/core";'
        />
      ),
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <ScrollArea
    sx={{ height: "200px", width: "300px", border: "1px solid #ccc" }}
    {...args}
  >
    <Box sx={{ height: "600px", padding: 2 }}>
      <Typography variant="body1">Scrollable Content</Typography>
      {[...Array(50)].map((_, index) => (
        <Typography key={index} variant="body2">
          Item {index + 1}
        </Typography>
      ))}
    </Box>
  </ScrollArea>
);

export const Default = Template.bind({});
Default.args = {};

export const HorizontalScroll = Template.bind({});
HorizontalScroll.args = {
  sx: { height: "100px", width: "150px", border: "1px solid #ccc" },
};

export const VerticalScroll = Template.bind({});
VerticalScroll.args = {
  sx: { height: "200px", width: "550px", border: "1px solid #ccc" },
};
