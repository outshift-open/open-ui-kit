/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, styled } from "@mui/material";
import type { BoxProps, IconButtonProps } from "@mui/material";
import type { MessageType } from "../types";
import {
  getMessageActionStyles,
  getMessageCloseStyles,
  getMessageContentStyles,
  getMessageRootStyles,
  getMessageTextStyles,
  getMessageTitleRowStyles,
  getMessageTitleStyles,
} from "../styles";

export const StyledMessageRoot: React.ComponentType<
  BoxProps & { messageType: MessageType; hasTitle: boolean; hasAction: boolean }
> = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "messageType" && prop !== "hasTitle" && prop !== "hasAction",
})<{
  messageType: MessageType;
  hasTitle: boolean;
  hasAction: boolean;
}>(({ theme, messageType, hasTitle, hasAction }) =>
  getMessageRootStyles(theme, messageType, hasTitle, hasAction),
);

export const StyledMessageContent: React.ComponentType<
  BoxProps & { hasTitle: boolean; hasAction: boolean }
> = styled(Box, {
  shouldForwardProp: (prop) => prop !== "hasTitle" && prop !== "hasAction",
})<{ hasTitle: boolean; hasAction: boolean }>(({ hasTitle, hasAction }) =>
  getMessageContentStyles(hasTitle, hasAction),
);

export const StyledMessageTitle: React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement>
> = styled("p")(({ theme }) => getMessageTitleStyles(theme));

export const StyledMessageTitleRow: React.ComponentType<
  BoxProps & { messageType: MessageType }
> = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(() => getMessageTitleRowStyles());

export const StyledMessageText: React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement>
> = styled("p")(({ theme }) => getMessageTextStyles(theme));

export const StyledMessageAction: React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = styled("button")(({ theme }) => getMessageActionStyles(theme));

export const StyledMessageCloseButton: React.ComponentType<IconButtonProps> =
  styled(IconButton)(({ theme }) => getMessageCloseStyles(theme));
