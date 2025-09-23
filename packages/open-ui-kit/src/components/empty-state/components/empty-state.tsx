/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";
import {
  Button,
  ButtonProps,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import {
  DefaultDescription,
  Direction,
  Illustrations,
  Variant,
  directionToFlexAlignmentMapping,
  sizeToIllustrationSizeMapping,
  sizeToMainFlexGapSizeMapping,
  sizeToSecondaryFlexGapSizeMapping,
  directionToTextMaxWidthMapping,
  sizeToTitleVariantMapping,
  sizeToDescriptionVariantMapping,
  directionToTextAlignmentMapping,
  sizeToActionSizeMapping,
} from "../helpers/constants";

export interface EmptyStateProps {
  variant?: Variant;
  direction?: Direction;
  size?: GeneralSize;
  title?: string;
  description?: string;
  actionCallback?: () => void;
  actionTitle?: string;
  actionButtonProps?: ButtonProps;
  containerProps?: StackProps;
}

export const EmptyState = ({
  variant = "info",
  direction = "column",
  size = GeneralSize.Large,
  title = "",
  description = DefaultDescription,
  actionCallback,
  actionTitle,
  actionButtonProps,
  containerProps,
}: EmptyStateProps) => {
  const Illustration = Illustrations[variant];

  return (
    <Stack
      direction={direction}
      gap={sizeToMainFlexGapSizeMapping[size]}
      alignItems={"center"}
      justifyContent={"center"}
      {...containerProps}
    >
      <Illustration
        sx={{
          width: sizeToIllustrationSizeMapping[size],
          height: sizeToIllustrationSizeMapping[size],
        }}
      />
      <Stack
        direction={"column"}
        gap={"16px"}
        alignItems={directionToFlexAlignmentMapping[direction]}
        justifyContent={"center"}
      >
        <Stack
          direction={"column"}
          gap={sizeToSecondaryFlexGapSizeMapping[size]}
          alignItems={directionToFlexAlignmentMapping[direction]}
          justifyContent={"center"}
          sx={{ maxWidth: directionToTextMaxWidthMapping[direction] }}
        >
          {title && size !== GeneralSize.Small && (
            <Typography variant={sizeToTitleVariantMapping[size]}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant={sizeToDescriptionVariantMapping[size]}
              sx={{ textAlign: directionToTextAlignmentMapping[direction] }}
            >
              {description}
            </Typography>
          )}
        </Stack>
        {actionCallback && actionTitle && size !== GeneralSize.Small && (
          <Button
            variant="primary"
            size={sizeToActionSizeMapping[size]}
            onClick={actionCallback}
            {...actionButtonProps}
          >
            {actionTitle}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
