/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Upload } from "../components/upload";
import type { UploadFile } from "../types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof Upload> = {
  title: "Components/Upload",
  component: Upload,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Upload allows users to select or drag files for upload. Supports drag-and-drop and button trigger variants, with file list management including progress and error states."
          guideLink=""
          importLine='import { Upload } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

/* ─── Drag & Drop — Default ─── */
export const DragAndDrop: Story = {
  name: "Drag & Drop",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="drag"
        hint="Supports: PNG, JPG, PDF up to 10MB"
        onFilesChange={noop}
      />
    </Box>
  ),
};

/* ─── Drag & Drop — With Files ─── */
const staticFiles: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "idle" },
  { id: "f2", name: "example-file-2.png", status: "idle" },
  { id: "f3", name: "example-file-3.png", status: "idle" },
];

export const DragAndDropWithFiles: Story = {
  name: "Drag & Drop — With Files",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="drag"
        hint="Supports: PNG, JPG, PDF up to 10MB"
        files={staticFiles}
        onFilesChange={noop}
        onFileRemove={noop}
      />
    </Box>
  ),
};

/* ─── Drag & Drop — Uploading ─── */
const uploadingFiles: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "uploading", progress: 60 },
  { id: "f2", name: "example-file-2.png", status: "idle" },
  { id: "f3", name: "example-file-3.png", status: "idle" },
];

export const DragAndDropUploading: Story = {
  name: "Drag & Drop — Uploading",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="drag"
        hint="Supports: PNG, JPG, PDF up to 10MB"
        files={uploadingFiles}
        onFilesChange={noop}
        onFileRemove={noop}
      />
    </Box>
  ),
};

/* ─── Drag & Drop — Error ─── */
const errorFiles: UploadFile[] = [
  {
    id: "f1",
    name: "example-file-1.png",
    status: "error",
    errorMessage: "File size exceeds 10MB limit.",
  },
  { id: "f2", name: "example-file-2.png", status: "idle" },
  { id: "f3", name: "example-file-3.png", status: "idle" },
];

export const DragAndDropError: Story = {
  name: "Drag & Drop — Error",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="drag"
        hint="Supports: PNG, JPG, PDF up to 10MB"
        files={errorFiles}
        onFilesChange={noop}
        onFileRemove={noop}
      />
    </Box>
  ),
};

/* ─── Button Trigger — Default ─── */
export const ButtonTrigger: Story = {
  name: "Button Trigger",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload variant="button" onFilesChange={noop} />
    </Box>
  ),
};

/* ─── Button Trigger — With Files ─── */
export const ButtonTriggerWithFiles: Story = {
  name: "Button Trigger — With Files",
  render: () => (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="button"
        files={staticFiles}
        onFilesChange={noop}
        onFileRemove={noop}
      />
    </Box>
  ),
};

/* ─── Interactive ─── */
const InteractiveStory = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    const mapped: UploadFile[] = newFiles.map((f) => ({
      id: `${f.name}-${Date.now()}`,
      name: f.name,
      status: "idle",
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const handleRemove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <Box sx={{ width: "400px" }}>
      <Upload
        variant="drag"
        hint="Supports: PNG, JPG, PDF up to 10MB"
        files={files}
        onFilesChange={handleFilesChange}
        onFileRemove={handleRemove}
      />
    </Box>
  );
};

export const Interactive: Story = {
  name: "Interactive",
  render: () => <InteractiveStory />,
};
