import { type VersionEntry } from "../DocsProvider";
import { mapTranslations } from "../i18n";
import type { RequireContext } from "../i18n";

interface AppContext {
  ctx: {
    query: { userLanguage?: string };
  };
  Component: {
    getInitialProps?: (
      ctx: AppContext["ctx"],
    ) => Promise<Record<string, unknown>>;
  };
}

/**
 * Factory to create MyApp.getInitialProps.
 * Follows the same pattern as `@mui/internal-core-docs/Document`'s `createGetInitialProps`.
 */

export function createGetInitialProps(options: {
  translationsContext?: RequireContext;
  versions: VersionEntry[] | (() => Promise<VersionEntry[]>);
}) {
  async function getInitialPropsApp({ ctx, Component }: AppContext) {
    let pageProps: Record<string, unknown> = {};

    const translations = options.translationsContext
      ? mapTranslations(options.translationsContext)
      : undefined;
    const versions =
      typeof options.versions === "function"
        ? await options.versions()
        : options.versions;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        userLanguage: ctx.query.userLanguage || "en",
        translations,
        versions,
        ...pageProps,
      },
    };
  }

  return getInitialPropsApp;
}
