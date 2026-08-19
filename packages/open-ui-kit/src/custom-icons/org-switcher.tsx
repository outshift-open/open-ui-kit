/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

// The mark is drawn as three stacked layers, named after the
// Brand/Icon/Secondary ramp in Figma: the "Weak" bracket along the bottom, the
// "Medium" arrow on the right and the "Default" diamond on the left. The
// exports below build the partial marks by stacking those layers, so the
// geometry is declared once.
const BRACKET_PATH =
  "M 10,10.583 C 10.55,10.583 11,11.033 11,11.583 L 11,13.583 L 19,13.583 C 19.55,13.583 20,14.033 20,14.583 L 20,17.583 C 20,18.143 19.55,18.583 19,18.583 C 18.45,18.583 18,18.143 18,17.583 L 18,15.583 L 11,15.583 L 11,17.583 C 11,18.143 10.55,18.583 10,18.583 C 9.45,18.583 9,18.143 9,17.583 L 9,15.583 L 2,15.583 L 2,17.583 C 2,18.143 1.55,18.583 1,18.583 C 0.45,18.583 0,18.143 0,17.583 L 0,14.583 C 0,14.033 0.45,13.583 1,13.583 L 9,13.583 L 9,11.583 C 9,11.033 9.45,10.583 10,10.583";

const ARROW_PATH =
  "M 11.06,7.643 L 12.29,8.883 C 12.68,9.273 13.32,9.273 13.71,8.883 L 17.29,5.293 C 17.68,4.903 17.68,4.273 17.29,3.883 L 13.71,0.293 C 13.32,-0.097 12.68,-0.097 12.29,0.293 L 11.06,1.523 L 12.35,2.823 C 12.39,2.863 12.43,2.903 12.47,2.943 L 13,2.413 L 15.17,4.583 L 13,6.753 L 12.47,6.233 C 12.43,6.273 12.39,6.313 12.35,6.353 L 11.06,7.643";

const DIAMOND_PATH =
  "M 6.29,0.293 C 6.68,-0.097 7.32,-0.097 7.71,0.293 L 11.29,3.883 C 11.68,4.273 11.68,4.903 11.29,5.293 L 7.71,8.883 C 7.32,9.273 6.68,9.273 6.29,8.883 L 2.71,5.293 C 2.32,4.903 2.32,4.273 2.71,3.883 L 6.29,0.293";

export function OrgSwitcherWeak(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20.0 18.583">
      <path d={BRACKET_PATH} fill="currentColor" />
    </SvgIcon>
  );
}

export function OrgSwitcherMedium(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20.0 18.583">
      <path d={`${BRACKET_PATH} ${ARROW_PATH}`} fill="currentColor" />
    </SvgIcon>
  );
}

export function OrgSwitcherDefault(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20.0 18.583">
      <path d={`${BRACKET_PATH} ${DIAMOND_PATH}`} fill="currentColor" />
    </SvgIcon>
  );
}

// The complete mark, matching the `.Switcher` frame (node 179634:5059) in the
// Outshift Spark Component Library. All three layers are painted, and the frame
// resolves the bracket and the arrow to Brand/Icon/Secondary/Weak while the
// diamond takes Brand/Icon/Secondary/Default. That two-tone ramp is why the
// layers cannot share `currentColor` — the caller only carries one inherited
// color.
export function OrgSwitcher(props: SvgIconProps) {
  const { vars } = useTheme().palette;

  return (
    <SvgIcon {...props} viewBox="0 0 20.0 18.583">
      <path d={BRACKET_PATH} fill={vars.brandIconSecondaryWeak} />
      <path d={ARROW_PATH} fill={vars.brandIconSecondaryWeak} />
      <path d={DIAMOND_PATH} fill={vars.brandIconSecondaryDefault} />
    </SvgIcon>
  );
}
