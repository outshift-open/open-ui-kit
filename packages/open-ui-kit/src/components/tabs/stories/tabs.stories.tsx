/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import { ImageGrid } from "@/custom-icons";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Tab } from "../components/tab";
import { Tabs } from "../components/tabs";
import type { TabsType } from "../types";

type VisualState = "Default" | "Hover" | "Selected" | "Loading";

const DocsPage = () => (
  <DocsHeader
    title="Tabs"
    blurb="Tabs make it easy to explore and switch between related views. Main tabs, subtabs, and toggle tabs are supported."
    guideLink=""
    importLine='import { Tabs, Tab } from "@open-ui-kit/core";'
  />
);

const StoryCanvas = ({ children }: { children: ReactNode }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.vars.baseBackgroundStrong,
      boxSizing: "border-box",
      color: theme.palette.vars.baseTextDefault,
      overflowX: "hidden",
      p: { xs: 2, sm: 5 },
      width: "100%",
    })}
  >
    {children}
  </Box>
);

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StoryCanvas>
        <Story />
      </StoryCanvas>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: DocsPage,
    },
  },
  args: {
    orientation: "horizontal",
    type: "main",
  },
  argTypes: {
    boxProps: { table: { disable: true } },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    sx: { table: { disable: true } },
    type: {
      control: "select",
      options: ["main", "subTab", "toggleTab"],
    },
    value: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;
type TabsStoryProps = ComponentProps<typeof Tabs>;

type StoryTheme = {
  palette: {
    vars: {
      accentHDefault: string;
      baseBackgroundStrong: string;
      baseTextDefault: string;
      baseTextWeak: string;
      controlBackgroundMedium: string;
      infoBorderDefault: string;
    };
  };
};

const visualStates: VisualState[] = ["Default", "Hover", "Selected", "Loading"];

const countLabel = (
  <Typography
    variant="body2"
    sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
  >
    10
  </Typography>
);

const hoverSx = (theme: StoryTheme) => ({
  backgroundColor: theme.palette.vars.controlBackgroundMedium,
});

const iconSx = { height: 20, width: 20 };

const labelSx = (theme: StoryTheme) => ({
  color: theme.palette.vars.accentHDefault,
});

const DashedFrame = ({ children }: { children: ReactNode }) => (
  <Box
    sx={(theme) => ({
      border: `1px dashed ${theme.palette.vars.infoBorderDefault}`,
      borderRadius: "5px",
      boxSizing: "border-box",
      maxWidth: "100%",
      overflowX: "hidden",
      p: { xs: 2, sm: 3 },
      width: "100%",
    })}
  >
    {children}
  </Box>
);

const TabSample = ({
  iconOnly = false,
  state,
  type,
}: {
  iconOnly?: boolean;
  state: VisualState;
  type: TabsType;
}) => {
  const isSelected = state === "Selected";
  const isLoading = state === "Loading";
  const isHover = state === "Hover";

  return (
    <Tabs value={isSelected ? 0 : false} type={type}>
      <Tab
        aria-label={iconOnly ? `${type} icon tab` : undefined}
        icon={
          isLoading ? undefined : iconOnly ? (
            <ImageGrid sx={iconSx} />
          ) : (
            countLabel
          )
        }
        iconPosition="end"
        label={iconOnly ? (isLoading ? "" : undefined) : "Tab"}
        loading={isLoading}
        sx={[
          iconOnly ? { minWidth: type === "toggleTab" ? 70 : 64 } : {},
          ...(isHover ? [hoverSx] : []),
        ]}
      />
    </Tabs>
  );
};

const ItemMatrix = () => (
  <Stack spacing={2} sx={{ maxWidth: "100%" }}>
    <Box
      sx={{
        display: { xs: "none", lg: "grid" },
        gap: 5,
        gridTemplateColumns: "160px repeat(4, 150px)",
        pl: "96px",
        width: "100%",
      }}
    >
      <Box />
      {visualStates.map((state) => (
        <Typography key={state} variant="body2Semibold" sx={labelSx}>
          {state}
        </Typography>
      ))}
    </Box>
    <DashedFrame>
      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, lg: "36px 52px" },
          gridTemplateColumns: { xs: "1fr", lg: "160px repeat(4, 150px)" },
        }}
      >
        {[
          { label: "Main Tab", type: "main" as const, iconOnly: false },
          { label: "Icon - alone", type: "main" as const, iconOnly: true },
          { label: "Subtab", type: "subTab" as const, iconOnly: false },
          { label: "Icon - alone", type: "subTab" as const, iconOnly: true },
          { label: "Toggle Tab", type: "toggleTab" as const, iconOnly: false },
          { label: "Icon - alone", type: "toggleTab" as const, iconOnly: true },
        ].map((row) => (
          <Box key={`${row.type}-${row.label}`} sx={{ display: "contents" }}>
            <Typography
              variant="h6"
              sx={{ color: (theme) => theme.palette.vars.accentHDefault }}
            >
              {row.label}
            </Typography>
            {visualStates.map((state) => (
              <Stack
                key={`${row.type}-${row.label}-${state}`}
                spacing={1}
                sx={{ minWidth: 0 }}
              >
                <Typography
                  variant="body2Semibold"
                  sx={[labelSx, { display: { xs: "block", lg: "none" } }]}
                >
                  {state}
                </Typography>
                <TabSample
                  iconOnly={row.iconOnly}
                  state={state}
                  type={row.type}
                />
              </Stack>
            ))}
          </Box>
        ))}
      </Box>
    </DashedFrame>
  </Stack>
);

