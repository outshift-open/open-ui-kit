/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Children, isValidElement } from "react";
import type { ButtonProps } from "../types";
import { StyledButton } from "./elements";

const getSingleElementChild = (children: ButtonProps["children"]) => {
  try {
    const child = Children.only(children);
    return isValidElement(child) ? child : null;
  } catch {
    return null;
  }
};

const isIconOnlyChild = (children: ButtonProps["children"]) => {
  const child = getSingleElementChild(children);

  if (!child) {
    return false;
  }

  const type = child.type;

  if (typeof type === "string") {
    return type === "svg" || type === "img";
  }

  const componentType = type as {
    displayName?: string;
    muiName?: string;
    name?: string;
  };
  const componentName =
    componentType.muiName ?? componentType.displayName ?? componentType.name;

  if (componentName === "SvgIcon" || componentName?.endsWith("Icon")) {
    return true;
  }

  return child.props.children == null;
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
  const isIconOnly = !hasIcon && isIconOnlyChild(children);
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
