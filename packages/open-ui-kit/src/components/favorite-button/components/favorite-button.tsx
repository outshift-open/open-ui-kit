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
