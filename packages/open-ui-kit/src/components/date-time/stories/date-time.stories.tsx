import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DateTimePicker,
  DatePicker,
  StaticDatePicker,
  StaticDateTimePicker,
  TimePicker,
  DateRangePicker,
} from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { useState } from "react";
import type { DateRangePickerProps } from "../types";
import Event from "@mui/icons-material/Event";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * ### The Date Time Picker component lets the user select a date and time.
 */
const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTime",
  component: DateTimePicker,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Date & Time Picker"
          blurb="Date and time pickers let users select a day, month, date range, hour, or minute from tokenized picker surfaces."
          importLine={`import { DateTimePicker, DatePicker, TimePicker, DateRangePicker } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type DateTimeStory = StoryObj<typeof DateTimePicker>;
type StaticDateTimeStory = StoryObj<typeof StaticDateTimePicker>;
type StaticDateStory = StoryObj<typeof StaticDatePicker>;
type DateStory = StoryObj<typeof DatePicker>;
type TimeStory = StoryObj<typeof TimePicker>;
type DateRangePickerStory = StoryObj<typeof DateRangePicker>;

export const Default: DateTimeStory = {
  name: "Date time picker",
  render: (args) => {
    return (
      <DateTimePicker
        {...args}
        label="Pick date and time"
        textFieldStyles={{
          "& .MuiInputBase-root": { marginTop: 0, width: "240px" },
        }}
      />
    );
  },
};

export const DatePickerDay: DateStory = {
  name: "Date picker - Day",
  render: (args) => (
    <DatePicker
      {...args}
      label="Pick a date"
      popperSlotProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 12],
            },
          },
        ],
      }}
    />
  ),
};

const DateRangePickerWrapper = (args: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <DateRangePicker
      {...args}
      inputFieldProps={{ placeholder: "Pick a date" }}
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
};

const CustomDateRangePickerWrapper = (args: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const value =
    formattedStartDate && formattedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "";

  return (
    <DateRangePicker
      {...args}
      inputFieldProps={{
        placeholder: "Pick a date",
        value: value,
        slotProps: {
          input: {
            readOnly: true,
            startAdornment: <Event sx={{ marginRight: "4px" }} />,
            endAdornment: isPopoverVisible ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            ),
          },
        },
        sx: { width: "350px" },
      }}
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      getPopoverVisibility={(isVisible) => setIsPopoverVisible(isVisible)}
    />
  );
};

export const DateRange: DateRangePickerStory = {
  name: "Date range",
  render: (args) => {
    return <DateRangePickerWrapper {...args} />;
  },
};

export const DateRangeCustom: DateRangePickerStory = {
  name: "Date range - Custom input",
  render: (args) => {
    return <CustomDateRangePickerWrapper {...args} />;
  },
};

export const TimePickerDefault: TimeStory = {
  name: "Time picker - Default",
  render: (args) => <TimePicker {...args} label="Pick a time" />,
};

export const DatePickerMonth: StaticDateStory = {
  name: "Date picker - Month",
  render: (args) => <StaticDatePicker {...args} views={["year", "month"]} />,
};

export const StaticDateTimePickerExample: StaticDateTimeStory = {
  name: "Date time picker - Static",
  render: (args) => <StaticDateTimePicker orientation="landscape" {...args} />,
};
