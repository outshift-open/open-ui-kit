import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Link } from "../components/link";
import { GeneralSize } from "@/common";
import { LinkColorEnum, LinkType } from "../types";

/**
 *  ### Link represent custom component with link and optional icon.
 */
const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: { size: GeneralSize.Small, Icon: GridViewIcon },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Link is a component that represents a clickable link with optional icon and text. It can be used to navigate to different routes or perform actions."
          guideLink="#"
          importLine='import { Link } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Example: Story = {
  render: (args) => (
    <BrowserRouter>
      <Stack spacing={2}>
        <Link {...args}>Hello</Link>
      </Stack>
    </BrowserRouter>
  ),
};

export const Ellipsis: Story = {
  render: (args) => (
    <BrowserRouter>
      <Stack spacing={2}>
        <Box sx={{ width: "100px" }}>
          <Link {...args} ellipsis>
            Longer Longer link text
          </Link>
        </Box>
      </Stack>
    </BrowserRouter>
  ),
};

export const LinkSizes: Story = {
  render: () => (
    <BrowserRouter>
      <Stack alignItems="start" spacing={2}>
        <Link size={GeneralSize.Small} Icon={GridViewIcon}>
          Hello
        </Link>
        <Link
          color={LinkColorEnum.Primary}
          size={GeneralSize.Medium}
          Icon={GridViewIcon}
        >
          Hello
        </Link>
        <Link size={GeneralSize.Large} Icon={GridViewIcon}>
          Hello
        </Link>
      </Stack>
    </BrowserRouter>
  ),
};

export const Colors: Story = {
  render: () => (
    <BrowserRouter>
      <Stack alignItems="start" spacing={2}>
        <Link color={LinkColorEnum.Primary} Icon={GridViewIcon}>
          Hello (Primary)
        </Link>
        <Link color={LinkColorEnum.Secondary} Icon={GridViewIcon}>
          Hello (Secondary)
        </Link>
        <Link disabled color={LinkColorEnum.Primary} Icon={GridViewIcon}>
          Hello (Primary) disabled
        </Link>
        <Link disabled color={LinkColorEnum.Secondary} Icon={GridViewIcon}>
          Hello (Secondary) disabled
        </Link>
      </Stack>
    </BrowserRouter>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <BrowserRouter>
      <Stack alignItems="start" spacing={2}>
        <Link color={LinkColorEnum.Primary} size={GeneralSize.Medium}>
          Hello
        </Link>
        <Link
          color={LinkColorEnum.Primary}
          size={GeneralSize.Medium}
          // iconPosition="right-icon"
          Icon={GridViewIcon}
        >
          Hello
        </Link>
        <Link
          color={LinkColorEnum.Primary}
          size={GeneralSize.Medium}
          // iconPosition="left-icon"
          Icon={GridViewIcon}
        >
          Hello
        </Link>
      </Stack>
    </BrowserRouter>
  ),
};

export const LinkTypes: Story = {
  render: () => (
    <BrowserRouter>
      <Stack alignItems="start" spacing={2}>
        <Link Icon={GridViewIcon} linkType={LinkType.UnderlineRegular}>
          Hello (type: UnderlineRegular)
        </Link>
        <Link Icon={GridViewIcon} linkType={LinkType.StandaloneRegular}>
          Hello (type: StandaloneRegular)
        </Link>
        <Link Icon={GridViewIcon} linkType={LinkType.StandaloneBold}>
          Hello (type: StandaloneBold)
        </Link>
      </Stack>
    </BrowserRouter>
  ),
};
