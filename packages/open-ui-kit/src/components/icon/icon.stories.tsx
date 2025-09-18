import { Meta, StoryObj } from "@storybook/react";
import { Icon, Stack, SvgIcon, SvgIconProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### An icon is a glyph used to represent something else.
 */
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          importLine="import { Icon } from '@open-ui-kit/core';"
          blurb="An icon is a glyph used to represent something else. Icons can be used to convey meaning, provide visual cues, or enhance the user interface."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

const Icons = (args: SvgIconProps) => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Typography>Filled</Typography>
        <DeleteIcon {...args} />
        <DeleteForeverIcon {...args} color="primary" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography>Outlined</Typography>
        <DeleteOutlinedIcon {...args} />
        <DeleteForeverOutlinedIcon {...args} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography>Rounded</Typography>
        <DeleteRoundedIcon {...args} color="secondary" />
        <DeleteForeverRoundedIcon {...args} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography>Two Tone</Typography>
        <DeleteTwoToneIcon {...args} />
        <DeleteForeverTwoToneIcon {...args} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography>Sharp</Typography>
        <DeleteSharpIcon {...args} color="primary" />
        <DeleteForeverSharpIcon {...args} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography>Edge-cases</Typography>
        <ThreeDRotationIcon {...args} />
        <FourKIcon {...args} />
        <ThreeSixtyIcon {...args} />
      </Stack>
    </Stack>
  );
};

export const IconExamples: Story = {
  render: Icons,
};
