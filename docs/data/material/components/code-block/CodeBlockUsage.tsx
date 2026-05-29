import * as React from "react";
import { CodeBlock, ThemeProvider } from "@open-ui-kit/core";

const installCommand = "npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled";

export default function CodeBlockUsage() {
  return (
    <ThemeProvider>
      <CodeBlock text={installCommand} language="bash" wrapLongLines />
    </ThemeProvider>
  );
}
