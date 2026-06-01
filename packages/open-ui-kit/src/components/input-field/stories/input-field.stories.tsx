/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputAdornment, Stack, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { InputField } from "..";
import { getStoryFocusedSx, getStoryNegativeSx } from "../styles";

const DocsPage = () => (
  <DocsHeader
    title="InputField"
    blurb="Input fields allow users to input or configure information."
    includeStories={true}
    importLine={`import { InputField } from "@open-ui-kit/core";`}
  />
);

const meta: Meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    actions: { argTypesRegex: null },
    controls: { disable: true },
    docs: {
      page: DocsPage,
    },
  },
};

export default meta;
type Story = StoryObj;

const placeholder = "Placeholder text";
const getClearAdornment = () => (
  <InputAdornment position="end">
    <HighlightOffIcon />
  </InputAdornment>
);

const SizesExample = () => (
  <Stack
    direction="row"
    spacing={4}
    alignItems="flex-start"
    sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
  >
    <Stack spacing={2}>
      <Typography
        variant="body2"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        Large
      </Typography>
      <InputField
        label="Label"
        placeholder={placeholder}
        sx={{ width: "280px" }}
      />
    </Stack>
    <Stack spacing={2}>
      <Typography
        variant="body2"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        Medium
      </Typography>
      <InputField
        label="Label"
        placeholder={placeholder}
        size="small"
        sx={{ width: "280px" }}
      />
    </Stack>
  </Stack>
);

const BuildingBlocksExample = () => (
  <Stack
    direction="row"
    spacing={10}
    alignItems="flex-start"
    sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
  >
    <Stack spacing={3} sx={{ width: "280px" }}>
      <InputField placeholder={placeholder} />
      <InputField placeholder={placeholder} sx={getStoryFocusedSx} />
      <InputField
        placeholder={placeholder}
        sx={getStoryFocusedSx}
        slotProps={{ input: { endAdornment: getClearAdornment() } }}
      />
      <InputField
        placeholder={placeholder}
        slotProps={{ input: { endAdornment: getClearAdornment() } }}
      />
      <InputField placeholder={placeholder} error />
      <InputField
        placeholder={placeholder}
        error
        sx={getStoryNegativeSx}
        slotProps={{ input: { endAdornment: getClearAdornment() } }}
      />
      <InputField placeholder={placeholder} disabled />
    </Stack>
    <Stack spacing={6} sx={{ minWidth: "360px" }}>
      <Typography
        variant="body1"
        sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
      >
        Placeholder text
      </Typography>
      <Typography
        variant="caption"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        Contextual hint
      </Typography>
      <Typography
        variant="subtitle2"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        Label
      </Typography>
    </Stack>
  </Stack>
);

const OptionalBehaviorsExample = () => (
  <Stack
    direction="row"
    spacing={4}
    alignItems="flex-start"
    sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
  >
    <Stack spacing={1}>
      <Typography
        variant="subtitle2"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        scroll and resize
      </Typography>
      <InputField
        label="Label"
        placeholder={placeholder}
        multiline
        minRows={1}
        sx={{ width: "280px" }}
      />
    </Stack>
    <Stack spacing={1}>
      <Typography
        variant="subtitle2"
        sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
      >
        number
      </Typography>
      <InputField
        label="Label"
        defaultValue={1}
        placeholder=""
        sx={{ width: "68px" }}
        type="number"
      />
    </Stack>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack spacing={8} alignItems="flex-start">
      <Stack spacing={2}>
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Sizes
        </Typography>
        <SizesExample />
      </Stack>
      <Stack spacing={2}>
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Building blocks
        </Typography>
        <BuildingBlocksExample />
      </Stack>
      <Stack spacing={2}>
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Optional behaviors
        </Typography>
        <OptionalBehaviorsExample />
      </Stack>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => <SizesExample />,
};

export const BuildingBlocks: Story = {
  name: "Building blocks",
  render: () => <BuildingBlocksExample />,
};

export const OptionalBehaviors: Story = {
  name: "Optional behaviors",
  render: () => <OptionalBehaviorsExample />,
};
