/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Upload } from "../components/upload";
import type { UploadFile } from "../types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const thumbnailSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='2' fill='%23E8F1FF'/%3E%3Ccircle cx='18' cy='19' r='6' fill='%2379B9FF'/%3E%3Cpath d='M7 39l11-12 7 7 5-5 11 10H7z' fill='%230051AF'/%3E%3C/svg%3E";

const files: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "idle" },
  { id: "f2", name: "example-file-2.png", status: "idle" },
  { id: "f3", name: "example-file-3.png", status: "idle" },
];

const progressFiles: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "uploading", progress: 67 },
  { id: "f2", name: "example-file-2.png", status: "idle" },
];

const spinnerFiles: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "uploading" },
  { id: "f2", name: "example-file-2.png", status: "idle" },
];

const errorFiles: UploadFile[] = [
  {
    id: "f1",
    name: "example-file-1.png",
    status: "error",
    errorMessage: "File size exceeds 10MB limit.",
  },
  { id: "f2", name: "example-file-2.png", status: "idle" },
];

const thumbnailFiles: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", thumbnailSrc, status: "idle" },
  {
    id: "f2",
    name: "example-file-2.png",
    thumbnailSrc,
    status: "uploading",
    progress: 67,
  },
  {
    id: "f3",
    name: "example-file-3.png",
    thumbnailSrc,
    status: "error",
    errorMessage: "File size exceeds 10MB limit.",
  },
];

const StoryFrame = ({
  children,
  width = "400px",
}: {
  children: ReactNode;
  width?: string;
}) => <Box sx={{ width, maxWidth: "100%" }}>{children}</Box>;

const meta: Meta<typeof Upload> = {
  title: "Components/Upload",
  component: Upload,
  tags: ["autodocs"],
  args: {
    variant: "drag",
    size: "md",
    hint: "Supports: PNG, JPG, PDF up to 10MB",
    onFilesChange: noop,
    onFileRemove: noop,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["drag", "button"],
      description: "Choose the drag-and-drop trigger or button trigger.",
    },
    size: {
      control: "radio",
      options: ["md", "sm"],
      description: "Controls the drag trigger and file row size.",
    },
    label: {
      control: "text",
      description: "Primary label for the trigger.",
    },
    hint: {
      control: "text",
      description: "Supplemental drag trigger hint.",
    },
    disabled: {
      control: "boolean",
      description: "Disables file selection and drop handling.",
    },
    multiple: {
      control: "boolean",
      description: "Allows selecting more than one file.",
    },
    accept: {
      control: "text",
      description: "Accepted file types for the hidden file input.",
    },
    files: {
      control: false,
      description: "Managed file rows shown under the trigger.",
    },
    onFilesChange: { action: "files selected" },
    onFileRemove: { action: "file removed" },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Upload"
          blurb="Upload lets users choose files from a drag-and-drop region or button trigger, then shows selected files with idle, loading, and error states."
          guideLink=""
          importLine='import { Upload } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <StoryFrame width="320px">
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const WithFiles: Story = {
  args: {
    files,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const UploadingProgress: Story = {
  args: {
    files: progressFiles,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const UploadingSpinner: Story = {
  args: {
    files: spinnerFiles,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const ErrorState: Story = {
  args: {
    files: errorFiles,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const WithThumbnail: Story = {
  args: {
    files: thumbnailFiles,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

export const ButtonTrigger: Story = {
  args: {
    variant: "button",
    hint: undefined,
  },
  render: (args) => (
    <StoryFrame>
      <Upload {...args} />
    </StoryFrame>
  ),
};

const InteractiveStory = () => {
  const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    const mapped: UploadFile[] = newFiles.map((file) => ({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      status: "idle",
    }));
    setSelectedFiles((previousFiles) => [...previousFiles, ...mapped]);
  };

  const handleRemove = (id: string) => {
    setSelectedFiles((previousFiles) =>
      previousFiles.filter((file) => file.id !== id),
    );
  };

  return (
    <StoryFrame>
      <Upload
        hint="Supports: PNG, JPG, PDF up to 10MB"
        files={selectedFiles}
        onFilesChange={handleFilesChange}
        onFileRemove={handleRemove}
      />
    </StoryFrame>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveStory />,
};
