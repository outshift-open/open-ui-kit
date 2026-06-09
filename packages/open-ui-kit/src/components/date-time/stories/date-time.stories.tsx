import type { Meta, StoryObj } from "@storybook/react-vite";
import dayjs from "dayjs";
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
import { Calendar, KeyboardArrowDown, KeyboardArrowUp } from "@/custom-icons";

/**
 * ### The Date Time Picker component lets the user select a date and time.
 */
const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTime",
  component: DateTimePicker,
  argTypes: {
    label: {
      control: "text",
      description: "Placeholder label shown in the picker input.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the picker input and trigger.",
    },
    readOnly: {
      control: "boolean",
      description: "Prevents changing the picker value.",
    },
  },
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
  name: "Default",
  args: {
    label: "Pick date and time",
    defaultValue: dayjs("2025-08-14T00:00"),
  },
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

export const DatePickerDay: DateStory = {
  name: "Day picker",
  args: {
    label: "Pick a date",
    defaultValue: dayjs("2025-08-14"),
  },
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

const DateRangePickerWrapper = (
  args: DateRangePickerProps & {
    initialStartDate?: string;
    initialEndDate?: string;
  },
) => {
  const { initialStartDate = "", initialEndDate = "", ...dateRangeArgs } = args;
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  return (
    <DateRangePicker
      {...dateRangeArgs}
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
            startAdornment: <Calendar sx={{ marginRight: "4px" }} />,
            endAdornment: isPopoverVisible ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
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

export const DateRangeSelected: DateRangePickerStory = {
  name: "Date range selected",
  render: (args) => {
    return (
      <DateRangePickerWrapper
        {...args}
        initialStartDate="8/14/2025"
        initialEndDate="8/22/2025"
      />
    );
  },
};

export const DateRangeCustom: DateRangePickerStory = {
  name: "Date range custom input",
  render: (args) => {
    return <CustomDateRangePickerWrapper {...args} />;
  },
};

export const TimePickerDefault: TimeStory = {
  name: "Time picker",
  args: {
    label: "Pick a time",
    defaultValue: dayjs("2025-08-14T00:00"),
  },
  render: (args) => <TimePicker {...args} />,
};

export const DatePickerMonth: StaticDateStory = {
  name: "Month picker",
  args: {
    defaultValue: dayjs("2025-08-14"),
    openTo: "month",
    slotProps: {
      toolbar: { hidden: true },
    },
  },
  render: (args) => <StaticDatePicker {...args} views={["year", "month"]} />,
};

export const StaticDayStates: StaticDateStory = {
  name: "Day states",
  args: {
    defaultValue: dayjs("2025-08-14"),
    shouldDisableDate: (date) => date.date() < 4,
    slotProps: {
      toolbar: { hidden: true },
    },
  },
  render: (args) => <StaticDatePicker {...args} views={["day"]} />,
};

export const StaticDateTimePickerExample: StaticDateTimeStory = {
  name: "Static date time picker",
  args: {
    defaultValue: dayjs("2025-08-14T12:00"),
  },
  render: (args) => <StaticDateTimePicker orientation="landscape" {...args} />,
};
