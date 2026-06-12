import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import type { SxProps } from "@mui/material/styles";
import pages from "docs/data/material/pages";
import type { MuiPage } from "../../MuiPage";
import { SearchButton } from "./SearchButton";

interface SearchEntry {
  title: string;
  href: string;
  section: string;
  keywords: string;
}

export interface AppSearchProps {
  sx?: SxProps;
}

function titleFromPathname(pathname: string) {
  const segment = pathname.split("/").filter(Boolean).pop() || pathname;

  return segment
    .replace(/^react-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeHref(pathname: string) {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function flattenPages(
  currentPages: MuiPage[],
  section = "Docs",
): SearchEntry[] {
  return currentPages.flatMap((page) => {
    const isDocsPath = page.pathname.startsWith("/open-ui-kit-core");
    const hasChildren = Boolean(page.children?.length);
    const title = page.title || titleFromPathname(page.pathname);
    const nextSection = page.subheader || page.title || section;

    const ownEntry =
      isDocsPath && !page.pathname.endsWith("-group")
        ? [
            {
              title,
              href: normalizeHref(page.pathname),
              section,
              keywords: `${title} ${section} ${page.pathname}`.toLowerCase(),
            },
          ]
        : [];

    return [
      ...ownEntry,
      ...(hasChildren ? flattenPages(page.children!, nextSection) : []),
    ];
  });
}

const SEARCH_ENTRIES = flattenPages(pages).filter(
  (entry, index, entries) =>
    entries.findIndex((item) => item.href === entry.href) === index,
);

const START_LINKS = [
  {
    title: "Installation",
    href: "/open-ui-kit-core/getting-started/installation/",
  },
  { title: "Usage", href: "/open-ui-kit-core/getting-started/usage/" },
  { title: "Components", href: "/open-ui-kit-core/all-components/" },
  { title: "Support", href: "/open-ui-kit-core/getting-started/support/" },
];

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "fixed",
    inset: 0,
    zIndex: 1600,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "80px 16px 16px",
  },
  backdrop: {
    position: "absolute",
    inset: 0,
    border: 0,
    backgroundColor: "rgba(31, 41, 55, 0.48)",
    backdropFilter: "blur(2px)",
    cursor: "default",
  },
  modal: {
    position: "relative",
    width: "min(640px, 100%)",
    overflow: "hidden",
    borderRadius: 8,
    border: "1px solid var(--muidocs-palette-divider)",
    backgroundColor: "var(--muidocs-palette-background-paper)",
    color: "var(--muidocs-palette-text-primary)",
    boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
  },
  form: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 10px",
    borderBottom: "1px solid var(--muidocs-palette-divider)",
  },
  input: {
    flex: 1,
    minWidth: 0,
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--muidocs-palette-text-primary)",
    font: "inherit",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5,
    padding: 8,
  },
  escape: {
    height: 28,
    padding: "0 8px",
    borderRadius: 6,
    border: "1px solid var(--muidocs-palette-divider)",
    backgroundColor: "var(--muidocs-palette-background-default)",
    color: "var(--muidocs-palette-text-secondary)",
    fontFamily: "var(--muidocs-typography-fontFamilyCode)",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
  },
  body: {
    minHeight: 280,
    maxHeight: "min(60vh, 520px)",
    overflowY: "auto",
    padding: 16,
  },
  title: {
    margin: "0 0 12px",
    color: "var(--muidocs-palette-text-tertiary)",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: ".1rem",
    textTransform: "uppercase",
  },
  results: {
    display: "grid",
    gap: 8,
  },
  startLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 8,
  },
  result: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 52,
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid var(--muidocs-palette-divider)",
    backgroundColor: "var(--muidocs-palette-background-default)",
    textDecoration: "none",
    color: "var(--muidocs-palette-text-primary)",
    outline: 0,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: 600,
  },
  resultSection: {
    marginTop: 2,
    color: "var(--muidocs-palette-text-secondary)",
    fontSize: 12,
  },
  empty: {
    margin: 0,
    color: "var(--muidocs-palette-text-secondary)",
    fontSize: 14,
  },
};

