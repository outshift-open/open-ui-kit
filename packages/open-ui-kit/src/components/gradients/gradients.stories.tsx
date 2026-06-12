/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import {
  grey0,
  grey500,
  surfaceDark900,
  surfaceLight100,
} from "@/theme/style/color-palette";
import { gradientsPalette } from "@/theme/style/gradients";
import { DocsHeader } from "storybook/components/docs-header.stories";

function GradientSwatch({
  label,
  gradient,
  light = false,
}: {
  label: string;
  gradient: string;
  light?: boolean;
}) {
  return (
    <Stack gap="8px" sx={{ width: 248 }}>
      <Box
        sx={{
          width: 248,
          height: 50,
          background: gradient,
          display: "flex",
          alignItems: "center",
          pl: "24px",
        }}
      >
        <Typography
          variant="body2Semibold"
          color={light ? surfaceDark900 : grey0}
          noWrap
        >
          {label}
        </Typography>
      </Box>
    </Stack>
  );
}

function GradientGroup({
  title,
  items,
}: {
  title: string;
  items: { label: string; gradient: string; light?: boolean }[];
}) {
  return (
    <Stack gap="18px">
      <Typography variant="body2Semibold" color={grey500}>
        {title}
      </Typography>
      <Stack gap="0px">
        {items.map(({ label, gradient, light }) => (
          <GradientSwatch
            key={label}
            label={label}
            gradient={gradient}
            light={light}
          />
        ))}
      </Stack>
    </Stack>
  );
}

const GradientsDemo = () => {
  const { primary, secondary, red, illustrations, background } =
    gradientsPalette;

  return (
    <Stack
      gap="36px"
      sx={{
        backgroundColor: surfaceLight100,
        boxSizing: "border-box",
        p: { xs: "32px 24px", md: "64px" },
        width: "100%",
      }}
    >
      <Stack gap="8px">
        <Typography
          variant="h6"
          fontWeight={700}
          color={grey500}
          sx={{ letterSpacing: 0, lineHeight: "24px" }}
        >
          Gradients
        </Typography>
        <Typography variant="body2" color={grey500}>
          Gradients are used occasionally for branded CTAs and for
          illustrations.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <GradientGroup
          title="Primary"
          items={[
            { label: "gradient-primary-default", gradient: primary.default },
            { label: "gradient-primary-hover", gradient: primary.hover },
            { label: "gradient-primary-pressed", gradient: primary.pressed },
          ]}
        />
        <GradientGroup
          title="Secondary"
          items={[
            {
              label: "gradient-secondary-default",
              gradient: secondary.default,
            },
            { label: "gradient-secondary-hover", gradient: secondary.hover },
            {
              label: "gradient-secondary-pressed",
              gradient: secondary.pressed,
            },
          ]}
        />
        <GradientGroup
          title="Red"
          items={[
            { label: "gradient-red-default", gradient: red.default },
            { label: "gradient-red-hover", gradient: red.hover },
            { label: "gradient-red-pressed", gradient: red.pressed },
          ]}
        />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        <GradientGroup
          title="Purple"
          items={[{ label: "gradient-purple", gradient: illustrations.purple }]}
        />
        <GradientGroup
          title="Blue"
          items={[{ label: "gradient-blue", gradient: illustrations.blue }]}
        />
        <GradientGroup
          title="Light Blue"
          items={[
            { label: "gradient-light-blue", gradient: illustrations.lightBlue },
          ]}
        />
        <GradientGroup
          title="Green"
          items={[{ label: "gradient-green", gradient: illustrations.green }]}
        />
        <GradientGroup
          title="Orange"
          items={[{ label: "gradient-orange", gradient: illustrations.orange }]}
        />
        <GradientGroup
          title="Pink"
          items={[{ label: "gradient-pink", gradient: illustrations.pink }]}
        />
        <GradientGroup
          title="Rainbow"
          items={[
            { label: "gradient-rainbow", gradient: illustrations.rainbow },
          ]}
        />
        <GradientGroup
          title="Main Background Light"
          items={[
            {
              label: "gradient-bg-light",
              gradient: background.light,
              light: true,
            },
          ]}
        />
        <GradientGroup
          title="Main Background Dark"
          items={[{ label: "gradient-bg-dark", gradient: background.dark }]}
        />
      </Box>
    </Stack>
  );
};

const meta: Meta<typeof GradientsDemo> = {
  title: "Foundations/Gradients",
  component: GradientsDemo,
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Gradients"
          blurb="Gradients are used occasionally for branded CTAs and for illustrations."
          importLine='import { gradientsPalette } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof GradientsDemo>;

export const All: Story = {
  render: () => <GradientsDemo />,
};
