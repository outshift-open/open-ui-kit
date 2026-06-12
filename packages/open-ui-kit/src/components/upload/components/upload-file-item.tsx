/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Spinner } from "@/components/spinner";
import {
  getUploadAttachmentIconStyles,
  getUploadErrorMessageStyles,
  getUploadFileContentStyles,
  getUploadFileListItemStyles,
  getUploadFileNameStyles,
  getUploadFileRowStyles,
  getUploadProgressFillStyles,
  getUploadProgressTrackStyles,
  getUploadRemoveButtonStyles,
  getUploadThumbnailStyles,
} from "../styles";
import { UploadFile, UploadProps } from "../types";

interface UploadFileItemProps {
  file: UploadFile;
  size: NonNullable<UploadProps["size"]>;
  onRemove: (id: string) => void;
}

export const UploadFileItem = ({
  file,
  size,
  onRemove,
}: UploadFileItemProps) => {
  const status = file.status ?? "idle";
  const isError = status === "error";
  const isUploading = status === "uploading";
  const hasThumbnail = Boolean(file.thumbnailSrc);

  return (
    <Box
      data-slot="upload-file-item"
      sx={(theme) => getUploadFileListItemStyles(theme, size, hasThumbnail)}
    >
      <Box
        data-slot="upload-file-row"
        sx={(theme) =>
          getUploadFileRowStyles(theme, size, status, hasThumbnail)
        }
      >
        <Box sx={getUploadFileContentStyles(size, hasThumbnail)}>
          {hasThumbnail ? (
            <Box
              component="img"
              src={file.thumbnailSrc}
              alt=""
              aria-hidden
              sx={(theme) => getUploadThumbnailStyles(theme, size, status)}
            />
          ) : (
            <>
              {isError ? (
                <ErrorOutlineIcon
                  sx={(theme) => getUploadAttachmentIconStyles(theme, status)}
                />
              ) : (
                <AttachFileIcon
                  sx={(theme) => getUploadAttachmentIconStyles(theme, status)}
                />
              )}
            </>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: hasThumbnail && isError ? "4px" : 0,
              minWidth: 0,
              flex: 1,
            }}
          >
            {hasThumbnail && isError && (
              <ErrorOutlineIcon
                sx={(theme) => getUploadAttachmentIconStyles(theme, status)}
              />
            )}
            <Typography
              noWrap
              sx={(theme) =>
                getUploadFileNameStyles(theme, size, status, hasThumbnail)
              }
            >
              {file.name}
            </Typography>
          </Box>
        </Box>

        {isUploading && typeof file.progress === "number" ? (
          <Box
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={file.progress}
            aria-label={`${file.name} upload progress`}
            sx={(theme) => getUploadProgressTrackStyles(theme)}
          >
            <Box
              sx={(theme) =>
                getUploadProgressFillStyles(theme, file.progress ?? 0)
              }
            />
          </Box>
        ) : isUploading ? (
          <Spinner
            color="secondary"
            size={20}
            aria-label={`${file.name} uploading`}
          />
        ) : (
          <IconButton
            size="small"
            onClick={() => onRemove(file.id)}
            sx={(theme) => getUploadRemoveButtonStyles(theme)}
            aria-label={`Remove ${file.name}`}
          >
            <CloseIcon sx={{ width: "16px", height: "16px" }} />
          </IconButton>
        )}
      </Box>

      {isError && file.errorMessage && (
        <Typography sx={(theme) => getUploadErrorMessageStyles(theme)}>
          {file.errorMessage}
        </Typography>
      )}
    </Box>
  );
};
