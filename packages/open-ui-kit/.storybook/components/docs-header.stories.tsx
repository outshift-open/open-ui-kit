/* This module is a docs layout component (named *.stories.tsx for colocation), not CSF. */
import { ComponentProps, type ReactElement, type ReactNode } from "react";
import { Title, Primary, Stories } from "@storybook/addon-docs/blocks";
import { OpenPage } from "@/custom-icons";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { CopyButton } from "@/components/copy-button";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Box, Stack, Typography } from "@mui/material";

type DocsHeaderBanner = {
  content: ReactNode;
  severity: ComponentProps<typeof Banner>["status"];
  color: ComponentProps<typeof Banner>["color"];
};

export type DocsHeaderProps = {
  /**
   * Engineer-focused banner for deviations, deprecations, or implementation notes.
   */
  banner?: DocsHeaderBanner;
  /**
   * Design-focused overview of the component being exhibited.
   */
  blurb: ReactNode;

  /**
   * Precise link to the design guidelines page or page section.
   */
  guideLink?: string;

  /**
   * Import statement shown in the docs copy block.
   */
  importLine: string;

  /**
   * Title rendered at the top of the docs page.
   */
  title?: string;

  /**
   * Displays the primary story and subsequent stories within Storybook.
   */
  includeStories?: boolean;
};

const ImportLine = ({ text }: { text: string }) => {
  const importMatch = text.match(/^(import)\s+(.+)\s+(from)\s+(.+);$/);

  return (
    <Box
      sx={(theme) => ({
        alignItems: "center",
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
        border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
        borderRadius: "10px",
        display: "flex",
        gap: 1.5,
        minHeight: 44,
        px: { xs: 1.5, md: 2 },
        py: 0.75,
        width: "100%",
      })}
    >
      <Typography
        component="code"
        sx={(theme) => ({
          color: theme.palette.vars.baseTextDefault,
          flex: 1,
          fontFamily: "'Roboto Mono', monospace",
          fontSize: { xs: 16, md: 17 },
          letterSpacing: 0,
          lineHeight: 1.5,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        })}
      >
        {importMatch ? (
          <>
            <Box
              component="span"
              sx={(theme) => ({
                color: theme.palette.vars.brandIconPrimaryDefault,
              })}
            >
              {importMatch[1]}
            </Box>{" "}
            <Box component="span">{importMatch[2]}</Box>{" "}
            <Box
              component="span"
              sx={(theme) => ({
                color: theme.palette.vars.brandIconPrimaryDefault,
              })}
            >
              {importMatch[3]}
            </Box>{" "}
            <Box component="span" sx={{ color: "#6c9b2f" }}>
              {importMatch[4]};
            </Box>
          </>
        ) : (
          text
        )}
      </Typography>
      <CopyButton
        text={text}
        size="medium"
        disableMargin
        sx={(theme) => ({
          border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
          borderRadius: "8px",
          flexShrink: 0,
          height: 36,
          width: 36,
        })}
      />
    </Box>
  );
};

export const DocsHeader = ({
  banner,
  blurb,
  guideLink,
  importLine,
  title,
  includeStories = true,
}: DocsHeaderProps): ReactElement => {
  const hasGuideLink = Boolean(guideLink?.trim());

  return (
    <ThemeProvider>
      <Stack component="header" gap={3.5} sx={{ mb: 5 }}>
        <Box
          sx={(theme) => ({
            alignItems: "flex-start",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.vars.interactiveSecondaryWeakDefault
                : theme.palette.vars.controlBackgroundDefault,
            border: `1px solid ${theme.palette.vars.baseBorderDefault}`,
            borderRadius: "24px",
            boxShadow: theme.shadows[1],
            display: "flex",
            flexDirection: "column",
            gap: 0,
            overflow: "hidden",
            px: { xs: 3, md: 4 },
            py: { xs: 2.75, md: 3.25 },
          })}
        >
          <Stack gap={1.5} sx={{ minWidth: 0, width: "100%" }}>
            <Box
              sx={(theme) => ({
                "& h1": {
                  color: theme.palette.vars.interactiveSecondaryDefaultActive,
                  fontSize: { xs: 40, md: 50 },
                  letterSpacing: 0,
                  lineHeight: 1.04,
                  margin: 0,
                },
              })}
            >
              {title ? <Title>{title}</Title> : <Title />}
            </Box>
            <Typography
              variant="subtitle2"
              sx={(theme) => ({
                color: theme.palette.vars.baseTextDefault,
                maxWidth: 1040,
              })}
            >
              {blurb}
            </Typography>
          </Stack>

          <Box
            sx={{
              mt: { xs: 2.25, md: 2.5 },
              width: "100%",
            }}
          >
            <ImportLine text={importLine} />
          </Box>

          {hasGuideLink && (
            <Stack
              direction="row"
              gap={1.5}
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                mt: 2.5,
              }}
            >
              <Button href={guideLink} endIcon={<OpenPage />}>
                Design guidelines
              </Button>
            </Stack>
          )}
        </Box>
        {banner && (
          <Stack gap={3}>
            <Banner
              status={banner.severity}
              text={banner.content}
              color={banner.color}
            />
          </Stack>
        )}
      </Stack>
      {includeStories && (
        <>
          <Primary />
          <Stories />
        </>
      )}
    </ThemeProvider>
  );
};
