import { ComponentProps, type ReactElement, type ReactNode } from "react";
import { Title, Primary, Stories } from "@storybook/addon-docs";
import { OpenPage } from "@/custom-icons";
import { Banner, CodeBlock } from "@/components";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Box, Button, Typography } from "@mui/material";

type BannerObj = {
  content: ReactNode;
  severity: ComponentProps<typeof Banner>["status"];
  color: ComponentProps<typeof Banner>["color"];
};

export type DocsHeaderProps = {
  /**
   * Engineer-focused banner containing any information that feels important to developers
   * Mention any deviation from general story standards or any deprecation info
   */
  banner?: BannerObj;
  /**
   * Design-focused blurb about the component being exhibited
   * You should pull these straight design guidelines pages
   */
  blurb: ReactNode;

  /**
   * Precise link to design guidelines page or page section
   * Header links in ZeroHeight are accessible by mousing over the right side of a header
   */
  guideLink?: string;

  /**
   * Import statement for component
   */
  importLine: string;

  /**
   * Title for the header
   */
  title?: string;

  /**
   * Displays the primary story and subsequent stories within Storybook
   */
  includeStories?: boolean;
};

export const DocsHeader = ({
  banner,
  blurb,
  guideLink,
  importLine,
  title,
  includeStories = true,
}: DocsHeaderProps): ReactElement => {
  return (
    <ThemeProvider>
      <Box
        alignItems="center"
        gap={24}
        justifyContent="space-between"
        flexWrap="wrap"
        display="flex"
      >
        {title ? <Title>{title}</Title> : <Title />}
        {guideLink && (
          <Button
            href={guideLink}
            variant="outlined"
            rel="noopener noreferrer"
            target="_blank"
            endIcon={<OpenPage />}
          >
            Design guidelines
          </Button>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        style={{ marginTop: 24, marginBottom: 36 }}
      >
        <CodeBlock text={importLine} copyButtonProps={{ top: "10px" }} />
        <Typography variant="subtitle2">{blurb}</Typography>
        {banner && (
          <Banner
            status={banner.severity}
            text={banner.content}
            color={banner.color}
          />
        )}
      </Box>
      {includeStories && (
        <>
          <Primary />
          <Stories />
        </>
      )}
    </ThemeProvider>
  );
};
