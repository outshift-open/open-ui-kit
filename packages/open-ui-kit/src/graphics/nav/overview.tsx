/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

export const OverviewGraphicBold = (props: SvgIconProps) => {
  const { vars } = useTheme().palette;

  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g>
        <rect
          x="2"
          y="3.11108"
          width="8.88889"
          height="11.1111"
          rx="1"
          fill={vars.controlIconDefault}
        />
        <g>
          <path
            d="M2 17.5555C2 16.9419 2.49746 16.4444 3.11111 16.4444H9.77778C10.3914 16.4444 10.8889 16.9419 10.8889 17.5555V19.7778C10.8889 20.3914 10.3914 20.8889 9.77778 20.8889H3.11111C2.49746 20.8889 2 20.3914 2 19.7778V17.5555Z"
            fill={vars.controlIconDefault}
          />
          <path
            d="M13.1111 4.2222C13.1111 3.60855 13.6086 3.11108 14.2222 3.11108H20.8889C21.5025 3.11108 22 3.60855 22 4.2222V8.66664C22 9.28029 21.5025 9.77775 20.8889 9.77775H14.2222C13.6086 9.77775 13.1111 9.28029 13.1111 8.66664V4.2222Z"
            fill={vars.controlIconDefault}
          />
        </g>
        <rect
          x="13.1111"
          y="12"
          width="8.88889"
          height="8.88889"
          rx="1"
          fill={vars.controlIconDefault}
        />
      </g>
    </SvgIcon>
  );
};

export const OverviewGraphicActive = (props: SvgIconProps) => {
  const { vars } = useTheme().palette;

  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g>
        <rect
          x="2"
          y="3.11111"
          width="8.88889"
          height="11.1111"
          rx="1"
          fill={vars.brandIconTertiaryDefault}
        />
        <g>
          <path
            d="M2 17.5556C2 16.9419 2.49746 16.4444 3.11111 16.4444H9.77778C10.3914 16.4444 10.8889 16.9419 10.8889 17.5556V19.7778C10.8889 20.3914 10.3914 20.8889 9.77778 20.8889H3.11111C2.49746 20.8889 2 20.3914 2 19.7778V17.5556Z"
            fill={vars.brandIconPrimaryDefault}
          />
          <path
            d="M13.1111 4.22222C13.1111 3.60857 13.6086 3.11111 14.2222 3.11111H20.8889C21.5025 3.11111 22 3.60857 22 4.22222V8.66667C22 9.28032 21.5025 9.77778 20.8889 9.77778H14.2222C13.6086 9.77778 13.1111 9.28032 13.1111 8.66667V4.22222Z"
            fill={vars.brandIconPrimaryDefault}
          />
        </g>
        <rect
          x="13.1111"
          y="12"
          width="8.88889"
          height="8.88889"
          rx="1"
          fill={vars.brandIconPrimaryStrong}
        />
      </g>
    </SvgIcon>
  );
};

export const OverviewGraphicInactive = (props: SvgIconProps) => {
  const { vars } = useTheme().palette;

  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g>
        <rect
          x="2"
          y="3.11111"
          width="8.88889"
          height="11.1111"
          rx="1"
          fill={vars.brandIconSecondaryWeak}
        />
        <g>
          <path
            d="M2 17.5556C2 16.9419 2.49746 16.4444 3.11111 16.4444H9.77778C10.3914 16.4444 10.8889 16.9419 10.8889 17.5556V19.7778C10.8889 20.3914 10.3914 20.8889 9.77778 20.8889H3.11111C2.49746 20.8889 2 20.3914 2 19.7778V17.5556Z"
            fill={vars.brandIconSecondaryMedium}
          />
          <path
            d="M13.1111 4.22222C13.1111 3.60857 13.6086 3.11111 14.2222 3.11111H20.8889C21.5025 3.11111 22 3.60857 22 4.22222V8.66667C22 9.28032 21.5025 9.77778 20.8889 9.77778H14.2222C13.6086 9.77778 13.1111 9.28032 13.1111 8.66667V4.22222Z"
            fill={vars.brandIconSecondaryMedium}
          />
        </g>
        <rect
          x="13.1111"
          y="12"
          width="8.88889"
          height="8.88889"
          rx="1"
          fill={vars.brandIconSecondaryDefault}
        />
      </g>
    </SvgIcon>
  );
};
