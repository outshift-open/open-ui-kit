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

import { Theme } from "@mui/material";

export const getSharedStyle = (theme: Theme) => {
  return {
    border: `2px solid ${theme.palette.vars.controlBorderActive}`,
    padding: "0 0 16px 0",

    backgroundColor: theme.palette.vars.controlBackgroundWeak,
    "& .MuiDayCalendar-weekDayLabel": {
      ...theme.typography.body2,
      color: theme.palette.vars.baseTextDefault,
    },

    "& .MuiPickersDay-root": {
      color: theme.palette.vars.baseTextDefault,
      borderRadius: "4px",
    },
    "& .MuiYearCalendar-root, & .MuiMonthCalendar-root": {
      rowGap: "8px",
      columnGap: 0,
    },
    "& .MuiMonthCalendar-button": {
      width: "96px",
      backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault}`,
      borderRadius: "4px",
    },
    " & .MuiYearCalendar-button": {
      backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${theme.palette.vars.interactiveSecondaryWeakDefault}`,
      borderRadius: "4px",
    },
    "& .MuiMultiSectionDigitalClockSection-root": {
      padding: "8px 4px 0 0",
    },
    "& .MuiMultiSectionDigitalClockSection-item": {
      borderRadius: "4px",
    },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-selected, & .MuiPickersDay-root.Mui-selected, & .MuiMonthCalendar-button.Mui-selected, & .MuiYearCalendar-button.Mui-selected":
      {
        backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
        border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
        color: theme.palette.vars.baseTextDefault,
      },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-selected:focus, & .MuiPickersDay-root.Mui-selected:focus, & .MuiMonthCalendar-button.Mui-selected:focus, & .MuiYearCalendar-button.Mui-selected:focus":
      {
        backgroundColor: `${theme.palette.vars.controlBackgroundDefault}`,
        border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
        color: theme.palette.vars.baseTextDefault,
      },
    "& .MuiMultiSectionDigitalClockSection-item.Mui-disabled, & .MuiPickersDay-root.Mui-disabled, & .MuiMonthCalendar-button.Mui-disabled, & .MuiYearCalendar-button.Mui-disabled":
      {
        color: theme.palette.vars.interactiveTextInDisabled,
      },

    "& .MuiMultiSectionDigitalClockSection-item:hover, & .MuiPickersDay-root:hover, & .MuiMonthCalendar-button:hover, & .MuiYearCalendar-button:hover":
      {
        backgroundColor: `${theme.palette.vars.baseBackgroundHover} !important`,
      },
  };
};

export const getStaticPickerToolbarSlotProp = (theme: Theme) => {
  return {
    "& .MuiDateTimePickerToolbar-timeDigitsContainer": {
      display: "flex",
      alignItems: "center",
    },
    "& .MuiTypography-root:not([data-selected])": {
      color: theme.palette.vars.interactiveTextInDefault,
    },
  };
};

export const getSharedSlotPropsDateTimePicker = (theme: Theme) => {
  return {
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
          left: "26px",
          top: "8px",
        },
        "& .MuiPickersArrowSwitcher-nextIconButton": {
          position: "absolute",
          right: "26px",
          top: "8px",
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
  };
};

export const getDateRangePickerStyles = (theme: Theme) => {
  const weekDayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    marginLeft: "4px",
    marginRight: "4px",
  };
  const emptyDay = {
    width: "32px",
    height: "32px",
    margin: "4px",
  };
  const dayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    textAlign: "center",
    cursor: "pointer",
  };
  const dayContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    paddingLeft: "4px",
    paddingRight: "4px",
    margin: "4px 0",
    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundHover,
      borderRadius: "4px",
    },
  };

  const selectedDayStyle = {
    ...dayStyle,
    border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
    borderRadius: "4px",
  };

  const insideSelectedRangeDayContainerStyle = {
    ...dayContainerStyle,
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
  };

  const popover = {
    marginTop: "4px",
    "& .MuiPaper-root": {
      padding: "16px",
      width: "316px",
      height: "364px",
      borderRadius: "8px",
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
  };
};
