import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@mui/material";
import { ActionsModal, ActionsModalProps } from "../components/actions-modal";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

export default {
  title: "Components/ActionsModal",
  component: ActionsModal,
  argTypes: {
    data: {
      description: "The CVE data to display.",
      control: "object",
    },
    isOpen: {
      description: "Controls if the drawer is open or closed.",
      control: "boolean",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="ActionsModal is a modal component used to confirm actions that require user input, such as marking an asset as sensitive. It includes a title, body text, and options for user confirmation."
          guideLink=""
          importLine='import { ActionsModal } from "@open-ui-kit/core";'
        />
      ),
    },
  },
} as Meta<ActionsModalProps>;

const ActionsModalWrapper = (props: ActionsModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Click to open modal</Button>
      <ActionsModal {...props} open={open} hideModal={() => setOpen(false)} />
    </>
  );
};

type Story = StoryObj<ActionsModalProps>;

export const Default: Story = {
  render: (args) => <ActionsModalWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: "Mark asset as “Sensitive”?",
    includeDismissCheckbox: true,
    bodyText:
      "Marking an asset as “Sensitive” will prioritize high severity alerts on it.",
    commentSuggestions: [
      "This asset is sensitive because it contains PII.",
      "This asset is sensitive because it contains PHI.",
      "This asset is sensitive because it contains financial data.",
    ],
  },
};
