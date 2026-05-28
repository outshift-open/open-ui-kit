/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";
import { Button } from "@/components/button";
import {
  ButtonProps,
  Stack,
  StackProps,
  Typography,
  useTheme,
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
  sizeToContainerPaddingMapping,
  sizeToRowGapMapping,
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
  const theme = useTheme();
  const Illustration = Illustrations[variant];

  return (
    <Stack
      direction={direction}
      gap={
        direction === "row"
          ? sizeToRowGapMapping[size]
          : sizeToMainFlexGapSizeMapping[size]
      }
      alignItems={"center"}
      justifyContent={"center"}
      {...containerProps}
      sx={[
        { padding: sizeToContainerPaddingMapping[size] },
        ...(Array.isArray(containerProps?.sx)
          ? containerProps.sx
          : containerProps?.sx
            ? [containerProps.sx]
            : []),
      ]}
    >
      <Illustration
        sx={{
          width: sizeToIllustrationSizeMapping[size],
          height: sizeToIllustrationSizeMapping[size],
          flexShrink: 0,
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
            <Typography
              variant={sizeToTitleVariantMapping[size]}
              sx={{
                color: theme.palette.vars.baseTextStrong,
                textAlign: directionToTextAlignmentMapping[direction],
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant={sizeToDescriptionVariantMapping[size]}
              sx={{
                color: theme.palette.vars.baseTextMedium,
                textAlign: directionToTextAlignmentMapping[direction],
              }}
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
            sx={[
              {},
              ...(Array.isArray(actionButtonProps?.sx)
                ? actionButtonProps.sx
                : actionButtonProps?.sx
                  ? [actionButtonProps.sx]
                  : []),
            ]}
          >
            {actionTitle}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