const GroupTabs = ({ type }: { type: TabsType }) => (
  <Tabs
    value={4}
    type={type}
    boxProps={{
      sx: {
        maxWidth: "100%",
        overflowX: "auto",
      },
    }}
  >
    {Array.from({ length: 6 }, (_, index) => (
      <Tab
        key={index}
        label="Tab"
        icon={type === "toggleTab" ? undefined : countLabel}
        iconPosition="end"
      />
    ))}
  </Tabs>
);

const TabsWithSubtabsExample = () => (
  <Stack>
    <GroupTabs type="main" />
    <GroupTabs type="subTab" />
  </Stack>
);

const GroupMatrix = () => (
  <DashedFrame>
    <Stack spacing={3} sx={{ maxWidth: "100%" }}>
      <GroupTabs type="main" />
      <TabsWithSubtabsExample />
      <GroupTabs type="subTab" />
      <GroupTabs type="toggleTab" />
    </Stack>
  </DashedFrame>
);

const FigmaMatrix = () => (
  <Stack spacing={5} sx={{ maxWidth: "100%" }}>
    <Stack spacing={2}>
      <Typography variant="h5" sx={labelSx}>
        Item
      </Typography>
      <ItemMatrix />
    </Stack>
    <Stack spacing={2}>
      <Typography variant="h5" sx={labelSx}>
        Group
      </Typography>
      <GroupMatrix />
    </Stack>
  </Stack>
);

export const Default: Story = {
  render: () => <FigmaMatrix />,
};

const MainTabStory = ({
  orientation = "horizontal",
  type = "main",
}: TabsStoryProps) => {
  const [value, setValue] = useState(0);
  return (
    <Tabs
      value={value}
      onChange={(_, v) => setValue(v)}
      orientation={orientation}
      type={type}
    >
      {Array.from({ length: 6 }, (_, index) => (
        <Tab
          key={index}
          label="Tab"
          icon={type === "toggleTab" ? undefined : countLabel}
          iconPosition="end"
        />
      ))}
    </Tabs>
  );
};

export const MainTab: Story = {
  name: "Main Tab",
  args: {
    type: "main",
  },
  render: (args) => <MainTabStory {...args} />,
};

const SubtabStory = ({ orientation = "horizontal" }: TabsStoryProps) => {
  const [value, setValue] = useState(0);
  return (
    <Tabs
      value={value}
      onChange={(_, v) => setValue(v)}
      orientation={orientation}
      type="subTab"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <Tab key={index} label="Tab" icon={countLabel} iconPosition="end" />
      ))}
    </Tabs>
  );
};

export const Subtab: Story = {
  name: "Subtab",
  args: {
    type: "subTab",
  },
  render: (args) => <SubtabStory {...args} />,
};

const ToggleTabStory = ({ orientation = "horizontal" }: TabsStoryProps) => {
  const [value, setValue] = useState(0);
  return (
    <Tabs
      value={value}
      onChange={(_, v) => setValue(v)}
      orientation={orientation}
      type="toggleTab"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <Tab key={index} label="Tab" />
      ))}
    </Tabs>
  );
};

export const ToggleTab: Story = {
  name: "Toggle Tab",
  args: {
    type: "toggleTab",
  },
  render: (args) => <ToggleTabStory {...args} />,
};

export const States: Story = {
  name: "States",
  render: () => (
    <Stack spacing={3}>
      <Tabs value={0} type="main">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Tab" loading />
      </Tabs>
    </Stack>
  ),
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <Tabs value={0} type="main">
      <Tab icon={<ImageGrid sx={iconSx} />} aria-label="Icon only" />
      <Tab icon={<ImageGrid sx={iconSx} />} iconPosition="start" label="Tab" />
      <Tab icon={<ImageGrid sx={iconSx} />} iconPosition="end" label="Tab" />
    </Tabs>
  ),
};

export const TabsWithSubtabs: Story = {
  name: "Tabs with Subtabs",
  render: () => <TabsWithSubtabsExample />,
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <Box sx={{ display: "flex", height: 200 }}>
      <Tabs value={0} orientation="vertical" type="main">
        <Tab label="Tab" />
        <Tab label="Tab" />
        <Tab label="Tab" />
      </Tabs>
    </Box>
  ),
};
