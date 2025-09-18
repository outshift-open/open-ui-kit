import { Meta, StoryObj } from "@storybook/react";
import {
  DateTimePicker,
  DatePicker,
  StaticDatePicker,
  StaticDateTimePicker,
  TimePicker,
  DateRangePicker,
} from "..";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { useState } from "react";
import { DateRangePickerProps } from "@/components/date-time/components/DateRangePicker";
import Event from "@mui/icons-material/Event";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * ### The Date Time Picker component lets the user select a date and time.
 */
const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTime",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="The Date Time Picker component lets the user select a date and time."
          guideLink=""
          importLine='import { DateTimePicker } from "@open-ui-kit/core";'
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

export const DateTimePickerExample: DateTimeStory = {
  render: (args) => {
    return (
      <DateTimePicker
        {...args}
        textFieldStyles={{
          "& .MuiInputBase-root": { marginTop: 0, width: "240px" },
        }}
      />
    );
  },
};

export const DatePickerExample: DateStory = {
  render: (args) => (
    <DatePicker
      {...args}
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
      textFieldProps={{ placeholder: "Pick a date" }}
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
      textFieldProps={{
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

export const DateRangePickerExample: DateRangePickerStory = {
  render: (args) => {
    return <DateRangePickerWrapper {...args} />;
  },
};

export const DateRangePickerCustomExample: DateRangePickerStory = {
  render: (args) => {
    return <CustomDateRangePickerWrapper {...args} />;
  },
};

export const TimePickerExample: TimeStory = {
  render: (args) => <TimePicker {...args} />,
};

export const StaticDatePickerExample: StaticDateStory = {
  render: (args) => <StaticDatePicker {...args} />,
};

export const StaticDateTimePickerExample: StaticDateTimeStory = {
  render: (args) => <StaticDateTimePicker orientation="landscape" {...args} />,
};
