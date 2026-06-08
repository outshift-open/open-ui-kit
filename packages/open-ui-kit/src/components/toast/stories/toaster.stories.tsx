/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import { Button } from "@/components/button";
import { Toaster } from "../components/toaster";
import type { ToasterProps } from "../types";
import { toast } from "../components/toast";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="The Toaster component is a container for Toasts, allowing you to manage and display multiple toasts in your application."
          guideLink=""
          importLine='import { Toaster, toast } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

const ToasterComponent = (args: ToasterProps) => {
  const openToast = () => {
    toast({
      type: "info",
      title: "Custom Toast",
      description:
        "You can customize the content, timing, and actions for each toast notification.",
      action: {
        label: "Button",
        onClick: () => undefined,
      },
    });
  };
  return (
    <Box height={"500px"}>
      <Toaster {...args} />
      <Button onClick={openToast}>Open Toast</Button>
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <ToasterComponent {...args} />,
};
