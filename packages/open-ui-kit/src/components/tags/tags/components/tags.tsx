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

import { Stack } from "@mui/material";
import { AugmentedSelectNodeType, SelectNodeType } from "@/types";
import { formatNodeValue, GeneralSize } from "@/common";
import TagLabel from "./tag-label";
import { OverflowTooltip, Tag, Tooltip } from "@/components";
import { RemainingTags } from "./remaining-tags";

interface SkillTagsProps {
  customizeLabel?: (node: AugmentedSelectNodeType | SelectNodeType) => string;
  customizeTooltip?: (
    node: AugmentedSelectNodeType | SelectNodeType,
  ) => React.ReactNode;
  handleDelete?: (
    event: React.MouseEvent<HTMLElement>,
    node: AugmentedSelectNodeType | SelectNodeType,
    idx: number,
  ) => void;
  items: AugmentedSelectNodeType[] | SelectNodeType[];
  maxTooltipTags?: number;
  shouldTruncate?: boolean;
  showOnlyFirst?: boolean;
  size?: GeneralSize;
}

export const Tags = ({
  customizeLabel,
  customizeTooltip,
  handleDelete,
  items = [],
  maxTooltipTags = 100,
  shouldTruncate = false,
  showOnlyFirst = true,
  size = GeneralSize.Small,
}: SkillTagsProps) => {
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
          someLongText={firstNodeLabel}
          slotProps={{
            popper: {
              sx: {
                wordBreak: "break-word",
              },
            },
          }}
        />
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
                  .map((node, index) => formatNodeValue(items[index + 1]))
                  .join(", ")}
                {items.length - 1 > maxTooltipTags && ", and more..."}
              </span>
            }
          >
            <span style={{ display: "inline-flex" }}>
              <Tag
                size={size}
                sx={{
                  border: "none",
                  background: "transparent",
                  "& .MuiChip-label": {
                    paddingLeft: "0",
                  },
                }}
              >
                +{items.length - 1}
              </Tag>
            </span>
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
              shouldTruncate={shouldTruncate}
            />
          </Tag>
        );
      })}
      {remainingTags.length > 0 && <RemainingTags tags={remainingTags} />}
    </Stack>
  );
};
