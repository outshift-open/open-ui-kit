/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { StepperStepState } from "../types";

export const stepperPanelRootStyles = (theme: Theme): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: 0,
  isolation: "isolate",
  width: "912px",
  height: "480px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  boxShadow: theme.shadows[1],
  borderRadius: "12px",
  overflow: "hidden",
});

export const stepperPanelSidebarStyles = (
  theme: Theme,
  isCollapsed = false,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: isCollapsed ? "center" : "flex-end",
  padding: "24px 1px 7px 0px",
  gap: isCollapsed ? "5px" : "173px",
  width: isCollapsed ? "77px" : "320px",
  height: "480px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "12px 0px 0px 12px",
  flexShrink: 0,
  zIndex: 1,
});

export const stepperPanelStepsStyles = (isCollapsed = false): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  gap: "12px",
  margin: "0 auto",
  width: isCollapsed ? "76px" : "319px",
});

export const stepperPanelStepStyles = (
  isClickable: boolean,
  isCollapsed = false,
  isDisabled = false,
  hasSubtitle = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: 0,
  width: isCollapsed ? "76px" : "319px",
  height: hasSubtitle && !isCollapsed ? "56px" : "44px",
  cursor: isClickable && !isDisabled ? "pointer" : "default",
  background: "none",
  border: 0,
  textAlign: "left",
  font: "inherit",
  pointerEvents: isDisabled ? "none" : undefined,
});

export const stepperPanelStepContentStyles = (
  isCollapsed = false,
  hasSubtitle = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "8px 0px 8px 24px",
  gap: "12px",
  width: isCollapsed ? "73px" : "316px",
  height: hasSubtitle && !isCollapsed ? "56px" : "44px",
  flexGrow: 1,
});

export const stepperPanelActiveLineStyles = (
  theme: Theme,
  state: StepperStepState,
  hasSubtitle = false,
): CSSObject => ({
  width: "3px",
  height: hasSubtitle ? "56px" : "44px",
  flexShrink: 0,
  backgroundColor:
    state === "current"
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : "transparent",
  borderRadius: "2px",
});

export const stepperPanelIndicatorStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  width: "28px",
  height: "28px",
  borderRadius: "20px",
  flexShrink: 0,
  ...(state === "current"
    ? {
        backgroundColor: theme.palette.vars.interactivePrimaryDefaultDefault,
      }
    : {
        border: `2px solid ${
          state === "completed"
            ? theme.palette.vars.interactivePrimaryDefaultDefault
            : theme.palette.vars.controlBorderWeak
        }`,
        backgroundColor: "transparent",
      }),
});

export const stepperPanelStepNumberStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center",
  color:
    state === "current"
      ? theme.palette.vars.baseTextInverse
      : state === "idle"
        ? theme.palette.vars.baseTextDefault
        : state === "completed"
          ? theme.palette.vars.interactivePrimaryDefaultDefault
          : theme.palette.vars.baseTextDisabled,
});

export const stepperPanelStepTitleWrapperStyles = (
  hasSubtitle = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "4px 12px 0px 0px",
  width: "252px",
  height: hasSubtitle ? "40px" : "24px",
  flexGrow: 1,
});

export const stepperPanelStepTitleStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  color:
    state === "current"
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : state === "completed"
        ? theme.palette.vars.baseTextStrong
        : state === "idle"
          ? theme.palette.vars.baseTextMedium
          : theme.palette.vars.baseTextDisabled,
});

export const stepperPanelStepSubtitleStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color:
    state === "disabled"
      ? theme.palette.vars.baseTextDisabled
      : theme.palette.vars.baseTextDefault,
});

export const stepperPanelCollapseWrapperStyles = (
  isCollapsed = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: isCollapsed ? "center" : "flex-end",
  padding: isCollapsed ? "12px" : "12px 24px 12px 12px",
  gap: "10px",
  margin: isCollapsed ? "0 auto" : 0,
  width: isCollapsed ? "56px" : "68px",
  height: "56px",
});

