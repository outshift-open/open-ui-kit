import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DataObjectIcon from "@mui/icons-material/DataObject";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShieldIcon from "@mui/icons-material/Shield";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Icon } from "./components/icon";

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
type Story = StoryObj<typeof meta>;

const randomIcons = [
  { label: "Rocket", Icon: RocketLaunchIcon },
  { label: "Shield", Icon: ShieldIcon },
  { label: "Cloud", Icon: CloudQueueIcon },
  { label: "Explore", Icon: TravelExploreIcon },
  { label: "Magic", Icon: AutoAwesomeIcon },
];

const IconSample = ({
  label,
  SvgIcon,
  color,
  fontSize,
}: {
  label: string;
  SvgIcon: SvgIconComponent;
  color?: SvgIconProps["color"];
  fontSize?: SvgIconProps["fontSize"];
}) => (
  <Box
    sx={(theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "72px",
      minHeight: "64px",
      gap: "6px",
      color: theme.palette.vars.baseTextDefault,
    })}
  >
    <SvgIcon color={color} fontSize={fontSize} />
    <Typography variant="caption">{label}</Typography>
  </Box>
);

const Icons: Story["render"] = (args) => {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography>Default</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          {randomIcons.map(({ label, Icon }) => (
            <IconSample key={label} label={label} SvgIcon={Icon} {...args} />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography>Primary</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          {randomIcons.map(({ label, Icon }) => (
            <IconSample
              key={label}
              label={label}
              SvgIcon={Icon}
              color="primary"
              {...args}
            />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography>Secondary</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          {randomIcons.map(({ label, Icon }) => (
            <IconSample
              key={label}
              label={label}
              SvgIcon={Icon}
              color="secondary"
              {...args}
            />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography>Sizes</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconSample
            label="Small"
            SvgIcon={BoltIcon}
            fontSize="small"
            {...args}
          />
          <IconSample label="Medium" SvgIcon={DataObjectIcon} {...args} />
          <IconSample
            label="Large"
            SvgIcon={RocketLaunchIcon}
            fontSize="large"
            {...args}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export const IconExamples: Story = {
  render: Icons,
};
