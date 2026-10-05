/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, Typography } from "@mui/material";
import { GeneralSize } from "@/common";
import { Tag } from "@/components/tags";
import { Tooltip } from "@/components/tooltip";
import type { KeyValuePairTagsProps } from "../types";
import { getKeyValueTagCountStyles, getKeyValueTagsStyles } from "../styles";

/**
 * Renders the `Tags` value state of a key value pair: wrapping tags followed by a
 * `+N` counter once the list exceeds `maxVisible`.
 */
export const KeyValuePairTags = ({
  tags,
  maxVisible = 4,
  size = GeneralSize.Medium,
  maxWidth = "306px",
  showOverflowTooltip = true,
  sx,
}: KeyValuePairTagsProps) => {
  const visibleCount = Math.max(0, maxVisible);
  const visibleTags = tags.slice(0, visibleCount);
  const hiddenTags = tags.slice(visibleCount);

  const counter = hiddenTags.length ? (
    <Tag size={size} sx={(theme) => getKeyValueTagCountStyles(theme)}>
      {`+${hiddenTags.length}`}
    </Tag>
  ) : null;

  return (
    <Box
      sx={[
        getKeyValueTagsStyles(maxWidth),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {visibleTags.map((tag, index) => (
        <Tag key={index} size={size}>
          {tag}
        </Tag>
      ))}
      {counter && showOverflowTooltip ? (
        <Tooltip
          title={
            <Stack component="span" gap={0.5}>
              {hiddenTags.map((tag, index) => (
                <Typography key={index} component="span" variant="caption">
                  {tag}
                </Typography>
              ))}
            </Stack>
          }
        >
          <Box component="span" sx={{ display: "inline-flex" }}>
            {counter}
          </Box>
        </Tooltip>
      ) : (
        counter
      )}
    </Box>
  );
};
