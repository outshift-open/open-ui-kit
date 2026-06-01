/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, styled } from "@mui/material";
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

export const StyledMessageRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "messageType" && prop !== "hasTitle" && prop !== "hasAction",
})<{
  messageType: MessageType;
  hasTitle: boolean;
  hasAction: boolean;
}>(({ theme, messageType, hasTitle, hasAction }) =>
  getMessageRootStyles(theme, messageType, hasTitle, hasAction),
);

export const StyledMessageContent = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "messageType" && prop !== "hasTitle" && prop !== "hasAction",
})<{ messageType: MessageType; hasTitle: boolean; hasAction: boolean }>(
  ({ messageType, hasTitle, hasAction }) =>
    getMessageContentStyles(messageType, hasTitle, hasAction),
);

export const StyledMessageTitle = styled("p")(({ theme }) =>
  getMessageTitleStyles(theme),
);

export const StyledMessageTitleRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) =>
  getMessageTitleRowStyles(messageType),
);

export const StyledMessageText = styled("p")(({ theme }) =>
  getMessageTextStyles(theme),
);

export const StyledMessageAction = styled("button")(({ theme }) =>
  getMessageActionStyles(theme),
);

export const StyledMessageCloseButton = styled(IconButton)(({ theme }) =>
  getMessageCloseStyles(theme),
);
