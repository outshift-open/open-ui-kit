/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Children, isValidElement } from "react";
import type { ButtonProps } from "../types";
import { StyledButton } from "./elements";

const hasSingleElementChild = (children: ButtonProps["children"]) => {
  try {
    return isValidElement(Children.only(children));
  } catch {
    return false;
  }
};

/** Open UI Kit button wrapper with tokenized variants, sizes, icon spacing, and states. */
export const Button = ({
  children,
  className,
  disableRipple = true,
  endIcon,
  startIcon,
  ...props
}: ButtonProps) => {
  const hasIcon = Boolean(startIcon || endIcon);
  const isIconOnly = !hasIcon && hasSingleElementChild(children);
  const buttonClassName = [
    className,
    hasIcon ? "OuiButton-hasIcon" : null,
    isIconOnly ? "OuiButton-iconOnly" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <StyledButton
      className={buttonClassName || undefined}
      disableRipple={disableRipple}
      endIcon={endIcon}
      startIcon={startIcon}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
