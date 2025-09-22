/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Button } from "@mui/material";
import { styledButton, styledStarIcon } from "../styles/styles";
import { ButtonProps } from "@mui/material/Button/Button";
import { Star, StarOutline } from "@/custom-icons";
import { Tooltip, TooltipProps, TooltipSize } from "@/components";

export type FavoriteButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isChecked?: boolean;
  tooltipProps?: Partial<TooltipProps>;
  buttonProps?: ButtonProps;
  withBackground?: boolean;
};

export const FavoriteButton = ({
  onClick,
  isChecked = false,
  tooltipProps,
  buttonProps,
  withBackground = true,
}: FavoriteButtonProps) => {
  const toolTipTitle = isChecked ? "Remove from favorites" : "Add to favorites";

  return (
    <Tooltip
      placement={"top"}
      title={toolTipTitle}
      size={TooltipSize.Large}
      {...tooltipProps}
    >
      <span>
        <Button
          disableRipple
          variant={withBackground ? "secondary" : "tertariary"}
          onClick={onClick}
          sx={styledButton}
          {...buttonProps}
        >
          {isChecked ? (
            <Star sx={styledStarIcon} />
          ) : (
            <StarOutline sx={styledStarIcon} />
          )}
        </Button>
      </span>
    </Tooltip>
  );
};
