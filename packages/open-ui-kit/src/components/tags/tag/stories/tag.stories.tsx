import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { GeneralSize } from "@/common";
import { Tag, TagProps } from "../components/tag";
import { TagBackgroundColorVariants, TagStatus } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Tag> = {
  title: "Components/Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tags are used to categorize and label items, allowing users to filter and search for specific content. They can also indicate the status of an item."
          guideLink="#"
          importLine='import { Tag } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

function TagsWithSizesAndDeleteOptionComponent(args: TagProps) {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag {...args} size={GeneralSize.Small}>
        Small
      </Tag>
      <Tag {...args} size={GeneralSize.Medium}>
        Medium
      </Tag>
      <Tag {...args} size={GeneralSize.Large}>
        Large
      </Tag>
    </Stack>
  );
}

function TagWithAvatarComponent() {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Small}>
        Small
      </Tag>
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Medium}>
        Medium
      </Tag>
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Large}>
        Large
      </Tag>
    </Stack>
  );
}

function ClickableTagWithIconComponent() {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Small}
        onClick={() => alert("Tag clicked")}
      >
        Small
      </Tag>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Medium}
        onClick={() => alert("Tag clicked")}
      >
        Medium
      </Tag>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Large}
        onClick={() => alert("Tag clicked")}
      >
        Large
      </Tag>
    </Stack>
  );
}

function StatusTagsComponent() {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag status={TagStatus.Excellent}>{TagStatus.Excellent}</Tag>
      <Tag status={TagStatus.Positive}>{TagStatus.Positive}</Tag>
      <Tag status={TagStatus.Warning}>{TagStatus.Warning}</Tag>
      <Tag status={TagStatus.SevereWarning}>{TagStatus.SevereWarning}</Tag>
      <Tag status={TagStatus.Negative}>{TagStatus.Negative}</Tag>
      <Tag status={TagStatus.Inactive}>{TagStatus.Inactive}</Tag>
      <Tag status={TagStatus.Disabled}>{TagStatus.Disabled}</Tag>
      <Tag status={TagStatus.InProgress}>{TagStatus.InProgress}</Tag>
      <Tag status={TagStatus.Info}>{TagStatus.Info}</Tag>
      <Tag status={TagStatus.Allow}>{TagStatus.Allow}</Tag>
      <Tag status={TagStatus.Deny}>{TagStatus.Deny}</Tag>
    </Stack>
  );
}

function ClickableOutlinedTagComponent() {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag
        variant="outlined"
        icon={<AccountCircleIcon />}
        size={GeneralSize.Small}
        onClick={() => alert("Tag clicked")}
      >
        Small
      </Tag>
      <Tag
        variant="outlined"
        icon={<AccountCircleIcon />}
        size={GeneralSize.Medium}
        onClick={() => alert("Tag clicked")}
      >
        Medium
      </Tag>
      <Tag
        variant="outlined"
        icon={<AccountCircleIcon />}
        size={GeneralSize.Large}
        onClick={() => alert("Tag clicked")}
      >
        Large
      </Tag>
    </Stack>
  );
}

function TagColorsComponent() {
  return (
    <Stack
      gap="10px"
      flexDirection="row"
      alignItems={"flex-start"}
      flexWrap={"wrap"}
    >
      <Tag
        color={TagBackgroundColorVariants.AccentAWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentAWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentBWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentBWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentCWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentCWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentDWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentDWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentEWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentEWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentFWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentFWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentGWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentGWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentHWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentHWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentIWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentIWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.AccentJWeak}
        icon={<AccountCircleIcon />}
      >
        {TagBackgroundColorVariants.AccentJWeak}
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.Primary}
        icon={<AccountCircleIcon />}
      >
        Primary
      </Tag>
      <Tag
        color={TagBackgroundColorVariants.Secondary}
        icon={<AccountCircleIcon />}
      >
        Secondary
      </Tag>
    </Stack>
  );
}

function DisabledTagComponent() {
  return (
    <Stack gap="32px" flexDirection="row" alignItems={"flex-end"}>
      <Tag
        icon={<AccountCircleIcon />}
        onClick={() => alert("Tag clicked")}
        disabled
      >
        Disabled Tag
      </Tag>
    </Stack>
  );
}

export const TagSizesWithDeleteOption: Story = {
  render: TagsWithSizesAndDeleteOptionComponent,
};

export const TagWithAvatar: Story = {
  render: TagWithAvatarComponent,
};

export const ClickableTagWithIcon: Story = {
  render: ClickableTagWithIconComponent,
};

export const StatusTags: Story = {
  render: StatusTagsComponent,
};

export const ClickableOutlinedTag: Story = {
  render: ClickableOutlinedTagComponent,
};

export const TagColors: Story = {
  render: TagColorsComponent,
};

export const DisabledTag: Story = {
  render: DisabledTagComponent,
};
