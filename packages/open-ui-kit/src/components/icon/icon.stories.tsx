import { Meta, StoryObj } from "@storybook/react-vite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShieldIcon from "@mui/icons-material/Shield";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { SvgIconComponent } from "@mui/icons-material";
import type React from "react";
import { Box, Stack, Typography } from "@/components";
import { Add, API, Google, Settings } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Settings> = {
  title: "Components/Icon",
  component: Settings,
  tags: ["autodocs"],
  args: {
    color: "inherit",
    fontSize: "medium",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        undefined,
        "inherit",
        "primary",
        "secondary",
        "action",
        "error",
        "disabled",
        "info",
        "success",
        "warning",
      ],
    },
    fontSize: {
      control: "select",
      options: [undefined, "inherit", "small", "medium", "large"],
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Icon"
          importLine='import { Icons } from "@open-ui-kit/core";'
          blurb="Icons are SVG glyphs used to represent objects, actions, and product concepts across the interface."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const materialIcons = [
  { label: "Rocket", Icon: RocketLaunchIcon },
  { label: "Shield", Icon: ShieldIcon },
  { label: "Cloud", Icon: CloudQueueIcon },
  { label: "Explore", Icon: TravelExploreIcon },
  { label: "Magic", Icon: AutoAwesomeIcon },
];

const customIcons = [
  { label: "Add", Icon: Add },
  { label: "API", Icon: API },
  { label: "Google", Icon: Google },
  { label: "Settings", Icon: Settings },
];

type SvgSampleProps = React.ComponentProps<typeof RocketLaunchIcon>;

const iconColors: SvgSampleProps["color"][] = [
  "inherit",
  "primary",
  "secondary",
  "action",
  "error",
  "disabled",
  "success",
];

const iconSizes: SvgSampleProps["fontSize"][] = ["small", "medium", "large"];

function SampleTile({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={(theme) => ({
        alignItems: "center",
        color: theme.palette.vars.baseTextDefault,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        justifyContent: "center",
        minHeight: "64px",
        width: "72px",
      })}
    >
      {children}
      <Typography variant="caption">{label}</Typography>
    </Box>
  );
}

function SampleRow({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
      {children}
    </Stack>
  );
}

function SvgIconSample({
  label,
  SvgIcon,
  color,
  fontSize,
  sx,
}: {
  label: string;
  SvgIcon: SvgIconComponent | React.ComponentType<SvgSampleProps>;
  color?: SvgSampleProps["color"];
  fontSize?: SvgSampleProps["fontSize"];
  sx?: SvgSampleProps["sx"];
}) {
  return (
    <SampleTile label={label}>
      <SvgIcon color={color} fontSize={fontSize} sx={sx} />
    </SampleTile>
  );
}

export const Default: Story = {
  args: {
    color: "inherit",
    fontSize: "medium",
  },
  render: (args) => (
    <SampleTile label="Settings">
      <Settings {...args} aria-hidden />
    </SampleTile>
  ),
};

export const ColorProp: Story = {
  render: () => (
    <SampleRow>
      {iconColors.map((color) => (
        <SampleTile key={color} label={color ?? "default"}>
          <Settings color={color} aria-hidden />
        </SampleTile>
      ))}
    </SampleRow>
  ),
};

export const SxColor: Story = {
  render: () => (
    <SampleRow>
      {materialIcons.map(({ label, Icon: MaterialIcon }) => (
        <SvgIconSample
          key={label}
          label={label}
          SvgIcon={MaterialIcon}
          sx={(theme) => ({
            color: theme.palette.vars.brandIconPrimaryDefault,
          })}
        />
      ))}
    </SampleRow>
  ),
};

export const Sizes: Story = {
  render: () => (
    <SampleRow>
      {iconSizes.map((fontSize) => (
        <SampleTile key={fontSize} label={fontSize ?? "default"}>
          <Settings fontSize={fontSize} aria-hidden />
        </SampleTile>
      ))}
    </SampleRow>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <SampleRow>
      {customIcons.map(({ label, Icon: CustomIcon }) => (
        <SvgIconSample
          key={label}
          label={label}
          SvgIcon={CustomIcon}
          sx={(theme) => ({
            color: theme.palette.vars.brandIconPrimaryDefault,
          })}
        />
      ))}
    </SampleRow>
  ),
};
