/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { UploadFile } from "../types";

interface UploadFileItemProps {
  file: UploadFile;
  onRemove: (id: string) => void;
}

export const UploadFileItem = ({ file, onRemove }: UploadFileItemProps) => {
  const isError = file.status === "error";
  const isUploading = file.status === "uploading";

  return (
    <Box
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.vars.baseBorderDefault}`,
        borderBottom: `1px solid ${theme.palette.vars.baseBorderDefault}`,
        padding: "4px 0px",
        marginBottom: "-1px",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "4px 8px 4px 4px",
          gap: "24px",
          borderRadius: "6px",
          backgroundColor: isError
            ? theme.palette.vars.negativeBackgroundWeak
            : "transparent",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "4px",
            gap: "4px",
            flex: 1,
            minWidth: 0,
          }}
        >
          {isError ? (
            <ErrorOutlineIcon
              sx={(theme) => ({
                width: "16px",
                height: "16px",
                color: theme.palette.vars.negativeIconDefault,
                flexShrink: 0,
              })}
            />
          ) : (
            <AttachFileIcon
              sx={(theme) => ({
                width: "16px",
                height: "16px",
                color: theme.palette.vars.baseTextWeak,
                flexShrink: 0,
              })}
            />
          )}
          <Typography
            variant="body2"
            noWrap
            sx={(theme) => ({
              color: theme.palette.vars.baseTextDefault,
              flex: 1,
              minWidth: 0,
            })}
          >
            {file.name}
          </Typography>
        </Box>

        <IconButton
          size="small"
          onClick={() => onRemove(file.id)}
          sx={(theme) => ({
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            padding: 0,
            flexShrink: 0,
            color: theme.palette.vars.baseTextWeak,
            "&:hover": {
              backgroundColor: theme.palette.vars.baseBackgroundHover,
            },
          })}
          aria-label={`Remove ${file.name}`}
        >
          <CloseIcon sx={{ width: "16px", height: "16px" }} />
        </IconButton>
      </Box>

      {isUploading && typeof file.progress === "number" && (
        <LinearProgress
          variant="determinate"
          value={file.progress}
          sx={(theme) => ({
            height: "2px",
            borderRadius: "1px",
            mt: "2px",
            backgroundColor: theme.palette.vars.baseBorderDefault,
            "& .MuiLinearProgress-bar": {
              backgroundColor:
                theme.palette.vars.interactivePrimaryDefaultDefault,
            },
          })}
        />
      )}

      {isError && file.errorMessage && (
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.vars.negativeTextDefault,
            display: "block",
            mt: "2px",
          })}
        >
          {file.errorMessage}
        </Typography>
      )}
    </Box>
  );
};
