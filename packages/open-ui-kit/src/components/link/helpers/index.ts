/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSProperties } from "react";
import { LinkType } from "../types";
import { Theme } from "@mui/material";

export const getLinkStyle = (
  color: string,
  disabled: boolean,
  linkType: LinkType,
  ellipsis: boolean,
) => {
  const pointerEventValue: CSSProperties["pointerEvents"] = disabled
    ? "none"
    : "auto";

  return {
    color: color,
    width: ellipsis ? "100%" : "fit-content",
    pointerEvents: pointerEventValue,
    display: "inline-flex",
    justifyContent: "center",
    textDecoration: disabled
      ? "none"
      : linkType === LinkType.UnderlineRegular
        ? "underline"
        : "initial", // on hover
  };
};

export const getLinkColors = (theme: Theme) => ({
  primary: {
    default: theme.palette.vars?.interactivePrimaryDefaultDefault,
    hover: theme.palette.vars?.interactivePrimaryDefaultHover,
    pressed: theme.palette.vars?.interactivePrimaryDefaultActive,
    disabled: theme.palette.vars?.interactivePrimaryDefaultDisabled,
  },
  secondary: {
    default: theme.palette.vars?.interactiveSecondaryDefaultDefault,
    hover: theme.palette.vars?.interactiveSecondaryDefaultHover,
    pressed: theme.palette.vars?.interactiveSecondaryDefaultActive,
    disabled: theme.palette.vars?.interactiveSecondaryDefaultDisabled,
  },
});
