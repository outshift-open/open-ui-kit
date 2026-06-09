/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack } from "@mui/material";
import { formatNodeValue } from "@/components/nested-menu";
import { GeneralSize } from "@/common";
import TagLabel from "./tag-label";
import { OverflowTooltip } from "@/components/overflow-tooltip";
import { Tag } from "@/components/tags/tag";
import { Tooltip } from "@/components/tooltip";
import { RemainingTags } from "./remaining-tags";
import type { AugmentedSelectNodeType } from "@/components/nested-menu";
import type { TagsProps } from "../types";

export const Tags = ({
  customizeLabel,
  customizeTooltip,
  handleDelete,
  items = [],
  maxTooltipTags = 100,
  shouldTruncate = false,
  showOnlyFirst = true,
  size = GeneralSize.Small,
}: TagsProps) => {
  if (items.length === 0) {
    return null;
  }

  if (showOnlyFirst) {
    const firstNode = items[0] as AugmentedSelectNodeType;
    const firstNodeLabel = customizeLabel
      ? customizeLabel(firstNode)
      : formatNodeValue(firstNode);
    const firstChip = (
      <Tag
        key={items[0]?.nodeKey ?? "first-tag"}
        {...(handleDelete && {
          onDelete: (event) => handleDelete(event, items[0], 0),
        })}
        size={size}
        sx={{
          maxWidth: shouldTruncate ? "169px" : "100%",
        }}
        disabled={false}
      >
        <OverflowTooltip
          value={
            customizeTooltip ? customizeTooltip(firstNode) : firstNodeLabel
          }
          slotProps={{
            popper: {
              sx: {
                wordBreak: "break-word",
              },
            },
          }}
        >
          {firstNodeLabel}
        </OverflowTooltip>
      </Tag>
    );

    return (
      <Stack direction="row" gap="8px" alignItems="center">
        {firstChip}
        {items.length > 1 && (
          <Tooltip
            title={
              <span>
                {items
                  .slice(1, maxTooltipTags)
                  .map((node) => formatNodeValue(node))
                  .join(", ")}
                {items.length - 1 > maxTooltipTags && ", and more..."}
              </span>
            }
          >
            <Box component="span" sx={{ display: "inline-flex" }}>
              <Tag
                size={size}
                sx={{
                  border: "none",
                  backgroundColor: "transparent",
                  "& .MuiChip-label": {
                    paddingLeft: "0",
                  },
                }}
              >
                +{items.length - 1}
              </Tag>
            </Box>
          </Tooltip>
        )}
      </Stack>
    );
  }

  const remainingTags: AugmentedSelectNodeType[] = [];

  return (
    <Stack
      direction="row"
      gap="8px"
      alignItems="center"
      sx={{ flexWrap: "wrap", width: "100%" }}
    >
      {items.map((node: AugmentedSelectNodeType, idx) => {
        if (idx >= maxTooltipTags) {
          remainingTags.push(node);
          return null;
        }

        const nodeLabel = customizeLabel
          ? customizeLabel(node)
          : formatNodeValue(node);

        return (
          <Tag
            {...(handleDelete && {
              onDelete: (event) => handleDelete(event, node, idx),
            })}
            key={node.nodeKey ?? `tag-${idx}`}
            size={size}
            sx={{
              maxWidth: shouldTruncate ? "169px" : "100%",
            }}
          >
            <TagLabel
              node={node}
              nodeLabel={nodeLabel}
              customizeTooltip={customizeTooltip}
            />
          </Tag>
        );
      })}
      {remainingTags.length > 0 && <RemainingTags tags={remainingTags} />}
    </Stack>
  );
};
