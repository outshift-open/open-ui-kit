/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Toggle } from "../components/toggle";

type CheckState = "Unchecked" | "Checked";
type VisualState = "Default" | "Hover" | "Disabled";
type LabelPosition = "left" | "right";

const visualStates: VisualState[] = ["Default", "Hover", "Disabled"];
const checkStates: CheckState[] = ["Unchecked", "Checked"];

const DocsPage = () => (
  <DocsHeader
    title="Toggle"
    blurb="Toggle allows users to turn a setting on or off. Supports unchecked, checked, hover, and disabled states."
    guideLink=""
    importLine='import { Toggle } from "@open-ui-kit/core";'
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

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
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
    defaultChecked: false,
    disabled: false,
  },
  argTypes: {
    checked: { table: { disable: true } },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { table: { disable: true } },
    sx: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

type StoryTheme = {
  palette: {
    vars: {
      baseTextDefault: string;
      baseTextWeak: string;
      controlIconMedium: string;
      infoBorderDefault: string;
      interactivePrimaryDefaultHover: string;
    };
  };
};

const hoverToggleSx = (theme: StoryTheme) => ({
  "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
    backgroundColor: theme.palette.vars.controlIconMedium,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.vars.interactivePrimaryDefaultHover,
  },
});

const dashedFrameSx = (theme: StoryTheme) => ({
  border: `1px dashed ${theme.palette.vars.infoBorderDefault}`,
  borderRadius: "5px",
  boxSizing: "border-box",
  width: "fit-content",
});

const labelSx = (theme: StoryTheme) => ({
  color: theme.palette.vars.baseTextDefault,
});

const ColumnLabel = ({ children }: { children: string }) => (
  <Typography variant="body2" sx={{ minWidth: 0 }}>
    {children}
  </Typography>
);

const RowLabel = ({ children }: { children: string }) => (
  <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "right" } }}>
    {children}
  </Typography>
);

const getToggleProps = (checkState: CheckState, visualState: VisualState) => ({
  checked: checkState === "Checked",
  disabled: visualState === "Disabled",
  sx: visualState === "Hover" ? hoverToggleSx : undefined,
});

const ToggleLabel = ({
  checkState,
  labelPosition,
  visualState,
}: {
  checkState: CheckState;
  labelPosition: LabelPosition;
  visualState: VisualState;
}) => {
  const disabled = visualState === "Disabled";
  const label = (
    <Typography
      variant="body2"
      sx={(theme) => ({
        color: disabled
          ? theme.palette.vars.baseTextWeak
          : theme.palette.vars.baseTextDefault,
        lineHeight: "20px",
      })}
    >
      Label
    </Typography>
  );

  const toggle = <Toggle {...getToggleProps(checkState, visualState)} />;

  return (
    <Stack
      component="label"
      direction="row"
      gap={1}
      sx={{
        alignItems: "center",
        cursor: disabled ? "default" : "pointer",
        minHeight: { xs: 44, sm: 20 },
        width: "max-content",
      }}
    >
      {labelPosition === "left" ? label : toggle}
      {labelPosition === "left" ? toggle : label}
    </Stack>
  );
};

const StateMatrix = () => (
  <Box
    sx={{
      display: "grid",
      gap: 2,
      gridTemplateColumns: { xs: "1fr", sm: "112px auto" },
      maxWidth: "100%",
    }}
  >
    <Box sx={{ display: { xs: "none", sm: "block" } }} />
    <Box
      sx={{
        columnGap: { xs: 1, sm: 5 },
        display: { xs: "none", sm: "grid" },
        gridTemplateColumns: "repeat(3, minmax(0, 104px))",
      }}
    >
      {visualStates.map((visualState) => (
        <ColumnLabel key={visualState}>{visualState}</ColumnLabel>
      ))}
    </Box>
    {checkStates.map((checkState) => (
      <Fragment key={`left-${checkState}`}>
        <RowLabel>{checkState}</RowLabel>
        <Box
          sx={[
            dashedFrameSx,
            {
              borderBottomWidth: 0,
              borderTopWidth: checkState === "Unchecked" ? "1px" : 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              columnGap: { xs: 1, sm: 5 },
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(3, minmax(0, 104px))",
              },
              p: { xs: 1, sm: "10px 20px" },
              rowGap: { xs: 1.5, sm: 0 },
            },
          ]}
        >
          {visualStates.map((visualState) => (
            <Stack key={visualState} gap={0.75} sx={{ minWidth: 0 }}>
              <Typography
                variant="caption"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                {visualState}
              </Typography>
              <ToggleLabel
                checkState={checkState}
                labelPosition="left"
                visualState={visualState}
              />
            </Stack>
          ))}
        </Box>
      </Fragment>
    ))}
    {checkStates.map((checkState) => (
      <Fragment key={`right-${checkState}`}>
        <Box sx={{ display: { xs: "none", sm: "block" } }} />
        <Box
          sx={[
            dashedFrameSx,
            {
              borderTopWidth: 0,
              borderBottomWidth: checkState === "Checked" ? "1px" : 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              columnGap: { xs: 1, sm: 5 },
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(3, minmax(0, 104px))",
              },
              p: { xs: 1, sm: "10px 20px" },
              rowGap: { xs: 1.5, sm: 0 },
            },
          ]}
        >
          {visualStates.map((visualState) => (
            <ToggleLabel
              key={visualState}
              checkState={checkState}
              labelPosition="right"
              visualState={visualState}
            />
          ))}
        </Box>
      </Fragment>
    ))}
  </Box>
);

