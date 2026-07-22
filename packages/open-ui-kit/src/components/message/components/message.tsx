/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CheckCircleOutline,
  Close,
  ErrorOutline,
  InfoOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { getMessageIconStyles } from "../styles";
import type { MessageProps, MessageType } from "../types";
import {
  StyledMessageAction,
  StyledMessageCloseButton,
  StyledMessageContent,
  StyledMessageRoot,
  StyledMessageText,
  StyledMessageTitle,
  StyledMessageTitleRow,
} from "./elements";

const MessageIcon = ({ type }: { type: MessageType }) => {
  const theme = useTheme();
  const sx = getMessageIconStyles(theme, type);

  if (type === "error") {
    return <ErrorOutline sx={sx} />;
  }

  if (type === "warning") {
    return <WarningAmberOutlined sx={sx} />;
  }

  if (type === "info") {
    return <InfoOutlined sx={sx} />;
  }

  return <CheckCircleOutline sx={sx} />;
};

export const Message = ({
  actionLabel,
  children,
  hideClose = false,
  onActionClick,
  onClose,
  sx,
  title,
  type = "success",
  ...props
}: MessageProps) => {
  const hasTitle = Boolean(title);
  const hasAction = Boolean(actionLabel);

  return (
    <StyledMessageRoot
      messageType={type}
      hasTitle={hasTitle}
      hasAction={hasAction}
      role="status"
      sx={Array.isArray(sx) ? sx : sx ? [sx] : []}
      {...props}
    >
      <MessageIcon type={type} />
      <StyledMessageContent hasTitle={hasTitle} hasAction={hasAction}>
        {title ? (
          <StyledMessageTitleRow messageType={type}>
            <StyledMessageTitle>{title}</StyledMessageTitle>
            {!hideClose && !hasAction ? (
              <StyledMessageCloseButton
                aria-label="Close message"
                onClick={onClose}
              >
                <Close />
              </StyledMessageCloseButton>
            ) : null}
          </StyledMessageTitleRow>
        ) : null}
        <StyledMessageText>{children}</StyledMessageText>
      </StyledMessageContent>
      {actionLabel ? (
        <StyledMessageAction type="button" onClick={onActionClick}>
          {actionLabel}
        </StyledMessageAction>
      ) : null}
      {!hideClose && (!hasTitle || hasAction) ? (
        <StyledMessageCloseButton aria-label="Close message" onClick={onClose}>
          <Close />
        </StyledMessageCloseButton>
      ) : null}
    </StyledMessageRoot>
  );
};
