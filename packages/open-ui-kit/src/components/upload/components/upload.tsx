/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, Typography } from "@mui/material";
import UploadSimpleIcon from "@mui/icons-material/FileUpload";
import { useRef, useState } from "react";
import { Button } from "@/components/button";
import {
  getUploadFileListStyles,
  getUploadHintStyles,
  getUploadLabelStyles,
  getUploadRootStyles,
  getUploadTriggerIconStyles,
  getUploadTriggerStyles,
} from "../styles";
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
      sx={[getUploadRootStyles(), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
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
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              triggerInput();
            }
          }}
          aria-disabled={disabled}
          sx={[(theme) => getUploadTriggerStyles(theme, size, isDragOver)]}
        >
          {children ?? (
            <>
              <UploadSimpleIcon
                sx={(theme) =>
                  getUploadTriggerIconStyles(theme, size, isDragOver)
                }
              />
              <Stack spacing={0} alignItems="center">
                <Typography
                  sx={(theme) => getUploadLabelStyles(theme, size, isDragOver)}
                >
                  {defaultDragLabel}
                </Typography>
                {hint && (
                  <Typography sx={(theme) => getUploadHintStyles(theme)}>
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
        <Stack spacing={0} sx={getUploadFileListStyles()}>
          {files.map((file) => (
            <UploadFileItem
              key={file.id}
              file={file}
              size={size}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onRemove={onFileRemove ?? (() => {})}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};