export const stepperPanelCollapseButtonStyles = (theme: Theme): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px",
  width: "32px",
  height: "32px",
  border: `2px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "100px",
  color: theme.palette.vars.baseTextDefault,
});

export const stepperPanelMainStyles = (isCollapsed = false): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  width: isCollapsed ? "835px" : "592px",
  height: "480px",
  flexGrow: 1,
  minWidth: 0,
  zIndex: 0,
});

export const stepperPanelContentStyles = (
  hasFooter: boolean,
  isCollapsed = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "16px",
  width: isCollapsed ? "835px" : "592px",
  height: hasFooter ? "414px" : "480px",
  overflowY: "auto",
  alignSelf: "stretch",
  flexGrow: 1,
});

export const stepperPanelFooterStyles = (
  theme: Theme,
  isCollapsed = false,
): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "16px 24px",
  gap: "24px",
  width: isCollapsed ? "835px" : "592px",
  height: "66px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  borderRadius: "0px 0px 12px 0px",
  alignSelf: "stretch",
  flexShrink: 0,
});

export const steppedModalRootStyles = (theme: Theme): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
  gap: 0,
  width: "768px",
  maxWidth: "none",
  height: "416px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  boxShadow: theme.shadows[3],
  borderRadius: "8px",
  overflow: "hidden",
  "&&": {
    gap: 0,
    padding: 0,
    width: "768px",
    minWidth: "768px",
    maxWidth: "none",
    boxShadow: theme.shadows[3],
  },
});

export const steppedModalHeaderStyles: CSSObject = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "4px",
  width: "768px",
  height: "102px",
  alignSelf: "stretch",
  flexShrink: 0,
};

export const steppedModalTitleStyles = (theme: Theme): CSSObject => ({
  width: "720px",
  height: "30px",
  fontFamily: "Sharp Sans",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "30px",
  color: theme.palette.vars.baseTextStrong,
});

export const steppedModalSubtitleStyles = (theme: Theme): CSSObject => ({
  width: "720px",
  height: "20px",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: theme.palette.vars.baseTextMedium,
});

export const steppedModalContentStyles: CSSObject = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px 24px 24px",
  gap: "24px",
  width: "768px",
  height: "234px",
  alignSelf: "stretch",
  flexShrink: 0,
};

export const steppedModalStepSeriesStyles: CSSObject = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "16px 48px 8px",
  gap: "8px",
  width: "720px",
  height: "72px",
  alignSelf: "stretch",
  flexShrink: 0,
};

export const steppedModalStepStyles: CSSObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
  gap: "4px",
  width: "32px",
  height: "48px",
  flexShrink: 0,
};

export const steppedModalIndicatorStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  width: "28px",
  height: "28px",
  borderRadius: "20px",
  ...(state === "current"
    ? {
        backgroundColor: theme.palette.vars.interactivePrimaryDefaultDefault,
      }
    : {
        border: `2px solid ${
          state === "completed"
            ? theme.palette.vars.interactivePrimaryDefaultDefault
            : theme.palette.vars.controlBorderWeak
        }`,
        backgroundColor: "transparent",
      }),
});

export const steppedModalIndicatorTextStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center",
  color:
    state === "current"
      ? theme.palette.vars.baseTextInverse
      : state === "completed"
        ? theme.palette.vars.interactivePrimaryDefaultDefault
        : state === "idle"
          ? theme.palette.vars.baseTextDefault
          : theme.palette.vars.baseTextDisabled,
});

export const steppedModalStepLabelStyles = (
  theme: Theme,
  state: StepperStepState,
): CSSObject => ({
  width: "114px",
  height: "16px",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center",
  color:
    state === "current"
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : state === "completed"
        ? theme.palette.vars.baseTextMedium
        : state === "idle"
          ? theme.palette.vars.baseTextMedium
          : theme.palette.vars.baseTextDisabled,
});

export const steppedModalConnectorStyles = (
  theme: Theme,
  isCompleted: boolean,
): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "16px 0px 0px",
  width: "248px",
  height: "16.34px",
  borderRadius: "100px",
  flexGrow: 1,
  "&::before": {
    content: '""',
    width: "100%",
    borderTop: `${isCompleted ? "2px" : "1px"} solid ${
      isCompleted
        ? theme.palette.vars.interactivePrimaryDefaultDefault
        : theme.palette.vars.controlBorderDefault
    }`,
  },
});

export const steppedModalBodyTextStyles = (theme: Theme): CSSObject => ({
  width: "720px",
  height: "60px",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: theme.palette.vars.baseTextDefault,
});

export const steppedModalFooterStyles: CSSObject = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  gap: "61px",
  width: "768px",
  height: "80px",
  borderRadius: "0px 0px 8px 8px",
  alignSelf: "stretch",
  flexShrink: 0,
};

export const steppedModalActionsStyles: CSSObject = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: 0,
  gap: "8px",
  margin: "0 auto",
  width: "672px",
  height: "32px",
  flexGrow: 1,
};
