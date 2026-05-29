import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  AnchorLinkMenu,
  type AnchorLinkMenuProps,
} from "../components/anchor-link-menu";
import { AnchorLinkMenuItemComponent } from "../components/anchor-link-menu-item";
import type { AnchorLinkMenuItem } from "../types";

const meta: Meta<AnchorLinkMenuProps> = {
  title: "Components/AnchorLinkMenu",
  component: AnchorLinkMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Anchor Link Menu provides navigation links that allow users to jump to sections on a page. It supports both a rail and floating variant."
          guideLink=""
          includeStories={true}
          importLine='import { AnchorLinkMenu } from "@open-ui-kit/core";'
          title="Anchor link menu"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AnchorLinkMenuProps>;

const anchorItems: AnchorLinkMenuItem[] = [
  { id: "anchor-1", label: "Anchor label" },
  { id: "anchor-2", label: "Anchor label", subsection: true },
  { id: "anchor-3", label: "Anchor label" },
  { id: "anchor-4", label: "Anchor label" },
  { id: "anchor-5", label: "Anchor label" },
];

const longAnchorItems: AnchorLinkMenuItem[] = [
  { id: "anchor-1", label: "Anchor label" },
  { id: "anchor-2", label: "Anchor label", subsection: true },
  { id: "anchor-3", label: "Anchor label", subsection: true },
  { id: "anchor-4", label: "Anchor label" },
  { id: "anchor-5", label: "Anchor label", subsection: true },
  { id: "anchor-6", label: "Anchor label", subsection: true },
  { id: "anchor-7", label: "Anchor label" },
  { id: "anchor-8", label: "Anchor label", subsection: true },
  { id: "anchor-9", label: "Anchor label", subsection: true },
];

const figmaLabel = (label: string) => (
  <Typography
    variant="caption"
    sx={{
      alignSelf: "flex-start",
      bgcolor: "#D4B3FF",
      borderRadius: "4px",
      color: "#4C00AE",
      fontWeight: 500,
      px: 0.5,
      py: 0.25,
    }}
  >
    {label}
  </Typography>
);

const FloatingTrigger = () => (
  <Box
    sx={(theme) => ({
      alignItems: "center",
      bgcolor: theme.palette.vars.controlBackgroundDefault,
      border: `2px solid ${theme.palette.vars.controlBorderDefault}`,
      borderRadius: "100px",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0px 4px 12px rgba(6, 34, 66, 0.7)"
          : "0px 4px 12px rgba(200, 213, 245, 0.7)",
      color: theme.palette.vars.baseTextStrong,
      display: "inline-flex",
      gap: "8px",
      height: "32px",
      justifyContent: "center",
      px: "16px",
      width: "124px",
    })}
  >
    <ArticleOutlinedIcon fontSize="small" />
    <Typography variant="body2Semibold">Contents</Typography>
  </Box>
);

const StatePreview = ({
  label,
  selected,
  subsection,
  hover,
}: {
  label: string;
  selected?: boolean;
  subsection?: boolean;
  hover?: boolean;
}) => (
  <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
    {figmaLabel(label)}
    <Box
      sx={(theme) => ({
        bgcolor: hover
          ? theme.palette.vars.interactivePrimaryWeakDefault
          : "transparent",
        width: 228,
        ...(hover && {
          "& .anchor-label": {
            color: theme.palette.vars.interactivePrimaryDefaultHover,
          },
          "& .anchor-label-selected": {
            color: theme.palette.vars.interactivePrimaryDefaultActive,
          },
          "& .anchor-bar": {
            backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
          },
        }),
      })}
    >
      <AnchorLinkMenuItemComponent
        label="Anchor label"
        selected={selected}
        subsection={subsection}
      />
    </Box>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack gap={8}>
      <Stack direction="row" gap={8} sx={{ alignItems: "flex-start" }}>
        <Stack gap={3}>
          {figmaLabel("Menu versions")}
          <Stack direction="row" gap={2} sx={{ alignItems: "flex-start" }}>
            {figmaLabel("Floating")}
            <Stack gap={0.5} sx={{ alignItems: "flex-end" }}>
              <FloatingTrigger />
              <AnchorLinkMenu
                items={anchorItems}
                selectedId="anchor-1"
                title="Contents"
                variant="floating"
              />
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} sx={{ alignItems: "flex-start" }}>
            {figmaLabel("Rails")}
            <AnchorLinkMenu
              items={anchorItems}
              selectedId="anchor-1"
              title="Contents"
            />
          </Stack>
        </Stack>

        <Stack gap={2}>
          {figmaLabel("Anchor link states")}
          <StatePreview label="Selected" selected />
          <StatePreview label="Selected Hover" selected hover />
          <StatePreview label="Hover" hover />
          <StatePreview label="Default" />
          <StatePreview label="Subsection  Selected" selected subsection />
          <StatePreview
            label="Subsection  Selected Hover"
            selected
            subsection
            hover
          />
          <StatePreview label="Subsection  Hover" subsection hover />
          <StatePreview label="Subsection  Default" subsection />
        </Stack>

        <Stack gap={2}>
          {figmaLabel("Anchor link menu item")}
          <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
            <HubOutlinedIcon fontSize="small" />
            <Typography variant="body2Semibold">Anchor title</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" gap={8} sx={{ alignItems: "flex-start" }}>
        <Stack gap={2}>
          {figmaLabel("Small & Default screen sizes")}
          <Stack gap={0.5} sx={{ alignItems: "flex-end" }}>
            <FloatingTrigger />
            <AnchorLinkMenu
              items={anchorItems}
              selectedId="anchor-1"
              title="Contents"
              variant="floating"
            />
          </Stack>
        </Stack>
        <Stack gap={2}>
          {figmaLabel("Small & Default screen sizes")}
          <AnchorLinkMenu
            items={longAnchorItems}
            selectedId="anchor-1"
            title="Contents"
          />
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const Floating: Story = {
  render: () => (
    <Stack gap={0.5} sx={{ alignItems: "flex-end", width: 240 }}>
      <FloatingTrigger />
      <AnchorLinkMenu
        items={anchorItems}
        selectedId="anchor-1"
        title="Contents"
        variant="floating"
      />
    </Stack>
  ),
};

export const Rail: Story = {
  render: () => (
    <AnchorLinkMenu
      items={anchorItems}
      selectedId="anchor-1"
      title="Contents"
    />
  ),
};

export const AnchorLinkStates: Story = {
  name: "Anchor link states",
  render: () => (
    <Stack gap={2}>
      <StatePreview label="Selected" selected />
      <StatePreview label="Selected Hover" selected hover />
      <StatePreview label="Hover" hover />
      <StatePreview label="Default" />
      <StatePreview label="Subsection  Selected" selected subsection />
      <StatePreview
        label="Subsection  Selected Hover"
        selected
        subsection
        hover
      />
      <StatePreview label="Subsection  Hover" subsection hover />
      <StatePreview label="Subsection  Default" subsection />
    </Stack>
  ),
};

export const SmallDefaultScreenSizes: Story = {
  name: "Small & Default screen sizes",
  render: () => (
    <Stack direction="row" gap={8} sx={{ alignItems: "flex-start" }}>
      <Stack gap={0.5} sx={{ alignItems: "flex-end" }}>
        <FloatingTrigger />
        <AnchorLinkMenu
          items={anchorItems}
          selectedId="anchor-1"
          title="Contents"
          variant="floating"
        />
      </Stack>
      <AnchorLinkMenu
        items={longAnchorItems}
        selectedId="anchor-1"
        title="Contents"
      />
    </Stack>
  ),
};
