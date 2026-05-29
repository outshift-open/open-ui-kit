import * as React from "react";
import { CodeBlock, Stack, ThemeProvider } from "@open-ui-kit/core";

const snippet = `const status = 'ready';
console.log(status);`;

export default function CodeBlockSizes() {
  return (
    <ThemeProvider>
      <Stack spacing={2}>
        <CodeBlock text={snippet} language="javascript" size="medium" />
        <CodeBlock
          text={snippet}
          language="javascript"
          size="small"
          showLineNumbers
        />
      </Stack>
    </ThemeProvider>
  );
}
