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
  CardAlertHeader,
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
    alert: {
      control: "select",
      options: [undefined, "warning", "critical"],
      description:
        "Applies the alert treatment. `critical` adds the rainbow gradient border; `warning` has no border.",
    },
    disabled: {
      control: "boolean",
      description: "Applies the disabled card treatment.",
    },
    connector: {
      control: "boolean",
      description:
        "Applies the graph-connector treatment: fill and glow gradients over a backdrop blur, edged with the matching gradient stroke.",
    },
    glass: {
      control: "boolean",
      description:
        "Applies the frosted-glass treatment. Needs imagery or a patterned surface behind it to refract.",
    },
    image: {
      control: "text",
      description:
        "Background image URL. Layers the photo over `Gradient/Welcome-Card-BG-Dark` and under a `Gradient/Overlay-Black-Fade-In` scrim. Mutually exclusive with `glow`.",
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
const imageCardWidth = 432;
const alertCardWidth = 435;
// The Figma card is 215 wide; widened here so the title is not quite so ragged.
const connectorCardWidth = 280;
// Figma `Welcome Card` (274405:44234) hero, photo by Braden Collum (Unsplash).
const cardImage = "/assets/welcome-card.jpg";

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

const ConnectorCardContent = () => (
  <>
    <Typography
      variant="captionSemibold"
      sx={(theme) => ({ color: theme.palette.vars.baseTextMedium })}
    >
      Divergent Planning Paths
    </Typography>
    <CardHeader title="Agents fail to converge on a consistent decision state" />
    <CardContent>
      <CardDescription variant="body2">
        The Itinerary Planner and Schedule Planner increasingly disagree on the
        ordering of the same set of activities.
      </CardDescription>
    </CardContent>
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

/**
 * The two gradient-bordered surfaces, side by side: `glow` draws the blue
 * ring with its glow, `connector` the softer graph-canvas treatment.
 */
export const Glow: Story = {
  render: () => (
    <Stack direction="row" gap={2} sx={{ alignItems: "flex-start" }}>
      <Card glow sx={{ minHeight: 172, width: cardWidth }}>
        <StrategyCardContent />
      </Card>
      <Card connector sx={{ width: connectorCardWidth }}>
        <ConnectorCardContent />
      </Card>
    </Stack>
  ),
};

export const CriticalAlert: Story = {
  args: {
    alert: "critical",
    sx: { width: alertCardWidth },
    children: (
      <>
        <CardAlertHeader timestamp="4m ago">CRITICAL ALERT</CardAlertHeader>
        <CardHeader title="Optimization Failure in High-Density Travel Planning Cluster" />
        <CardContent>
          <CardDescription variant="body2">
            The system detected a revision loop during itinerary optimization
            within a high-density semantic cluster (“Travel itineraries to
            cities”). The agent initially produced an itinerary that violated
            walking constraints, triggering an optimization cycle before
            producing the final output.
          </CardDescription>
        </CardContent>
      </>
    ),
  },
};

export const WarningAlert: Story = {
  args: {
    alert: "warning",
    sx: { width: alertCardWidth },
    children: (
      <>
        <CardAlertHeader timestamp="3h ago">WARNING</CardAlertHeader>
        <CardHeader title="Post-generation correction occurred" />
        <CardContent>
          <CardDescription variant="body2">
            Initial itinerary violated constraints and required a revision pass.
            Consider improving constraint conditioning upstream.
          </CardDescription>
        </CardContent>
      </>
    ),
  },
};

export const Glass: Story = {
  args: {
    children: <StrategyCardContent />,
    glass: true,
    sx: { minHeight: 172, width: cardWidth },
  },
};

export const WithImage: Story = {
  args: {
    image: cardImage,
    sx: { minHeight: 172, width: imageCardWidth },
    children: (
      <>
        <Stack gap={0.5} sx={{ alignSelf: "stretch", paddingRight: "80px" }}>
          <Typography variant="h4">Explain</Typography>
          <CardDescription variant="caption">
            Uncover the <strong>“why”</strong> behind your app’s behavior. Get
            clear, AI-powered explanations for events, anomalies, or performance
            changes.
          </CardDescription>
        </Stack>
        <CardActions sx={{ alignSelf: "stretch", justifyContent: "flex-end" }}>
          <Button endIcon={<ArrowForward />} size="small" variant="tertariary">
            Get Started
          </Button>
        </CardActions>
      </>
    ),
  },
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
