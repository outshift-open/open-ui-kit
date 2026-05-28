/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  IconButton,
  Box,
  Typography,
  useTheme,
  Popover,
  PopoverProps,
  Stack,
} from "@mui/material";
import { Event, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { InputField, type InputFieldProps } from "@/components/input-field";
import { getDateRangePickerStyles } from "../styles";

const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  setStartDate: (endDate: string) => void;
  setEndDate: (endDate: string) => void;
  getPopoverVisibility?: (visibility: boolean) => void;
  inputFieldProps?: InputFieldProps;
  popoverProps?: PopoverProps;
}

export const DateRangePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  getPopoverVisibility,
  popoverProps,
  inputFieldProps,
}: DateRangePickerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const theme = useTheme();
  const s = getDateRangePickerStyles(theme);

  const open = Boolean(anchorEl);

  const handleDayClick = (day: string) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate("");
    } else if (new Date(day) < new Date(startDate)) {
      setEndDate(startDate);
      setStartDate(day);
      handlePopoverClose();
    } else {
      setEndDate(day);
      handlePopoverClose();
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray: React.ReactNode[] = [];

    WEEK_DAYS.forEach((weekDay, index) => {
      daysArray.push(
        <Box key={`weekDay-${index}`} sx={s.weekDayStyle}>
          <Typography
            variant={"body2"}
            sx={{ color: theme.palette.vars.baseTextDefault }}
          >
            {weekDay}
          </Typography>
        </Box>,
      );
    });

    Array.from({ length: firstDayOfMonth }).forEach((_, i) => {
      daysArray.push(<Box key={`empty-${i}`} sx={s.emptyDay} />);
    });

    Array.from({ length: daysInMonth }).map((_, i) => {
      const day = new Date(year, month, i + 1);
      const dayString = day.toLocaleDateString("en-US");

      let dayStyleBox = s.dayStyle;
      let dayContainerStyleBox = s.dayContainerStyle;

      if (startDate === dayString || endDate === dayString) {
        dayStyleBox = s.selectedDayStyle;
        dayContainerStyleBox = s.insideSelectedRangeDayContainerStyle;
      } else if (
        startDate &&
        endDate &&
        new Date(day) > new Date(startDate) &&
        new Date(day) < new Date(endDate)
      ) {
        dayContainerStyleBox = s.insideSelectedRangeDayContainerStyle;
      }

      daysArray.push(
        <Box
          key={i + 1}
          sx={dayContainerStyleBox}
          onClick={() => handleDayClick(dayString)}
        >
          <Box sx={dayStyleBox}>
            <Typography
              variant={"subtitle2"}
              sx={{ color: theme.palette.vars.interactiveTextInDefault }}
            >
              {i + 1}
            </Typography>
          </Box>
        </Box>,
      );
    });

    return (
      <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
        {daysArray}
      </Box>
    );
  };

  const updateInput = () => {
    if (startDate && endDate) {
      return `${startDate} - ${endDate}`;
    } else if (startDate) {
      return startDate;
    } else {
      return "";
    }
  };

  const handleInputFieldClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    getPopoverVisibility?.(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    getPopoverVisibility?.(false);
  };

  return (
    <>
      <InputField
        onClick={handleInputFieldClick}
        variant={"standard"}
        size={"small"}
        value={updateInput()}
        {...inputFieldProps}
        sx={[
          {
            width: "264px",
            cursor: "pointer",
            "& .MuiInputBase-input, & .MuiInputBase-root": {
              cursor: "pointer",
            },
          },
          ...(Array.isArray(inputFieldProps?.sx)
            ? inputFieldProps.sx
            : inputFieldProps?.sx
              ? [inputFieldProps.sx]
              : []),
        ]}
        slotProps={{
          ...inputFieldProps?.slotProps,
          input: {
            readOnly: true,
            endAdornment: (
              <Event
                sx={{
                  color: theme.palette.vars.interactivePrimaryDefaultDefault,
                }}
              />
            ),
            ...inputFieldProps?.slotProps?.input,
          },
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        {...popoverProps}
        sx={
          {
            ...s.popover,
            ...popoverProps?.sx,
          } as PopoverProps["sx"]
        }
      >
        <Stack direction={"column"} gap={"12px"}>
          <Stack
            direction={"row"}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: "0 4px" }}
          >
            <IconButton
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
                )
              }
            >
              <ChevronLeft
                sx={{
                  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
                }}
              />
            </IconButton>

            <Typography variant="body2Semibold">
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </Typography>

            <IconButton
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
                )
              }
            >
              <ChevronRight
                sx={{
                  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
                }}
              />
            </IconButton>
          </Stack>
          {renderCalendar()}
        </Stack>
      </Popover>
    </>
  );
};
