/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { InputAdornment, Stack, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { InputField } from "../components/input-field";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Input fields allow users to input or configure information."
          guideLink=""
          importLine='import { InputField } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

const placeholder = "Placeholder text";
const getClearAdornment = () => (
  <InputAdornment position="end">
    <HighlightOffIcon />
  </InputAdornment>
);

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="flex-start">
      <InputField
        label="Label"
        placeholder={placeholder}
        sx={{ width: "280px" }}
      />
      <InputField
        label="Label"
        placeholder={placeholder}
        size="small"
        sx={{ width: "280px" }}
      />
    </Stack>
  ),
};

export const BuildingBlocks: Story = {
  name: "Building blocks",
  render: () => (
    <Stack direction="row" spacing={10} alignItems="flex-start">
      <Stack spacing={3} sx={{ width: "280px" }}>
        <InputField placeholder={placeholder} />
        <InputField placeholder={placeholder} focused />
        <InputField
          placeholder={placeholder}
          focused
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
          focused
          slotProps={{ input: { endAdornment: getClearAdornment() } }}
        />
        <InputField placeholder={placeholder} disabled />
      </Stack>
      <Stack spacing={6} sx={{ minWidth: "360px" }}>
        <Typography variant="body1" color="text.secondary">
          Placeholder text
        </Typography>
        <Typography variant="caption">Contextual hint</Typography>
        <Typography variant="subtitle2">Label</Typography>
      </Stack>
    </Stack>
  ),
};

export const OptionalBehaviors: Story = {
  name: "Optional behaviors",
  render: () => (
    <Stack direction="row" spacing={4} alignItems="flex-start">
      <Stack spacing={1}>
        <Typography variant="subtitle2">scroll and resize</Typography>
        <InputField
          label="Label"
          placeholder={placeholder}
          multiline
          minRows={1}
          sx={{ width: "280px" }}
        />
      </Stack>
      <Stack spacing={1}>
        <Typography variant="subtitle2">number</Typography>
        <InputField
          label="Label"
          defaultValue={1}
          placeholder=""
          sx={{ width: "68px" }}
          type="number"
        />
      </Stack>
    </Stack>
  ),
};
