import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import type { ReactNode } from "react";
import { action } from "storybook/actions";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { CodeBlock } from "../components/code-block";

const shortSnippet = `function readCacheFromRecords() {
  return cache.records;
}`;

const multilineSnippet = `function readCacheFromRecords() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cache.records);
    }, 1000);
  });
}

const records = await readCacheFromRecords();`;

const wrappingSnippet = `const record = await readCacheFromRecords("this-example-keeps-going-to-show-how-a-long-line-wraps-inside-the-code-block-container");`;

const headerButtons = [
  { label: "button-link", onClick: action("first button-link clicked") },
  { label: "button-link", onClick: action("second button-link clicked") },
];

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  args: {
    text: multilineSnippet,
    showLineNumbers: false,
  },
  argTypes: {
    text: {
      control: "text",
      description: "Code string rendered inside the syntax highlighter.",
    },
    showLineNumbers: {
      control: "boolean",
      description: "Shows the line-number rail used in the Figma examples.",
    },
    startingLineNumber: {
      control: "number",
      description: "First number displayed when line numbers are visible.",
    },
    wrapLongLines: {
      control: "boolean",
      description:
        "Wraps long code lines instead of relying only on horizontal scrolling.",
    },
    size: {
      control: "select",
      options: ["medium", "small"],
      description: "Controls the density of the code block.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Code block"
          blurb="Code blocks display inline and multiline code snippets with optional line numbers, wrapping, headers, and copy actions."
          importLine={`import { CodeBlock } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const CodeBlockGrid = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 3,
      alignItems: "start",
    }}
  >
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => <CodeBlock {...args} text={shortSnippet} />,
};

export const Sizes: Story = {
  render: (args) => (
    <CodeBlockGrid>
      <CodeBlock {...args} text={multilineSnippet} size="medium" />
      <CodeBlock {...args} text={multilineSnippet} size="small" />
    </CodeBlockGrid>
  ),
};

export const LineNumbers: Story = {
  render: (args) => (
    <CodeBlockGrid>
      <CodeBlock {...args} text={multilineSnippet} showLineNumbers />
      <CodeBlock
        {...args}
        text={multilineSnippet}
        showLineNumbers
        startingLineNumber={5}
      />
    </CodeBlockGrid>
  ),
};

export const Header: Story = {
  render: (args) => (
    <CodeBlock
      {...args}
      text={multilineSnippet}
      showLineNumbers
      header={headerButtons}
    />
  ),
};

export const Wrapping: Story = {
  render: (args) => (
    <CodeBlock {...args} text={wrappingSnippet} showLineNumbers wrapLongLines />
  ),
};
