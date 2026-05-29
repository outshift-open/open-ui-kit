/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";

export interface AvatarProps {
  /** Controls the avatar diameter. Large is 40px and medium is 32px. */
  size?: "L" | "M";
  /** Image source used when the avatar should represent a person or entity photo. */
  src?: string;
  /** Accessible text for the image avatar. */
  alt?: string;
  /** Initials displayed when no image or icon is provided. */
  initials?: string;
  /** Icon displayed when no image is provided. */
  icon?: ReactNode;
}

export interface AvatarGroupProps {
  /** Controls the size applied to every avatar in the group. */
  size?: "L" | "M";
  /** Avatar children to stack with the configured group overlap. */
  children: ReactNode;
}
