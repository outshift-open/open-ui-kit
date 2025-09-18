import { Meta, StoryObj } from "@storybook/react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { CodeBlock } from "../components/code-block";

const example = `helm upgrade --create-namespace -n panoptica -i panoptica deployment/apisec-controllers \\
--dependency-update \\
--set global.agentID=[AGENT_ID] \\
--set global.mgmtHostname=https://[NAMESPACE].demo.panoptica.app \\
--set secret.sharedSecret=[SHARED_KEY] \\
--set fuzzer-controller.image.tag=[IMAGE_TAG] \\
--set apisec-controller.image.tag=[IMAGE_TAG]`;

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  args: {
    text: example,
    showLineNumbers: false,
  },
  argTypes: {
    text: {
      control: "text",
      description: "The code to be formatted.",
    },
    showLineNumbers: {
      control: "boolean",
      options: ["true", "false"],
      description:
        "Sets whether to display code line numbers or not. Defaults to true.",
    },
    highlight: {
      control: "text",
      description: `Comma delimited lines to highlight which 
      **applies when line numbers are visible (showLineNumbers=true)**.

      Example uses:
      
      - To highlight one line highlight="3"
      - To highlight a group of lines highlight="1-5"
      - To highlight multiple groups highlight="1-5,7,10,15-20"`,
    },
    wrapLongLines: {
      control: "boolean",
      options: ["true", "false"],
      description: `Sets whether long lines will create a horizontally scrolling container.
        When set to true, these lines will visually wrap instead.
        
        Defaults to false`,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="CodeBlock is used to display code snippets with syntax highlighting and optional line numbers. It supports various programming languages and allows for easy copying of code."
          importLine='import { CodeBlock } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const exampleCodeBlock = `import { Box } from '@atlaskit/primitives'
 
class HelloMessage extends React.Component {
  render() {
    return (
      <Box>
        Hello {this.props.name}
      </Box>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;

export const Default: Story = {
  render: (args) => <CodeBlock {...args} />,
};

export const LineNumbers: Story = {
  render: (args) => <CodeBlock {...args} wrapLongLines />,
  args: {
    text: exampleCodeBlock,
    showLineNumbers: true,
  },
};

export const StartingLineNumber: Story = {
  render: (args) => <CodeBlock {...args} />,
  args: {
    text: exampleCodeBlock,
    showLineNumbers: true,
    startingLineNumber: 5,
  },
};
