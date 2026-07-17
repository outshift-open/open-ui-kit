import { useRouter } from "next/router";
import Chip from "@mui/material/Chip";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import ChatRounded from "@mui/icons-material/ChatRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { styled } from "@mui/material/styles";
import { type MarkdownHeaders } from "@mui/internal-markdown";
import { W3CIcon, MarkdownIcon, StorybookIcon } from "../svgIcons";
import { useTranslate } from "../i18n";

const Root = styled("ul")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  "& .MuiChip-root": {
    height: 26,
    padding: "0 10px",
    gap: 6,
    borderRadius: 999,
    borderColor: theme.palette.primary[200],
    color: theme.palette.primary[700],
    backgroundColor: theme.palette.primary[50],
    fontWeight: theme.typography.fontWeightSemiBold,
    "& .MuiChip-label": { padding: 0 },
    "& .MuiChip-iconSmall": {
      margin: 0,
      fontSize: 14,
      color: "inherit",
    },
    "&:hover": {
      borderColor: theme.palette.primary[300],
      backgroundColor: theme.palette.primary[100],
    },
    ...theme.applyDarkStyles({
      borderColor: theme.palette.primaryDark[700],
      color: theme.palette.primary[300],
      backgroundColor: "rgba(24, 122, 220, 0.12)",
      "&:hover": {
        borderColor: theme.palette.primaryDark[500],
        backgroundColor: "rgba(24, 122, 220, 0.2)",
      },
    }),
  },
}));

const defaultPackageNames: Record<string, string | undefined> = {
  "open-ui-kit-core": "@open-ui-kit/core",
  "joy-ui": "@mui/joy",
  system: "@mui/system",
};

const STORYBOOK_URL = "/storybook";

export interface ComponentLinkHeaderProps {
  design?: boolean;
  markdown: {
    headers: MarkdownHeaders;
    location?: string;
  };
}

export function ComponentLinkHeader(props: ComponentLinkHeaderProps) {
  const {
    markdown: { headers, location },
  } = props;
  const t = useTranslate();
  const router = useRouter();

  const packageName =
    headers.packageName ??
    defaultPackageNames[headers.productId] ??
    "@open-ui-kit/core";
  const markdownHref = location
    ? `${process.env.SOURCE_CODE_REPO}/blob/${
        process.env.SOURCE_GITHUB_BRANCH ?? "main"
      }${location}`
    : undefined;

  return (
    <Root>
      <li>
        <Chip
          clickable
          role={undefined}
          component="a"
          size="small"
          variant="outlined"
          rel="nofollow"
          target="_blank"
          href={`https://www.npmjs.com/package/${packageName}`}
          icon={<Inventory2RoundedIcon />}
          label={packageName}
        />
      </li>
      <li>
        <Chip
          clickable
          role={undefined}
          component="a"
          size="small"
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
          href={STORYBOOK_URL}
          icon={<StorybookIcon />}
          label="Storybook"
        />
      </li>
      <li>
        <Chip
          clickable
          role={undefined}
          component="a"
          size="small"
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
          href={markdownHref ?? `${router.pathname}.md`}
          icon={<MarkdownIcon />}
          label="Markdown"
        />
      </li>
      {headers.githubLabel ? (
        <li>
          <Chip
            clickable
            role={undefined}
            component="a"
            size="small"
            variant="outlined"
            rel="nofollow"
            target="_blank"
            href={`${process.env.SOURCE_CODE_REPO}/labels/${encodeURIComponent(
              headers.githubLabel,
            )}`}
            icon={<ChatRounded color="primary" />}
            label={t("githubLabel")}
          />
        </li>
      ) : null}
      {headers.githubSource ? (
        <li>
          <Chip
            clickable
            role={undefined}
            component="a"
            size="small"
            variant="outlined"
            rel="nofollow"
            target="_blank"
            href={`${process.env.SOURCE_CODE_REPO}/tree/main/${headers.githubSource}`}
            icon={<GitHubIcon />}
            label="Source"
          />
        </li>
      ) : null}
      {headers.waiAria ? (
        <li>
          <Chip
            clickable
            role={undefined}
            component="a"
            size="small"
            variant="outlined"
            rel="nofollow"
            target="_blank"
            href={headers.waiAria}
            icon={<W3CIcon color="primary" />}
            label="Accessibility"
          />
        </li>
      ) : null}
      <li>
        <Chip
          clickable
          role={undefined}
          component="a"
          size="small"
          variant="outlined"
          href="/open-ui-kit-core/"
          icon={<AutoStoriesRoundedIcon />}
          label="Docs"
        />
      </li>
    </Root>
  );
}
