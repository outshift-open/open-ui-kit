import { MarkdownDocs } from "@mui/internal-core-docs/MarkdownDocs";
import * as pageProps from "docs/data/material/getting-started/developer-only/development.md?muiMarkdown";

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
