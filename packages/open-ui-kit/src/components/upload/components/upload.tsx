/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, Typography } from "@mui/material";
import UploadSimpleIcon from "@mui/icons-material/FileUpload";
import { useRef, useState } from "react";
import { Button } from "@/components/button";
import { UploadProps } from "../types";
import { UploadFileItem } from "./upload-file-item";

export const Upload = ({
  variant = "drag",
  size = "md",
  label,
  hint,
  files = [],
  onFilesChange,
  onFileRemove,
  disabled = false,
  multiple = true,
  accept,
  children,
  sx,
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || disabled) return;
    onFilesChange?.(Array.from(fileList));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const triggerInput = () => {
    if (!disabled) inputRef.current?.click();
  };

  const defaultDragLabel = label ?? "Click or drag file to this area to upload";
  const defaultButtonLabel = label ?? "Upload";

  return (
    <Stack
      spacing={0}
      sx={[{ width: "100%" }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        style={{ display: "none" }}
        onChange={handleInputChange}
        aria-hidden
      />

      {variant === "drag" ? (
        <Box
          onClick={triggerInput}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") triggerInput();
          }}
          aria-disabled={disabled}
          sx={[
            (theme) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: size === "sm" ? "36px 24px" : "48px 24px",
              gap: size === "sm" ? "4px" : "8px",
              borderRadius: "8px",
              border: `2px dashed ${
                isDragOver
                  ? theme.palette.vars.interactivePrimaryDefaultDefault
                  : theme.palette.vars.controlBorderDefault
              }`,
              backgroundColor: isDragOver
                ? theme.palette.vars.interactivePrimaryWeakDefault
                : theme.palette.vars.controlBackgroundDefault,
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.5 : 1,
              outline: "none",
              transition: "border-color 0.15s, background-color 0.15s",
              "&:hover:not([aria-disabled=true])": {
                borderColor:
                  theme.palette.vars.interactivePrimaryDefaultDefault,
                backgroundColor:
                  theme.palette.vars.interactivePrimaryWeakDefault,
              },
              "&:focus-visible": {
                borderColor:
                  theme.palette.vars.interactivePrimaryDefaultDefault,
              },
            }),
          ]}
        >
          {children ?? (
            <>
              <UploadSimpleIcon
                sx={(theme) => ({
                  width: size === "sm" ? "16px" : "20px",
                  height: size === "sm" ? "16px" : "20px",
                  color: isDragOver
                    ? theme.palette.vars.interactivePrimaryDefaultDefault
                    : theme.palette.vars.baseTextDefault,
                })}
              />
              <Stack spacing={0} alignItems="center">
                <Typography
                  sx={(theme) => ({
                    fontWeight: 600,
                    fontSize: size === "sm" ? "12px" : "14px",
                    lineHeight: size === "sm" ? "18px" : "20px",
                    textAlign: "center",
                    color: isDragOver
                      ? theme.palette.vars.interactivePrimaryDefaultDefault
                      : theme.palette.vars.baseTextDefault,
                  })}
                >
                  {defaultDragLabel}
                </Typography>
                {hint && (
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                      textAlign: "center",
                      color: theme.palette.vars.baseTextMedium,
                    })}
                  >
                    {hint}
                  </Typography>
                )}
              </Stack>
            </>
          )}
        </Box>
      ) : (
        <Button
          variant="primary"
          size="small"
          startIcon={<UploadSimpleIcon />}
          disabled={disabled}
          onClick={triggerInput}
        >
          {defaultButtonLabel}
        </Button>
      )}

      {files.length > 0 && (
        <Stack spacing={0} sx={{ mt: "12px" }}>
          {files.map((file) => (
            <UploadFileItem
              key={file.id}
              file={file}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onRemove={onFileRemove ?? (() => {})}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};