function getResults(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(/\s+/);

  return SEARCH_ENTRIES.map((entry) => {
    const title = entry.title.toLowerCase();
    const section = entry.section.toLowerCase();
    const score = terms.reduce((total, term) => {
      if (title === term) {
        return total + 12;
      }
      if (title.startsWith(term)) {
        return total + 8;
      }
      if (title.includes(term)) {
        return total + 5;
      }
      if (section.includes(term)) {
        return total + 2;
      }
      if (entry.keywords.includes(term)) {
        return total + 1;
      }
      return total;
    }, 0);

    return { ...entry, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);
}

function isExternalHref(href: string) {
  return href.startsWith("http");
}

export function AppSearch(props: AppSearchProps) {
  const searchButtonRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const results = React.useMemo(() => getResults(query), [query]);

  const onOpen = React.useCallback((initialQuery = "") => {
    setQuery(initialQuery);
    setIsOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
    setQuery("");
    searchButtonRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpen();
        return;
      }

      if (!isTyping && event.key.length === 1 && event.key !== " ") {
        onOpen(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpen]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (results[0]) {
      if (isExternalHref(results[0].href)) {
        window.open(results[0].href, "_blank", "noopener");
      } else {
        window.location.href = results[0].href;
      }
      onClose();
    }
  };

  return (
    <React.Fragment>
      <SearchButton
        onRef={searchButtonRef}
        onClick={() => onOpen()}
        {...props}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="OpenSearch-Container"
            role="presentation"
            style={styles.container}
          >
            <button
              type="button"
              className="OpenSearch-Backdrop"
              aria-label="Close search"
              onClick={onClose}
              style={styles.backdrop}
            />
            <div
              className="OpenSearch-Modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="open-search-title"
              style={styles.modal}
            >
              <form
                className="OpenSearch-Form"
                onSubmit={handleSubmit}
                style={styles.form}
              >
                <SearchRoundedIcon
                  className="OpenSearch-Icon"
                  style={{ color: "var(--muidocs-palette-primary-600)" }}
                />
                <input
                  ref={inputRef}
                  className="OpenSearch-Input"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search docs..."
                  aria-label="Search docs"
                  style={styles.input}
                />
                <button
                  type="button"
                  className="OpenSearch-Escape"
                  onClick={onClose}
                  style={styles.escape}
                >
                  esc
                </button>
              </form>
              <div className="OpenSearch-Body" style={styles.body}>
                <h2
                  id="open-search-title"
                  className="OpenSearch-Title"
                  style={styles.title}
                >
                  {query ? "Search results" : "Start here"}
                </h2>
                {query ? (
                  results.length > 0 ? (
                    <div className="OpenSearch-Results" style={styles.results}>
                      {results.map((result) => (
                        <a
                          key={result.href}
                          href={result.href}
                          {...(isExternalHref(result.href)
                            ? { target: "_blank", rel: "noopener" }
                            : {})}
                          className="OpenSearch-Result"
                          style={styles.result}
                        >
                          <span
                            className="OpenSearch-ResultTitle"
                            style={styles.resultTitle}
                          >
                            {result.title}
                          </span>
                          <span
                            className="OpenSearch-ResultSection"
                            style={styles.resultSection}
                          >
                            {result.section}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="OpenSearch-Empty" style={styles.empty}>
                      No docs found for "{query}".
                    </p>
                  )
                ) : (
                  <div
                    className="OpenSearch-StartLinks"
                    style={styles.startLinks}
                  >
                    {START_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(isExternalHref(link.href)
                          ? { target: "_blank", rel: "noopener" }
                          : {})}
                        className="OpenSearch-StartLink"
                        style={styles.result}
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </React.Fragment>
  );
}
