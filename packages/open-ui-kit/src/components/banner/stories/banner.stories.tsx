import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircleOutline } from "@mui/icons-material";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Banner } from "../components/banner";
import type { BannerProps } from "../types";
import { BANNER_STATUSES } from "../styles";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="A banner displays a short, important message in a way that attracts the user's attention without interrupting the user's task."
          guideLink=""
          importLine={`import { Banner } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
  args: {
    status: "info",
    text: "Due to a planned update, the website will be temporarily down",
    showCloseButton: true,
  },
  argTypes: {
    status: {
      control: "select",
      options: BANNER_STATUSES,
    },
    text: {
      control: "text",
    },
    showCloseButton: {
      control: "boolean",
    },
    icon: {
      table: { disable: true },
    },
    onClose: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Error: Story = {
  args: {
    status: "negative",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
};

export const Info: Story = {
  args: {
    status: "info",
  },
};

export const Branded: Story = {
  args: {
    status: "excellent",
  },
};

export const WithoutClose: Story = {
  args: {
    showCloseButton: false,
  },
};

export const WithCustomIcon: Story = {
  args: {
    status: "success",
    icon: <CheckCircleOutline aria-label="custom success icon" />,
  },
};

export const AllVariants: Story = {
  render: (args: BannerProps) => (
    <Stack direction="column" spacing={2}>
      {BANNER_STATUSES.map((status) => (
        <Banner key={status} {...args} status={status} />
      ))}
    </Stack>
  ),
};
