/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { UploadProps } from "../types";

type UploadSize = NonNullable<UploadProps["size"]>;

export const getUploadRootStyles = (): CSSObject => ({
  width: "100%",
});

export const getUploadTriggerStyles = (
  theme: Theme,
  size: UploadSize,
  active: boolean,
): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: size === "sm" ? "36px 24px" : "48px 24px",
  gap: size === "sm" ? "4px" : "8px",
  width: "100%",
  minHeight: size === "sm" ? "132px" : "166px",
  borderRadius: "8px",
  border: `2px dashed ${
    active
      ? theme.palette.vars.interactivePrimaryDefaultActive
      : theme.palette.vars.controlBorderDefault
  }`,
  backgroundColor: active
    ? theme.palette.vars.interactivePrimaryWeakDefault
    : theme.palette.vars.controlBackgroundDefault,
  cursor: "pointer",
  outline: "none",
  transition: "border-color 0.15s, background-color 0.15s",
  "&:hover:not([aria-disabled=true])": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultActive,
    backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  },
  "&:focus-visible": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultActive,
    backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  },
  "&[aria-disabled=true]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
});

export const getUploadTriggerIconStyles = (
  theme: Theme,
  size: UploadSize,
  active: boolean,
): CSSObject => ({
  width: size === "sm" ? "16px" : "20px",
  height: size === "sm" ? "16px" : "20px",
  color: active
    ? theme.palette.vars.interactivePrimaryDefaultActive
    : theme.palette.vars.baseTextDefault,
});

export const getUploadLabelStyles = (
  theme: Theme,
  size: UploadSize,
  active: boolean,
): CSSObject => ({
  fontWeight: 600,
  fontSize: size === "sm" ? "12px" : "14px",
  lineHeight: size === "sm" ? "18px" : "20px",
  textAlign: "center",
  color: active
    ? theme.palette.vars.interactivePrimaryDefaultActive
    : theme.palette.vars.baseTextDefault,
});

export const getUploadHintStyles = (theme: Theme): CSSObject => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "center",
  color: theme.palette.vars.baseTextMedium,
});

export const getUploadFileListStyles = (): CSSObject => ({
  marginTop: "12px",
});

export const getUploadFileListItemStyles = (
  theme: Theme,
  size: UploadSize,
  hasThumbnail: boolean,
): CSSObject => ({
  borderTop: `1px solid ${theme.palette.vars.interactiveSecondaryWeakHover}`,
  borderBottom: `1px solid ${theme.palette.vars.interactiveSecondaryWeakHover}`,
  padding: hasThumbnail ? "0px" : "4px 0px",
  marginBottom: hasThumbnail ? "0px" : "-1px",
  minHeight: hasThumbnail ? (size === "sm" ? "40px" : "64px") : undefined,
});

export const getUploadFileRowStyles = (
  theme: Theme,
  size: UploadSize,
  status: "idle" | "uploading" | "error",
  hasThumbnail: boolean,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: hasThumbnail
    ? size === "sm"
      ? "4px"
      : "8px"
    : size === "sm"
      ? "0px 4px"
      : "4px 8px 4px 4px",
  gap: "24px",
  minHeight: hasThumbnail
    ? size === "sm"
      ? "40px"
      : "64px"
    : size === "sm"
      ? "24px"
      : "36px",
  borderRadius: size === "sm" ? "4px" : "6px",
  backgroundColor:
    status === "error" ? theme.palette.vars.negativeBackgroundWeak : undefined,
});

export const getUploadFileContentStyles = (
  size: UploadSize,
  hasThumbnail: boolean,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: hasThumbnail ? "0px" : size === "sm" ? "4px 0px" : "4px",
  gap: hasThumbnail ? (size === "sm" ? "8px" : "16px") : "4px",
  flex: 1,
  minWidth: 0,
});

export const getUploadThumbnailStyles = (
  theme: Theme,
  size: UploadSize,
  status: "idle" | "uploading" | "error",
): CSSObject => ({
  width: size === "sm" ? "32px" : "48px",
  height: size === "sm" ? "32px" : "48px",
  borderRadius: "2px",
  flexShrink: 0,
  objectFit: "cover",
  backgroundColor:
    status === "error"
      ? theme.palette.vars.negativeBackgroundDisabled
      : theme.palette.vars.controlBackgroundWeak,
});

export const getUploadAttachmentIconStyles = (
  theme: Theme,
  status: "idle" | "uploading" | "error",
): CSSObject => ({
  width: "16px",
  height: "16px",
  color:
    status === "error"
      ? theme.palette.vars.negativeIconDefault
      : status === "uploading"
        ? theme.palette.vars.baseTextDisabled
        : theme.palette.vars.controlIconWeak,
  flexShrink: 0,
});

export const getUploadFileNameStyles = (
  theme: Theme,
  size: UploadSize,
  status: "idle" | "uploading" | "error",
  hasThumbnail: boolean,
): CSSObject => ({
  color:
    status === "uploading"
      ? theme.palette.vars.baseTextDisabled
      : theme.palette.vars.baseTextDefault,
  flex: 1,
  minWidth: 0,
  fontSize: size === "sm" && !hasThumbnail ? "12px" : "14px",
  lineHeight: size === "sm" && !hasThumbnail ? "16px" : "20px",
  letterSpacing: size === "sm" && !hasThumbnail ? "0.4px" : "0.25px",
});

export const getUploadRemoveButtonStyles = (theme: Theme): CSSObject => ({
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  padding: 0,
  flexShrink: 0,
  color: theme.palette.vars.controlIconMedium,
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
});

export const getUploadProgressTrackStyles = (theme: Theme): CSSObject => ({
  width: "92px",
  height: "8px",
  borderRadius: "100px",
  flexShrink: 0,
  backgroundColor: theme.palette.vars.baseBorderDefault,
  overflow: "hidden",
});

export const getUploadProgressFillStyles = (
  theme: Theme,
  progress: number,
): CSSObject => ({
  width: `${Math.max(0, Math.min(100, progress))}%`,
  height: "100%",
  borderRadius: "100px",
  backgroundColor: theme.palette.vars.accentADefault,
});

export const getUploadErrorMessageStyles = (theme: Theme): CSSObject => ({
  color: theme.palette.vars.negativeTextDefault,
  display: "block",
  marginTop: "2px",
  fontSize: "12px",
  lineHeight: "18px",
});
