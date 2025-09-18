/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Alert, styled, Theme } from "@mui/material";
import { ToastType } from "../types";
import {
  CheckCircleOutline,
  InfoOutline,
  WarningAmber,
} from "@mui/icons-material";

const customIconStyle = {
  margin: 0,
  padding: 0,
  marginTop: "2px",
};

const getStyleByStatus = (type: ToastType, theme: Theme) => {
  switch (type) {
    case "error":
      return {
        border: `1px solid ${theme.palette.vars.negativeBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.negativeIconDefault,
        },
      };
    case "warning":
      return {
        border: `1px solid ${theme.palette.vars.severeWarningBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.severeWarningIconDefault,
        },
      };
    case "success":
      return {
        border: `1px solid ${theme.palette.vars.successBackgroundDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.successIconDefault,
        },
      };
    case "info":
      return {
        border: `1px solid ${theme.palette.vars.infoBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.infoIconDefault,
        },
      };
    case "default":
      return {};
    default:
      return {};
  }
};

export const StyledToast = styled(Alert, {
  shouldForwardProp: (prop) => prop !== "type",
  name: "StyledToast",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.type && styles.type,
  ],
})<{ type?: ToastType }>(({ theme, type }) => ({
  padding: "12px 16px",
  borderRadius: "4px",
  color: theme.palette.vars.baseTextDefault,
  background: theme.palette.vars.baseBackgroundMedium,
  gap: "12px",
  maxWidth: "390px",
  "& .MuiAlertTitle-root, & .MuiAlert-message": {
    margin: 0,
    padding: 0,
  },
  "& .MuiAlert-action": {
    margin: 0,
    padding: 0,
    marginTop: "-2px",
  },
  ...(type && getStyleByStatus(type, theme)),
}));

export const IconToast = ({ type }: { type?: ToastType }) => {
  switch (type) {
    case "default":
      return null;
    case "warning":
      return <WarningAmber />;
    case "success":
      return <CheckCircleOutline />;
    case "info":
      return <InfoOutline />;
    case "error":
      return <InfoOutline />;
    default:
      return null;
  }
};
