/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";

export type DateTimePickerSharedSlotProps = {
  leftArrowIcon: { sx: SxProps<Theme> };
  rightArrowIcon: { sx: SxProps<Theme> };
  calendarHeader: { sx: SxProps<Theme> };
  switchViewIcon: { sx: SxProps<Theme> };
  day: { sx: SxProps<Theme> };
  actionBar: { sx: SxProps<Theme> };
  desktopPaper: { sx: SxProps<Theme> };
};

export const mergeSx = (...sxValues: unknown[]): SxProps<Theme> =>
  sxValues.flatMap((sx) =>
    Array.isArray(sx) ? sx : sx ? [sx] : [],
  ) as SxProps<Theme>;

export const getSharedStyle = (theme: Theme) =>
  ({
    boxSizing: "border-box",
    width: "325px",
    height: "372px",
    border: `2px solid ${theme.palette.vars.controlBorderActive}`,
    borderRadius: "8px",
    boxShadow: theme.shadows[1],
    padding: "16px",
    backgroundColor: theme.palette.vars.controlBackgroundWeak,
    backgroundImage: "none",
    "& .MuiPickersLayout-root, & .MuiPickersLayout-contentWrapper, & .MuiDateCalendar-root":
      {
        width: "293px",
      },
    "& .MuiDateCalendar-root": {
      height: "336px",
    },
    "& .MuiPickersCalendarHeader-root": {
      width: "293px",
      minHeight: "24px",
      maxHeight: "24px",
      margin: "0 0 12px",
      padding: 0,
    },
    "& .MuiPickersCalendarHeader-labelContainer": {
      margin: "auto",
    },
    "& .MuiPickersArrowSwitcher-root": {
      width: "24px",
    },
    "& .MuiPickersArrowSwitcher-button": {
      width: "24px",
      height: "24px",
      padding: 0,
      borderRadius: "4px",
    },
    "& .MuiDayCalendar-header": {
      width: "293px",
      height: "20px",
      padding: "0 12px",
      justifyContent: "space-between",
    },
    "& .MuiDayCalendar-weekDayLabel": {
      ...theme.typography.body2,
      width: "32px",
      height: "20px",
      margin: 0,
      color: theme.palette.vars.baseTextDefault,
    },
    "& .MuiDayCalendar-slideTransition": {
      width: "293px",
      minHeight: "240px",
      overflow: "hidden",
    },
    "& .MuiDayCalendar-monthContainer": {
      width: "293px",
    },
    "& .MuiDayCalendar-weekContainer": {
      width: "293px",
      height: "32px",
      margin: "8px 0 0",
      justifyContent: "space-between",
    },
    "& .MuiPickersDay-root": {
      ...theme.typography.subtitle2,
      width: "32px",
      height: "32px",
      margin: 0,
      color: theme.palette.vars.interactiveTextInDefault,
      borderRadius: "999px",
    },
    "& .MuiPickersDay-root.MuiPickersDay-today:not(.Mui-selected)": {
      border: `1px solid ${theme.palette.vars.interactiveSecondaryDefaultDefault}`,
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
      borderRadius: "4px",
    },
    "& .MuiYearCalendar-root, & .MuiMonthCalendar-root": {
      rowGap: "8px",
      columnGap: 0,
      width: "293px",
    },
    "& .MuiMonthCalendar-button, & .MuiPickersMonth-monthButton": {
      ...theme.typography.subtitle2,
      width: "92px",
      height: "32px",
      padding: "6px 16px !important",
      margin: "0 !important",
      backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault} !important`,
      borderRadius: "4px",
    },
    "& .MuiYearCalendar-button, & .MuiPickersYear-yearButton": {
      ...theme.typography.subtitle2,
      height: "32px",
      padding: "6px 16px !important",
      backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault} !important`,
      borderRadius: "4px",
    },
    "& .MuiMultiSectionDigitalClockSection-root": {
      padding: 0,
    },
    "& .MuiMultiSectionDigitalClockSection-item": {
      ...theme.typography.subtitle2,
      minWidth: "69px",
      height: "60px",
      margin: 0,
      borderRadius: "8px",
      color: theme.palette.vars.interactiveTextInDefault,
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault}`,
    },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-selected, & .MuiPickersDay-root.Mui-selected, & .MuiMonthCalendar-button.Mui-selected, & .MuiPickersMonth-monthButton.Mui-selected, & .MuiYearCalendar-button.Mui-selected, & .MuiPickersYear-yearButton.Mui-selected":
      {
        backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
        border: `1px solid ${theme.palette.vars.interactiveTertiaryActive} !important`,
        color: `${theme.palette.vars.baseTextDefault} !important`,
        borderRadius: "4px",
      },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-selected:focus, & .MuiPickersDay-root.Mui-selected:focus, & .MuiMonthCalendar-button.Mui-selected:focus, & .MuiPickersMonth-monthButton.Mui-selected:focus, & .MuiYearCalendar-button.Mui-selected:focus, & .MuiPickersYear-yearButton.Mui-selected:focus":
      {
        backgroundColor: `${theme.palette.vars.controlBackgroundDefault}`,
        border: `1px solid ${theme.palette.vars.interactiveTertiaryActive} !important`,
        color: `${theme.palette.vars.baseTextDefault} !important`,
      },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-disabled, & .MuiPickersDay-root.Mui-disabled, & .MuiMonthCalendar-button.Mui-disabled, & .MuiPickersMonth-monthButton.Mui-disabled, & .MuiYearCalendar-button.Mui-disabled, & .MuiPickersYear-yearButton.Mui-disabled":
      {
        color: theme.palette.vars.interactiveTextInDisabled,
        backgroundColor: theme.palette.vars.controlBackgroundWeak,
      },

    "& .MuiMultiSectionDigitalClockSection-item:hover, & .MuiPickersDay-root:hover, & .MuiMonthCalendar-button:hover, & .MuiPickersMonth-monthButton:hover, & .MuiYearCalendar-button:hover, & .MuiPickersYear-yearButton:hover":
      {
        backgroundColor: `${theme.palette.vars.baseBackgroundHover} !important`,
      },
    "& .MuiPickersLayout-actionBar .MuiButton-root, & .MuiDialogActions-root .MuiButton-root":
      {
        ...theme.typography.body2Semibold,
        minWidth: "auto",
        height: "32px",
        padding: "7px 16px",
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
        borderRadius: "4px",
        textTransform: "none",
      },
    "& .MuiPickersLayout-actionBar .MuiButton-root:last-of-type, & .MuiDialogActions-root .MuiButton-root:last-of-type":
      {
        color: theme.palette.vars.interactiveTextInDefault,
        border: `2px solid ${theme.palette.vars.interactiveTertiaryDefault}`,
      },
  }) as SxProps<Theme>;

export const getStaticPickerToolbarSlotProp = (theme: Theme) =>
  ({
    "& .MuiDateTimePickerToolbar-timeDigitsContainer": {
      display: "flex",
      alignItems: "center",
    },
    "& .MuiTypography-root:not([data-selected])": {
      color: theme.palette.vars.interactiveTextInDefault,
    },
  }) as SxProps<Theme>;

export const getStaticDateTimePickerStyle = (theme: Theme) =>
  ({
    ...getSharedStyle(theme),
    width: "459px",
    height: "450px",
    "& .MuiPickersLayout-root": {
      width: "459px",
      height: "450px",
    },
    "& .MuiPickersLayout-contentWrapper": {
      width: "293px",
    },
    "& .MuiDateTimePickerTabs-root": {
      display: "none",
    },
    "& .MuiDateTimePickerToolbar-root": {
      width: "132px",
      height: "384px",
      padding: "16px",
    },
    "& .MuiPickersLayout-actionBar": {
      width: "417px",
      height: "32px",
      justifyContent: "flex-end",
      padding: 0,
      marginRight: 0,
      gap: "16px",
    },
  }) as SxProps<Theme>;

const getPeriodItemStyles = (theme: Theme) =>
  ({
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item":
      {
        ...theme.typography.subtitle2,
        minWidth: "43px",
        width: "43px",
        height: "30px",
        minHeight: "30px",
        padding: "5px 10px",
        margin: 0,
        borderStyle: "solid",
        color: theme.palette.vars.interactiveTextInDefault,
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item:first-of-type":
      {
        borderWidth: "1px 1px 0 1px",
        borderColor: theme.palette.vars.interactiveSecondaryWeakDefault,
        borderRadius: "8px 8px 0 0",
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item:last-of-type":
      {
        borderWidth: "0 1px 1px 1px",
        borderColor: theme.palette.vars.interactiveSecondaryWeakDefault,
        borderRadius: "0 0 8px 8px",
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item.Mui-selected":
      {
        backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
        border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
        color: theme.palette.vars.baseTextDefault,
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item.Mui-selected:first-of-type":
      {
        borderRadius: "8px 8px 0 0",
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item.Mui-selected:last-of-type":
      {
        borderRadius: "0 0 8px 8px",
      },
  }) as SxProps<Theme>;

export const getDatePickerStyle = (theme: Theme) =>
  ({
    ...getSharedStyle(theme),
    "& .MuiPickersLayout-root, & .MuiPickersLayout-contentWrapper, & .MuiDateCalendar-root":
      {
        width: "293px",
      },
    "& .MuiDateCalendar-root": {
      height: "296px",
    },
    "& .MuiPickersLayout-actionBar": {
      width: "293px",
      height: "32px",
      justifyContent: "flex-end",
      padding: 0,
      marginRight: 0,
      marginTop: "12px",
      gap: "16px",
    },
  }) as SxProps<Theme>;

export const getStaticMonthPickerStyle = (theme: Theme) =>
  ({
    ...getSharedStyle(theme),
    height: "280px",
    gridTemplateRows: "0 204px 32px",
    "& .MuiPickersLayout-contentWrapper, & .MuiDateCalendar-root": {
      width: "293px",
      height: "204px",
    },
    "& .MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer":
      {
        height: "168px",
      },
    "& .MuiMonthCalendar-root": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "8px",
      width: "293px",
      height: "168px",
      padding: "8px 0",
    },
    "& .MuiPickersMonth-root": {
      width: "92.33px",
      height: "32px",
      margin: 0,
    },
    "& .MuiMonthCalendar-button, & .MuiPickersMonth-monthButton": {
      ...theme.typography.subtitle2,
      width: "92.33px",
      height: "32px",
      padding: "6px 16px !important",
      margin: "0 !important",
      color: theme.palette.vars.interactiveTextInDefault,
      backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault} !important`,
      borderRadius: "4px",
    },
    "& .MuiPickersLayout-actionBar": {
      width: "293px",
      height: "32px",
      justifyContent: "flex-end",
      padding: 0,
      marginRight: 0,
      marginTop: "12px",
      gap: "16px",
    },
  }) as SxProps<Theme>;

