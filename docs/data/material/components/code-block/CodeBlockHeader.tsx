import * as React from "react";
import { CodeBlock, ThemeProvider } from "@open-ui-kit/core";

const snippets = {
  npm: "npm install @open-ui-kit/core",
  yarn: "yarn add @open-ui-kit/core",
  pnpm: "pnpm add @open-ui-kit/core",
};

type PackageManager = keyof typeof snippets;

export default function CodeBlockHeader() {
  const [manager, setManager] = React.useState<PackageManager>("npm");

  return (
    <ThemeProvider>
      <CodeBlock
        text={snippets[manager]}
        language="bash"
        header={[
          { label: "npm", onClick: () => setManager("npm") },
          { label: "Yarn", onClick: () => setManager("yarn") },
          { label: "pnpm", onClick: () => setManager("pnpm") },
        ]}
      />
    </ThemeProvider>
  );
}
