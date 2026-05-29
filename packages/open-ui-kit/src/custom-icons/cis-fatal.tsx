/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CISFatal(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.007 22.001c-.185 0-.367-.037-.538-.108a1.715 1.715 0 0 1-.489-.308l-8.553-8.553a1.715 1.715 0 0 1-.308-.489 1.407 1.407 0 0 1 0-1.085c.07-.181.174-.347.308-.488l8.553-8.544c.14-.139.306-.247.49-.318.171-.063.353-.096.537-.097.187.002.372.035.547.097.187.065.354.174.489.318l8.553 8.553c.144.135.253.303.318.49.063.175.096.36.098.547a1.604 1.604 0 0 1-.098.537c-.07.184-.179.35-.318.489l-8.553 8.553a1.466 1.466 0 0 1-1.036.406Zm-2.258-8.563h1.466V7.573H9.749v5.865Zm.733 2.688a.753.753 0 1 0-.489-.22.704.704 0 0 0 .489.22Zm2.366-2.688h1.466V7.573h-1.466v5.865Zm.733 2.688a.753.753 0 1 0-.514-.22.703.703 0 0 0 .514.22Z"
        />
      </svg>
    </SvgIcon>
  );
}