export const getDateTimePickerStyle = (theme: Theme) =>
  ({
    ...getSharedStyle(theme),
    width: "558px",
    height: "412px",
    "& .MuiPickersLayout-root": {
      width: "526px",
      height: "380px",
      gridTemplateColumns: "0 526px 0",
      gridTemplateRows: "0 336px 0 0 32px",
    },
    "& .MuiPickersLayout-contentWrapper": {
      display: "grid",
      width: "526px",
      height: "336px",
      gridTemplateColumns: "293px 1px 232px",
    },
    "& .MuiDateCalendar-root": {
      width: "293px",
      height: "336px",
    },
    "& .MuiMultiSectionDigitalClock-root": {
      width: "232px",
      height: "80px",
      maxHeight: "80px",
      overflow: "hidden",
      borderBottom: 0,
      position: "relative",
    },
    "& .MuiMultiSectionDigitalClock-root::before": {
      ...theme.typography.h3,
      content: '":"',
      position: "absolute",
      left: "69px",
      top: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "60px",
      color: theme.palette.vars.interactiveTextInDefault,
      pointerEvents: "none",
    },
    "& .MuiMultiSectionDigitalClockSection-root": {
      padding: 0,
      width: "70px",
      flex: "0 0 70px",
      overflowY: "auto",
      overflowX: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&:nth-of-type(2)": {
        width: "82px",
        flexBasis: "82px",
        marginLeft: "24px",
      },
      "&:nth-of-type(3)": {
        width: "44px",
        flexBasis: "44px",
        marginLeft: "12px",
        marginTop: "4px",
      },
    },
    "& .MuiMultiSectionDigitalClockSection-item": {
      ...theme.typography.h3,
      minWidth: "69px",
      width: "69px",
      height: "60px",
      margin: 0,
      borderRadius: "8px",
      color: theme.palette.vars.interactiveTextInDefault,
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault}`,
    },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(2) .MuiMultiSectionDigitalClockSection-item":
      {
        minWidth: "81px",
        width: "81px",
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item":
      {
        minWidth: "43px",
        width: "43px",
      },
    "& .MuiDivider-root": {
      borderColor: theme.palette.vars.controlBorderWeak,
    },
    "& .MuiPickersLayout-actionBar": {
      width: "526px",
      height: "32px",
      justifyContent: "flex-end",
      padding: 0,
      marginRight: 0,
      marginTop: "12px",
    },
    ...getPeriodItemStyles(theme),
  }) as SxProps<Theme>;

export const getTimePickerStyle = (theme: Theme) =>
  ({
    ...getSharedStyle(theme),
    width: "264px",
    height: "156px",
    "& .MuiPickersLayout-root, & .MuiPickersLayout-contentWrapper": {
      width: "232px",
    },
    "& .MuiMultiSectionDigitalClock-root": {
      width: "232px",
      maxHeight: "80px",
      overflow: "hidden",
      borderBottom: 0,
      position: "relative",
    },
    "& .MuiMultiSectionDigitalClock-root::before": {
      ...theme.typography.h3,
      content: '":"',
      position: "absolute",
      left: "69px",
      top: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "60px",
      color: theme.palette.vars.interactiveTextInDefault,
      pointerEvents: "none",
    },
    "& .MuiMultiSectionDigitalClockSection-root": {
      padding: 0,
      width: "70px",
      flex: "0 0 70px",
      maxHeight: "80px",
      overflowY: "auto",
      overflowX: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&:nth-of-type(2)": {
        width: "82px",
        flexBasis: "82px",
        marginLeft: "24px",
      },
      "&:nth-of-type(3)": {
        width: "44px",
        flexBasis: "44px",
        marginLeft: "12px",
        marginTop: "4px",
      },
    },
    "& .MuiMultiSectionDigitalClockSection-item": {
      ...theme.typography.h3,
      minWidth: "69px",
      width: "69px",
      height: "60px",
      margin: 0,
      borderRadius: "8px",
      color: theme.palette.vars.interactiveTextInDefault,
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault}`,
    },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(2) .MuiMultiSectionDigitalClockSection-item":
      {
        minWidth: "81px",
        width: "81px",
      },
    "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item":
      {
        minWidth: "43px",
        width: "43px",
      },
    "& .MuiDialogActions-root, & .MuiPickersLayout-actionBar": {
      width: "232px",
      height: "32px",
      justifyContent: "flex-end",
      padding: 0,
      marginTop: "12px",
      gap: "16px",
    },
    ...getPeriodItemStyles(theme),
  }) as SxProps<Theme>;

