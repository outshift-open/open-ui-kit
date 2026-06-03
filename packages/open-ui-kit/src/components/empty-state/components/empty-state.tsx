/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";
import { Button } from "@/components/button";
import { Stack, Typography, useTheme } from "@mui/material";
import {
  DefaultDescription,
  Illustrations,
  directionToFlexAlignmentMapping,
  sizeToIllustrationSizeMapping,
  sizeToMainFlexGapSizeMapping,
  sizeToSecondaryFlexGapSizeMapping,
  getTextMaxWidth,
  sizeToTitleVariantMapping,
  sizeToTitleLineHeightMapping,
  sizeToDescriptionVariantMapping,
  directionToTextAlignmentMapping,
  sizeToActionSizeMapping,
  sizeToContainerPaddingMapping,
  sizeToRowGapMapping,
} from "../styles";
import type { EmptyStateProps } from "../types";

export const EmptyState = ({
  variant = "info",
  direction = "column",
  size = GeneralSize.Large,
  title = "",
  description = DefaultDescription,
  actionCallback,
  actionTitle,
  actionButtonProps,
  secondaryActionCallback,
  secondaryActionTitle,
  secondaryActionButtonProps,
  containerProps,
}: EmptyStateProps) => {
  const theme = useTheme();
  const Illustration = Illustrations[variant];
  const showAction = Boolean(
    actionCallback && actionTitle && size !== GeneralSize.Small,
  );
  const showSecondaryAction = Boolean(
    secondaryActionCallback &&
      secondaryActionTitle &&
      size !== GeneralSize.Small,
  );

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
        {
          flexWrap: direction === "row" ? "wrap" : "nowrap",
          maxWidth: "100%",
          padding: sizeToContainerPaddingMapping[size],
        },
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
        sx={{ maxWidth: "100%", minWidth: 0 }}
      >
        <Stack
          direction={"column"}
          gap={sizeToSecondaryFlexGapSizeMapping[size]}
          alignItems={directionToFlexAlignmentMapping[direction]}
          justifyContent={"center"}
          sx={{
            maxWidth: getTextMaxWidth(size, direction),
            minWidth: 0,
            width: "100%",
          }}
        >
          {title && size !== GeneralSize.Small && (
            <Typography
              variant={sizeToTitleVariantMapping[size]}
              sx={{
                color: theme.palette.vars.baseTextStrong,
                textAlign: directionToTextAlignmentMapping[direction],
                lineHeight: sizeToTitleLineHeightMapping[size],
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
        {(showAction || showSecondaryAction) && (
          <Stack
            direction="row"
            gap="16px"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            {showAction && (
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
            {showSecondaryAction && (
              <Button
                variant="secondary"
                size={sizeToActionSizeMapping[size]}
                onClick={secondaryActionCallback}
                {...secondaryActionButtonProps}
                sx={[
                  {},
                  ...(Array.isArray(secondaryActionButtonProps?.sx)
                    ? secondaryActionButtonProps.sx
                    : secondaryActionButtonProps?.sx
                      ? [secondaryActionButtonProps.sx]
                      : []),
                ]}
              >
                {secondaryActionTitle}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
