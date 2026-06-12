import * as React from "react";
import { CodeBlock, ThemeProvider } from "@open-ui-kit/core";

const themeSetup = `import { Button, ThemeProvider } from '@open-ui-kit/core';

export default function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Save changes</Button>
    </ThemeProvider>
  );
}`;

export default function CodeBlockLineNumbers() {
  return (
    <ThemeProvider>
      <CodeBlock
        text={themeSetup}
        language="tsx"
        showLineNumbers
        startingLineNumber={12}
      />
    </ThemeProvider>
  );
}
