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
import { StatusBanner } from "../types";
import {
  CheckCircleOutline,
  ErrorOutline,
  InfoOutline,
  WarningAmber,
} from "@mui/icons-material";

const customTextStyle = {
  margin: 0,
  padding: 0,
};

const customIconStyle = {
  margin: 0,
  padding: 0,
};

const getStyleByStatus = (status: StatusBanner, theme: Theme) => {
  switch (status) {
    case "negative":
      return {
        border: `1px solid ${theme.palette.vars.negativeBorderDefault}`,
        background: theme.palette.vars.negativeBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.negativeTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.negativeIconDefault,
        },
      };
    case "warning":
      return {
        border: `1px solid ${theme.palette.vars.severeWarningBorderDefault}`,
        background: theme.palette.vars.severeWarningBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.severeWarningTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.severeWarningIconDefault,
        },
      };
    case "success":
      return {
        border: `1px solid ${theme.palette.vars.successBorderDefault}`,
        background: theme.palette.vars.successBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.successTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.successIconDefault,
        },
      };
    case "info":
      return {
        border: `1px solid ${theme.palette.vars.neutralBorderDefault}`,
        background: theme.palette.vars.neutralBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.neutralTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.neutralIconDefault,
        },
      };
    case "excellent":
      return {
        border: `1px solid ${theme.palette.vars.excellentBorderDefault}`,
        background: theme.palette.vars.excellentBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.excellentTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.excellentIconDefault,
        },
      };
    default:
      return {
        border: `1px solid ${theme.palette.vars.neutralBorderDefault}`,
        background: theme.palette.vars.neutralBackgroundWeak,
        "& .MuiAlert-message": {
          ...customTextStyle,
          color: theme.palette.vars.neutralTextDefault,
        },
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.neutralIconDefault,
        },
      };
  }
};

export const StyledBanner = styled(Alert, {
  shouldForwardProp: (prop) => prop !== "status",
  name: "StyledBanner",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.status && styles.status,
  ],
})<{ status?: StatusBanner }>(({ theme, status }) => ({
  padding: "8px 12px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  borderRadius: 0,
  "& .MuiAlert-action": {
    margin: 0,
    padding: 0,
  },
  ...(status && getStyleByStatus(status, theme)),
}));

export const IconBanner = ({ status }: { status?: StatusBanner }) => {
  switch (status) {
    case "negative":
      return <ErrorOutline />;
    case "warning":
      return <WarningAmber />;
    case "success":
      return <CheckCircleOutline />;
    case "info":
      return <InfoOutline />;
    case "excellent":
      return <InfoOutline />;
    default:
      return <InfoOutline />;
  }
};