const BuildingBlocksMatrix = () => (
  <Box
    sx={{
      display: "grid",
      gap: 2,
      gridTemplateColumns: { xs: "1fr", sm: "112px auto" },
      maxWidth: "100%",
    }}
  >
    <Box sx={{ display: { xs: "none", sm: "block" } }} />
    <Box
      sx={{
        columnGap: { xs: 1, sm: 5 },
        display: { xs: "none", sm: "grid" },
        gridTemplateColumns: "repeat(3, minmax(0, 104px))",
      }}
    >
      {visualStates.map((visualState) => (
        <ColumnLabel key={visualState}>{visualState}</ColumnLabel>
      ))}
    </Box>
    {checkStates.map((checkState) => (
      <Fragment key={checkState}>
        <RowLabel>{checkState}</RowLabel>
        <Box
          sx={[
            dashedFrameSx,
            {
              borderTopWidth: checkState === "Unchecked" ? "1px" : 0,
              borderBottomWidth: checkState === "Checked" ? "1px" : 0,
              borderTopLeftRadius: checkState === "Unchecked" ? "5px" : 0,
              borderTopRightRadius: checkState === "Unchecked" ? "5px" : 0,
              borderBottomLeftRadius: checkState === "Checked" ? "5px" : 0,
              borderBottomRightRadius: checkState === "Checked" ? "5px" : 0,
              columnGap: { xs: 1, sm: 5 },
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(3, minmax(0, 104px))",
              },
              p: { xs: 1, sm: "10px 20px" },
              rowGap: { xs: 1.5, sm: 0 },
            },
          ]}
        >
          {visualStates.map((visualState) => (
            <Stack key={visualState} gap={0.75} sx={{ minWidth: 0 }}>
              <Typography
                variant="caption"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                {visualState}
              </Typography>
              <Toggle {...getToggleProps(checkState, visualState)} />
            </Stack>
          ))}
        </Box>
      </Fragment>
    ))}
  </Box>
);

export const Default: Story = {
  name: "Default",
  args: {
    defaultChecked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  name: "Checked",
  args: {
    defaultChecked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    defaultChecked: false,
    disabled: true,
  },
};

export const States: Story = {
  name: "States",
  render: () => (
    <Stack
      direction="row"
      gap={{ xs: 5, lg: 10 }}
      sx={{ alignItems: "flex-start", flexWrap: "wrap" }}
    >
      <Stack gap={2} sx={{ maxWidth: "100%", minWidth: 0 }}>
        <Typography variant="body1Semibold" sx={labelSx}>
          States
        </Typography>
        <StateMatrix />
      </Stack>
      <Stack gap={2} sx={{ maxWidth: "100%", minWidth: 0 }}>
        <Typography variant="body1Semibold" sx={labelSx}>
          Building blocks
        </Typography>
        <BuildingBlocksMatrix />
      </Stack>
    </Stack>
  ),
};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <Stack spacing={2}>
      <ToggleLabel
        checkState="Checked"
        labelPosition="right"
        visualState="Default"
      />
      <ToggleLabel
        checkState="Unchecked"
        labelPosition="right"
        visualState="Default"
      />
      <ToggleLabel
        checkState="Checked"
        labelPosition="left"
        visualState="Disabled"
      />
    </Stack>
  ),
};
