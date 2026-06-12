import * as React from "react";
import { CodeBlock, ThemeProvider } from "@open-ui-kit/core";

const command = `helm upgrade --install open-ui-kit ./charts/open-ui-kit --namespace product-ui --create-namespace --set image.tag=2026.05.28 --set featureFlags.docs=true`;

export default function CodeBlockWrapped() {
  return (
    <ThemeProvider>
      <CodeBlock text={command} language="bash" wrapLongLines />
    </ThemeProvider>
  );
}
