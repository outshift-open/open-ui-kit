/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type UploadFileStatus = "idle" | "uploading" | "error";

export interface UploadFile {
  /** Unique identifier for the file entry. */
  id: string;
  /** Display name of the file. */
  name: string;
  /** Optional thumbnail URL shown in image-oriented file rows. */
  thumbnailSrc?: string;
  /** Upload progress 0–100, shown when status is "uploading". */
  progress?: number;
  /** Current status of the file. */
  status?: UploadFileStatus;
  /** Error message shown below the item when status is "error". */
  errorMessage?: string;
}

export interface UploadProps {
  /** Trigger variant: drag-and-drop zone or a button. */
  variant?: "drag" | "button";
  /** Size of the drag zone and file list rows. */
  size?: "md" | "sm";
  /** Primary label inside the drag zone or button label. */
  label?: string;
  /** Supplemental hint text shown below the label in drag mode. */
  hint?: string;
  /** List of files currently managed by the component. */
  files?: UploadFile[];
  /** Called when the user selects or drops new files. */
  onFilesChange?: (files: File[]) => void;
  /** Called when the user clicks the remove button on a file item. */
  onFileRemove?: (id: string) => void;
  /** Whether the upload trigger is disabled. */
  disabled?: boolean;
  /** Whether multiple files can be selected at once. */
  multiple?: boolean;
  /** Accepted file types, forwarded to the hidden input (e.g. "image/*,.pdf"). */
  accept?: string;
  /** Custom content to render inside the drag zone instead of the default icon + text. */
  children?: ReactNode;
  /** MUI sx overrides for the root container. */
  sx?: SxProps<Theme>;
}
