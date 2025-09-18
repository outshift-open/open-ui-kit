import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Footer } from "../components/footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Footer is used to display product information, links to support, terms and conditions, privacy policy, and other relevant links. It is typically placed at the bottom of the page."
          guideLink="#"
          importLine='import { Footer } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  ),
  args: {
    productName: "AGNTCY",
    links: [
      {
        children: "support@agntcy.com",
        href: "mailto:support@agntcy.com",
        openInNewTab: true,
      },
      {
        children: "Terms & Conditions",
        href: "https://www.example.com/terms",
        openInNewTab: true,
      },
      {
        children: "Privacy Policy",
        href: "https://example.com/privacy",
        openInNewTab: true,
      },
      {
        children: "Cookies",
        href: "https://www.example.com/cookies",
        openInNewTab: true,
      },
    ],
  },
};
