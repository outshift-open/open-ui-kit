import type { Meta, StoryObj } from "@storybook/react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Text Fields let users enter and edit text.
 */
const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Text Fields let users enter and edit text."
          guideLink="#"
          importLine='import { TextField } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

const LONG_TEXT = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
making it look like readable English.`;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Regular_TextField: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    placeholder: "Placeholder",
    variant: "standard",
    size: "medium",
    disabled: false,
    error: false,
  },
};

export const FullWidth_TextField: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    variant: "standard",
    fullWidth: true,
  },
};

export const CustomWidth_TextField: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    variant: "standard",
    size: "medium",
    disabled: false,
    error: false,
    sx: { width: "500px" },
  },
};

export const TextField_With_Helper: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    helperText: "Helper",
    variant: "standard",
    size: "medium",
    disabled: false,
    error: false,
  },
};

export const TextField_With_Helper_Left_Icon: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    helperText: "Helper",
    variant: "standard",
    size: "medium",
    disabled: false,
    error: false,
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <StarBorderIcon />
        </InputAdornment>
      ),
    },
  },
};

export const TextField_With_Helper_Right_Icon: Story = {
  args: {
    label: "Label",
    defaultValue: "Value",
    helperText: "Helper",
    variant: "standard",
    size: "medium",
    disabled: false,
    error: false,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <StarBorderIcon />
        </InputAdornment>
      ),
    },
  },
};

export const TextField_Multiline_With_Helper: Story = {
  args: {
    label: "Label",
    defaultValue: LONG_TEXT,
    variant: "standard",
    multiline: true,
    helperText: "Helper",
    disabled: false,
    error: false,
  },
};

const TextField_Multiline_With_Character_Limit_Story = (
  args: TextFieldProps,
) => {
  const CHARACTER_LIMIT = 400;
  const [values, setValues] = React.useState({
    name: LONG_TEXT,
  });

  const handleChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  return (
    <TextField
      {...args}
      label="Label"
      slotProps={{
        htmlInput: {
          maxLength: CHARACTER_LIMIT,
        },
      }}
      value={values.name}
      helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
      onChange={handleChange("name")}
      margin="normal"
      multiline={true}
      sx={{ margin: "0px" }}
    />
  );
};

export const TextField_Multiline_With_Character_Limit: Story = {
  render: TextField_Multiline_With_Character_Limit_Story,
  args: {
    disabled: false,
    error: false,
    variant: "standard",
  },
};
