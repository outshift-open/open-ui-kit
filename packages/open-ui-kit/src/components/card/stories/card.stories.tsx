import type { ReactNode } from "react";
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
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Link, LinkType } from "@/components/link";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
} from "../components/card";
import CardDescription from "../components/card-description";

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

type Story = StoryObj<typeof Card>;

const cardWidth = 318;

const Stat = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <Stack direction="row" gap={0.5} sx={{ alignItems: "center" }}>
    {icon}
    <Typography variant="captionMedium">{label}</Typography>
  </Stack>
);

const CardStats = () => (
  <Stack
    direction="row"
    gap={1}
    sx={(theme) => ({
      alignItems: "center",
      color: theme.palette.vars.baseTextMedium,
    })}
  >
    <Stat
      icon={<CheckCircleOutline color="success" sx={{ fontSize: 16 }} />}
      label=""
    />
    <Stat icon={<GridView sx={{ fontSize: 16 }} />} label="" />
    <Stat icon={<StarBorder sx={{ fontSize: 16 }} />} label="10k" />
    <Stat icon={<Download sx={{ fontSize: 16 }} />} label="10k" />
  </Stack>
);

const StrategyCard = ({
  disabled = false,
  loading = false,
  outlined = false,
}: {
  disabled?: boolean;
  loading?: boolean;
  outlined?: boolean;
}) => (
  <Card
    sx={(theme) => ({
      minHeight: 172,
      opacity: disabled ? 0.35 : 1,
      outline: outlined
        ? `1px solid ${theme.palette.vars.controlBorderActive}`
        : 0,
      width: cardWidth,
    })}
  >
    {loading ? (
      <Stack gap={1}>
        <Skeleton height={20} variant="rounded" />
        <Skeleton height={72} variant="rounded" />
        <Skeleton height={20} variant="rounded" />
      </Stack>
    ) : (
      <>
        <Stack direction="row" gap={1} sx={{ alignItems: "flex-start" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack
              direction="row"
              gap={0.5}
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
    )}
  </Card>
);

const ImportCard = ({
  disabled = false,
  outlined = false,
}: {
  disabled?: boolean;
  outlined?: boolean;
}) => (
  <Card
    sx={(theme) => ({
      minHeight: 228,
      opacity: disabled ? 0.35 : 1,
      outline: outlined
        ? `1px solid ${theme.palette.vars.controlBorderActive}`
        : 0,
      textAlign: "center",
      width: cardWidth,
    })}
  >
    <Stack gap={1} sx={{ alignItems: "center" }}>
      <Box
        sx={(theme) => ({
          alignItems: "center",
          border: `1px solid ${theme.palette.vars.controlBorderActive}`,
          borderRadius: "4px",
          display: "flex",
          height: 32,
          justifyContent: "center",
          width: 32,
        })}
      >
        <InsertPhotoOutlined sx={{ fontSize: 20 }} />
      </Box>
      <Stack direction="row" gap={0.5} sx={{ alignItems: "center" }}>
        <Typography variant="body1Semibold">Import Existing</Typography>
        <Badge content="30 sec" type="info" />
      </Stack>
      <CardDescription>
        Upload A2A card, MCP config, or OASF file
      </CardDescription>
    </Stack>
    <CardContent>
      <CardDescription>
        Already have a configuration? Upload it and we will convert it to Agent
        Directory Record format.
      </CardDescription>
    </CardContent>
    <CardActions sx={{ justifyContent: "flex-end" }}>
      <Button endIcon={<ArrowForward />} size="small" variant="tertariary">
        Get Started
      </Button>
    </CardActions>
  </Card>
);

const HorizontalStrategyCard = ({
  outlined = false,
}: {
  outlined?: boolean;
}) => (
  <Card
    sx={(theme) => ({
      minHeight: 72,
      outline: outlined
        ? `1px solid ${theme.palette.vars.controlBorderActive}`
        : 0,
      width: 1186,
    })}
  >
    <Stack direction="row" gap={2} sx={{ alignItems: "center" }}>
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
);

const MetricCard = ({ outlined = false }: { outlined?: boolean }) => (
  <Card
    sx={(theme) => ({
      outline: outlined
        ? `1px solid ${theme.palette.vars.controlBorderActive}`
        : 0,
      width: 244,
    })}
  >
    <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
      <Typography variant="captionSemibold">Headline not clickable</Typography>
      <InfoOutlined sx={{ fontSize: 14 }} />
      <Badge content="0%" type="success" />
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
);

export const BasicInteractive: Story = {
  render: () => (
    <Stack gap={4}>
      <Stack direction="row" gap={4} sx={{ flexWrap: "wrap" }}>
        <StrategyCard />
        <CardActionArea sx={{ borderRadius: "8px", width: cardWidth }}>
          <StrategyCard outlined />
        </CardActionArea>
        <StrategyCard loading />
        <StrategyCard disabled />
      </Stack>
      <Stack direction="row" gap={4} sx={{ flexWrap: "wrap" }}>
        <ImportCard />
        <CardActionArea sx={{ borderRadius: "8px", width: cardWidth }}>
          <ImportCard outlined />
        </CardActionArea>
        <ImportCard disabled />
      </Stack>
      <Stack gap={2}>
        <HorizontalStrategyCard />
        <CardActionArea sx={{ borderRadius: "8px", width: 1186 }}>
          <HorizontalStrategyCard outlined />
        </CardActionArea>
      </Stack>
      <Stack direction="row" gap={8} sx={{ flexWrap: "wrap" }}>
        <MetricCard />
        <MetricCard outlined />
      </Stack>
    </Stack>
  ),
};

export const ContentBlocks: Story = {
  render: () => (
    <Card sx={{ width: 420 }}>
      <CardContent>
        <Stack gap={2}>
          <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
            <Typography variant="body2">Total: #</Typography>
            {["Text", "Text", "Text", "Text", "Text"].map((label, index) => (
              <Badge key={index} content={label} type="info" />
            ))}
          </Stack>
          <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Badge key={index} content="Tag" />
            ))}
          </Stack>
          <Stack>
            <Typography variant="body2">Text</Typography>
            <Link href="#" linkType={LinkType.StandaloneRegular}>
              Link
            </Link>
          </Stack>
          <Stack gap={1}>
            <Typography variant="body1Semibold">CodeMate</Typography>
            <CardDescription>Lorem ipsum</CardDescription>
          </Stack>
          <Stack direction="row" gap={1}>
            <Button size="small" variant="primary">
              Add
            </Button>
            <Button
              endIcon={<ArrowForward />}
              size="small"
              variant="tertariary"
            >
              More info
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ),
};

export const HeaderExamples: Story = {
  render: () => (
    <Stack direction="row" gap={4} sx={{ flexWrap: "wrap" }}>
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1Semibold">Headline clickable</Typography>
        <GridView sx={{ fontSize: 16 }} />
        <InfoOutlined sx={{ fontSize: 16 }} />
      </Stack>
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1Semibold">Headline not clickable</Typography>
        <GridView sx={{ fontSize: 16 }} />
        <InfoOutlined sx={{ fontSize: 16 }} />
      </Stack>
    </Stack>
  ),
};