export const getSharedSlotPropsDateTimePicker = (theme: Theme) =>
  ({
    leftArrowIcon: {
      sx: {
        color: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
    },
    rightArrowIcon: {
      sx: {
        color: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
    },
    calendarHeader: {
      sx: {
        position: "relative",
        "& .MuiPickersCalendarHeader-labelContainer": { margin: "auto" },
        "& .MuiPickersCalendarHeader-label": {
          ...theme.typography.body2Semibold,
          color: theme.palette.vars.interactiveSecondaryDefaultDefault,
        },
        "& .MuiPickersArrowSwitcher-previousIconButton": {
          position: "absolute",
          left: 0,
          top: 0,
        },
        "& .MuiPickersArrowSwitcher-nextIconButton": {
          position: "absolute",
          right: 0,
          top: 0,
        },
      },
    },
    switchViewIcon: {
      sx: {
        color: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
    },
    day: {
      sx: {
        ...theme.typography.subtitle2,
        width: "32px",
        height: "32px",
        margin: 0,
        color: theme.palette.vars.interactiveTextInDefault,
      },
    },
    actionBar: {
      sx: {
        marginRight: "8px",
      },
    },
    desktopPaper: {
      sx: getSharedStyle(theme),
    },
  }) as DateTimePickerSharedSlotProps;

export const getDateRangePickerStyles = (theme: Theme) => {
  const weekDayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "20px",
    margin: 0,
  };
  const emptyDay = {
    width: "32px",
    height: "32px",
    margin: 0,
  };
  const dayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "999px",
  };
  const dayContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    margin: "8px 0 0",
    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundHover,
      borderRadius: "4px",
    },
  };

  const selectedDayStyle = {
    ...dayStyle,
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
    borderRadius: "4px",
  };

  const insideSelectedRangeDayContainerStyle = {
    ...dayContainerStyle,
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
  };

  const popover = {
    marginTop: "12px",
    "& .MuiPaper-root": {
      boxSizing: "border-box",
      padding: "16px",
      width: "325px",
      height: "306px",
      overflow: "hidden",
      backgroundColor: theme.palette.vars.controlBackgroundWeak,
      backgroundImage: "none",
      border: `2px solid ${theme.palette.vars.controlBorderActive}`,
      borderRadius: "8px",
      boxShadow: theme.shadows[1],
    },
  };

  return {
    weekDayStyle,
    emptyDay,
    dayStyle,
    dayContainerStyle,
    selectedDayStyle,
    insideSelectedRangeDayContainerStyle,
    popover,
  } as Record<string, SxProps<Theme>>;
};
