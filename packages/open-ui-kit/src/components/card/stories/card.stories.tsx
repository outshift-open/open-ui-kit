import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ArrowForward,
  BookmarkBorder,
  CheckCircleOutline,
  Download,
  GridView,
  InfoOutlined,
  InsertPhotoOutlined,
  StarBorder,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubheader,
  Link,
  LinkType,
  Skeleton,
  Stack,
  Tag,
  TagStatus,
  Typography,
} from "@/components";
import { GeneralSize } from "@/common";
import { cardActiveStyles, cardSkeletonStyles } from "../styles";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Applies the disabled card treatment.",
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Cards group related information in a flexible-size container. Normally for interactive groups."
          guideLink=""
          includeStories={true}
          importLine='import { Card, CardHeader, CardContent, CardActions, CardActionArea } from "@open-ui-kit/core";'
          title="Cards"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const cardWidth = 318;
const horizontalCardWidth = 820;

const CardStats = () => (
  <Stack
    direction="row"
    gap={1}
    sx={(theme) => ({
      alignItems: "center",
      color: theme.palette.vars.baseTextMedium,
    })}
  >
    <CheckCircleOutline
      sx={(theme) => ({
        color: theme.palette.vars.successIconDefault,
        fontSize: 16,
      })}
    />
    <GridView sx={{ fontSize: 16 }} />
    <StarBorder sx={{ fontSize: 16 }} />
    <Typography variant="subtitle2">10k</Typography>
    <Download sx={{ fontSize: 16 }} />
    <Typography variant="subtitle2">10k</Typography>
  </Stack>
);

const StrategyCardContent = () => (
  <>
    <Stack direction="row" gap={1} sx={{ alignItems: "flex-start" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          gap={0.25}
          sx={(theme) => ({
            alignItems: "center",
            color: theme.palette.vars.baseTextMedium,
          })}
        >
          <GridView sx={{ fontSize: 14 }} />
          <Typography variant="captionMedium">Agent</Typography>
        </Stack>
        <CardHeader
          title="Marketing strategy manager"
          subheader="March 26, 2025 • by Cisco"
        />
      </Box>
      <BookmarkBorder sx={{ fontSize: 20 }} />
    </Stack>
    <CardContent>
      <CardDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </CardDescription>
    </CardContent>
    <CardActions>
      <CardStats />
    </CardActions>
  </>
);

const ImportCardContent = () => (
  <>
    <Stack gap={1} sx={{ alignItems: "center", textAlign: "center" }}>
      <Box
        sx={(theme) => ({
          alignItems: "center",
          backgroundColor: theme.palette.vars.baseBackgroundMedium,
          border: `1px solid ${theme.palette.vars.controlBorderActive}`,
          borderRadius: "4px",
          color: theme.palette.vars.controlIconDefault,
          display: "flex",
          height: 40,
          justifyContent: "center",
          width: 40,
        })}
      >
        <InsertPhotoOutlined sx={{ fontSize: 24 }} />
      </Box>
      <Stack direction="row" gap={0.5} sx={{ alignItems: "center" }}>
        <Typography variant="body1Semibold">Import Existing</Typography>
        <Badge
          content="30 sec"
          styleBadge={(theme) => ({
            backgroundColor: theme.palette.vars.accentGWeak,
          })}
          type="info"
        />
      </Stack>
      <CardSubheader>Upload A2A card, MCP config, or OASF file</CardSubheader>
    </Stack>
    <CardContent>
      <CardDescription>
        Already have a configuration? Upload it and convert it to a directory
        record.
      </CardDescription>
    </CardContent>
    <CardActions sx={{ alignSelf: "stretch", justifyContent: "flex-end" }}>
      <Button endIcon={<ArrowForward />} size="small" variant="tertariary">
        Get Started
      </Button>
    </CardActions>
  </>
);

export const Default: Story = {
  args: {
    children: <StrategyCardContent />,
    sx: { minHeight: 172, width: cardWidth },
  },
};

export const Interactive: Story = {
  render: () => (
    <CardActionArea sx={{ borderRadius: "8px", width: cardWidth }}>
      <Card sx={{ minHeight: 172 }}>
        <StrategyCardContent />
      </Card>
    </CardActionArea>
  ),
};

export const Active: Story = {
  args: {
    children: <StrategyCardContent />,
    sx: [
      (theme) => ({
        ...cardActiveStyles(theme),
        minHeight: 172,
        width: cardWidth,
      }),
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: <StrategyCardContent />,
    disabled: true,
    sx: { minHeight: 168, width: cardWidth },
  },
};

export const Loading: Story = {
  render: () => (
    <Card sx={{ minHeight: 150, width: cardWidth }}>
      <Stack gap={1.5} sx={{ alignSelf: "stretch" }}>
        <Skeleton
          height={86}
          variant="rounded"
          sx={[(theme) => ({ ...cardSkeletonStyles(theme), borderRadius: 2 })]}
        />
        <Skeleton
          height={20}
          variant="rounded"
          sx={[(theme) => ({ ...cardSkeletonStyles(theme), borderRadius: 1 })]}
        />
      </Stack>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card sx={{ minHeight: 228, textAlign: "center", width: cardWidth }}>
      <ImportCardContent />
    </Card>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Card sx={{ minHeight: 72, width: horizontalCardWidth }}>
      <Stack
        direction="row"
        gap={2}
        sx={{ alignItems: "center", alignSelf: "stretch" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <CardHeader
            title="Marketing strategy manager"
            subheader="March 26, 2025"
          />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </CardDescription>
        </Box>
        <CardStats />
        <BookmarkBorder sx={{ fontSize: 20 }} />
      </Stack>
    </Card>
  ),
};

export const Metrics: Story = {
  render: () => (
    <Card sx={{ width: 244 }}>
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="captionSemibold">
          Headline not clickable
        </Typography>
        <InfoOutlined sx={{ fontSize: 14 }} />
        <Tag size={GeneralSize.Small} status={TagStatus.Positive}>
          0%
        </Tag>
      </Stack>
      <Stack
        direction="row"
        sx={{ alignItems: "flex-end", justifyContent: "space-between" }}
      >
        <Typography variant="h5">100</Typography>
        <Stack sx={{ alignItems: "flex-end" }}>
          <Typography variant="body2">Text</Typography>
          <Link href="#" linkType={LinkType.StandaloneRegular}>
            Link
          </Link>
        </Stack>
      </Stack>
    </Card>
  ),
};
