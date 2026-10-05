/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";
import { Tag } from "@/components/tags";
import type { KeyValuePairStatusProps } from "../types";

/**
 * Renders the `Status` value state of a key value pair: a status tag with the
 * matching semantic icon and color treatment.
 */
export const KeyValuePairStatus = ({
  status,
  label,
  size = GeneralSize.Medium,
  sx,
}: KeyValuePairStatusProps) => (
  <Tag status={status} size={size} sx={sx}>
    {label ?? status}
  </Tag>
);
