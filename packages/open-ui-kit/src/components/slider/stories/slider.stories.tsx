/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Slider } from "../components/slider";

const DocsPage = () => (
  <DocsHeader
    title="Slider"
    blurb="Sliders allow users to make selections from a range of values. They are ideal for adjusting settings such as volume or brightness."
    guideLink=""
    importLine='import { Slider } from "@open-ui-kit/core";'
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

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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
    controls: { disable: true },
    layout: "fullscreen",
    docs: {
      page: DocsPage,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const sliderWidth = { xs: "min(500px, 100%)", sm: "500px" } as const;

const decimalMarks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map(
  (value) => ({ value, label: `${value}` }),
);

const valueMarks = [0, 1, 2, 5.5, 6, 9, 11, 12, 18, 24, 36, 48].map(
  (value) => ({ value, label: `${value}` }),
);

const VariantGroup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Stack spacing={2} sx={{ maxWidth: "100%" }}>
    <Typography
      variant="subtitle2"
      sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
    >
      {title}
    </Typography>
    {children}
  </Stack>
);

const SliderRow = ({
  children,
  denseMarks = false,
}: {
  children: ReactNode;
  denseMarks?: boolean;
}) => (
  <Box
    sx={{
      px: 1,
      py: 0.75,
      width: sliderWidth,
      "& .MuiSlider-markLabel": {
        display: { xs: "none", sm: "block" },
      },
      ...(denseMarks && {
        "& .MuiSlider-markLabel:nth-of-type(10), & .MuiSlider-markLabel:nth-of-type(16)":
          {
            transform: "translate(-50%, 20px)",
          },
      }),
    }}
  >
    {children}
  </Box>
);

const getRangeAriaLabel = (label: string) => (index: number) =>
  `${label} ${index + 1}`;

const VariantMatrix = () => (
  <Stack spacing={4} sx={{ maxWidth: "100%" }}>
    <VariantGroup title="Variants">
      <Stack spacing={2.25} sx={{ width: sliderWidth }}>
        <SliderRow>
          <Slider defaultValue={0} aria-label="No selection" />
        </SliderRow>
        <SliderRow>
          <Slider
            defaultValue={0}
            marks={decimalMarks}
            min={0}
            max={50}
            aria-label="Decimal marks no selection"
          />
        </SliderRow>
        <SliderRow denseMarks>
          <Slider
            defaultValue={0}
            marks={valueMarks}
            min={0}
            max={48}
            aria-label="Value marks no selection"
          />
        </SliderRow>
        {[20, 25, 45, 100].map((value) => (
          <SliderRow key={`value-${value}`}>
            <Slider defaultValue={value} aria-label={`Value ${value}`} />
          </SliderRow>
        ))}
        <SliderRow>
          <Slider
            defaultValue={35}
            marks={decimalMarks}
            min={0}
            max={50}
            aria-label="Decimal marks selected"
          />
        </SliderRow>
        <SliderRow denseMarks>
          <Slider
            defaultValue={36}
            marks={valueMarks}
            min={0}
            max={48}
            aria-label="Value marks selected"
          />
        </SliderRow>
        {[0, 30, [25, 60], [20, 90], [0, 100]].map((value, index) => (
          <SliderRow key={`range-${index}`}>
            <Slider
              defaultValue={value}
              disabled={index < 2}
              {...(Array.isArray(value)
                ? { getAriaLabel: getRangeAriaLabel(`Range ${index}`) }
                : { "aria-label": `Range ${index}` })}
            />
          </SliderRow>
        ))}
      </Stack>
    </VariantGroup>
    <VariantGroup title="Component">
      <Box
        sx={(theme) => ({
          border: `1px dashed ${theme.palette.vars.infoBorderDefault}`,
          borderRadius: "5px",
          boxSizing: "border-box",
          p: 2,
          width: "fit-content",
        })}
      >
        <Stack spacing={2.25} sx={{ width: sliderWidth }}>
          {[0, 20, 60, 100].map((value) => (
            <SliderRow key={`component-${value}`}>
              <Slider defaultValue={value} aria-label={`Component ${value}`} />
            </SliderRow>
          ))}
          <SliderRow>
            <Slider
              defaultValue={20}
              marks={decimalMarks}
              min={0}
              max={50}
              aria-label="Component decimal marks"
            />
          </SliderRow>
          <SliderRow denseMarks>
            <Slider
              defaultValue={36}
              marks={valueMarks}
              min={0}
              max={48}
              aria-label="Component value marks"
            />
          </SliderRow>
          {[0, [20, 55], [40, 70], [10, 95], [0, 100]].map((value, index) => (
            <SliderRow key={`component-range-${index}`}>
              <Slider
                defaultValue={value}
                {...(Array.isArray(value)
                  ? {
                      getAriaLabel: getRangeAriaLabel(
                        `Component range ${index}`,
                      ),
                    }
                  : { "aria-label": `Component range ${index}` })}
              />
            </SliderRow>
          ))}
        </Stack>
      </Box>
    </VariantGroup>
    <VariantGroup title="Thumb">
      <Box
        sx={(theme) => ({
          border: `1px dashed ${theme.palette.vars.infoBorderDefault}`,
          borderRadius: "5px",
          display: "flex",
          gap: 2,
          p: 1.5,
          width: "fit-content",
        })}
      >
        {[0, 20, 40].map((value) => (
          <Box key={value} sx={{ width: 44 }}>
            <Slider defaultValue={value} aria-label={`Thumb ${value}`} />
          </Box>
        ))}
      </Box>
    </VariantGroup>
  </Stack>
);

export const Default: Story = {
  name: "Default",
  render: () => <VariantMatrix />,
};

export const WithValue: Story = {
  name: "With Value",
  render: () => (
    <Box sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider
        defaultValue={30}
        aria-label="With value"
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const WithMarks: Story = {
  name: "With Marks",
  render: () => (
    <Box sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider
        defaultValue={20}
        step={10}
        marks
        min={0}
        max={100}
        aria-label="With marks"
      />
    </Box>
  ),
};

export const WithMarkLabels: Story = {
  name: "With Mark Labels",
  render: () => (
    <Box sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider
        defaultValue={20}
        step={10}
        marks={[0, 10, 20, 30, 40, 50].map((v) => ({
          value: v,
          label: `${v}`,
        }))}
        min={0}
        max={50}
        aria-label="With mark labels"
      />
    </Box>
  ),
};

export const Range: Story = {
  name: "Range",
  render: () => (
    <Box sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider
        defaultValue={[20, 60]}
        getAriaLabel={getRangeAriaLabel("Range")}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <Box sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider defaultValue={30} disabled aria-label="Disabled" />
    </Box>
  ),
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <Box sx={{ height: 200, paddingLeft: "40px" }}>
      <Slider
        orientation="vertical"
        defaultValue={30}
        aria-label="Vertical"
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const Variants: Story = {
  name: "Variants",
  render: () => (
    <Stack spacing={4} sx={{ width: sliderWidth, padding: "16px 0" }}>
      <Slider defaultValue={0} aria-label="No selection" />
      <Slider
        defaultValue={30}
        aria-label="With selection"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={30} step={10} marks aria-label="With marks" />
      <Slider
        defaultValue={[20, 70]}
        getAriaLabel={getRangeAriaLabel("Range")}
        valueLabelDisplay="auto"
      />
    </Stack>
  ),
};
