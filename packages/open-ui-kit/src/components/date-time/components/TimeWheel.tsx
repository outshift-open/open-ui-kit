/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type KeyboardEvent,
} from "react";
import { Box, styled, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import dayjs, { type Dayjs } from "dayjs";

/*
 * Time selection as cyclic wheels under a fixed window. Each list is rendered
 * COPIES times; the column rests in the middle copy and is silently moved back
 * there whenever scrolling settles, so it never runs out in either direction.
 * Entries grow into the window frame by frame as they scroll towards it.
 */

/** Distance from the top of the clock to the fixed selection window. */
export const CLOCK_WINDOW_TOP = 64;
const COLUMN_HEIGHT = 336;
const WINDOW_HEIGHT = 60;
/** Slot height per entry: a 46px chip plus the design's 8px gap. */
const ITEM_PITCH = 54;
const CHIP_WIDTH = 53;
const CHIP_HEIGHT = 46;
/** Extra space either side of the entry in the window (keeps 8px gaps). */
const NEIGHBOUR_PUSH = 7;
const FONT_SIZE = 24;
const WINDOW_FONT_SIZE = 36;
const COPIES = 7;
const MIDDLE_COPY = Math.floor(COPIES / 2);
/** Scroll offset that centres slot 0 in the window. */
const WINDOW_OFFSET = CLOCK_WINDOW_TOP + WINDOW_HEIGHT / 2 - ITEM_PITCH / 2;
const SETTLE_DELAY_MS = 120;
const HOUR_WIDTH = 69;
const MINUTE_WIDTH = 81;
const SEPARATOR_WIDTH = 24;

type TimeView = "hours" | "minutes" | "seconds";

interface WheelOption {
  label: string;
  disabled: boolean;
}

const mod = (value: number, size: number) => ((value % size) + size) % size;

const pad = (value: number) => String(value).padStart(2, "0");

/** Index of the last entry at or below target (entries are ascending). */
const floorIndex = (values: number[], target: number) => {
  let found = 0;
  values.forEach((entry, index) => {
    if (entry <= target) found = index;
  });
  return found;
};

const scrollTopFor = (globalIndex: number) =>
  globalIndex * ITEM_PITCH - WINDOW_OFFSET;

const globalIndexAt = (scrollTop: number) =>
  Math.round((scrollTop + WINDOW_OFFSET) / ITEM_PITCH);

const scrollBehavior = (): ScrollBehavior =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

const Root = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  width: "232px",
  height: `${COLUMN_HEIGHT}px`,
  overflow: "hidden",
  // The fixed window frames and the separator. They belong to the clock, not
  // the columns, so the numbers scroll underneath them.
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: `${CLOCK_WINDOW_TOP}px`,
    zIndex: 1,
    boxSizing: "border-box",
    height: `${WINDOW_HEIGHT}px`,
    border: `1px solid ${theme.palette.vars.interactiveTertiaryActive}`,
    borderRadius: "8px",
    pointerEvents: "none",
  },
  "&::before": {
    left: 0,
    width: `${HOUR_WIDTH}px`,
  },
  "&::after": {
    left: `${HOUR_WIDTH + SEPARATOR_WIDTH}px`,
    width: `${MINUTE_WIDTH}px`,
  },
}));

const Separator = styled("span")(({ theme }) => ({
  ...theme.typography.h3,
  position: "absolute",
  top: `${CLOCK_WINDOW_TOP}px`,
  left: `${HOUR_WIDTH}px`,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: `${SEPARATOR_WIDTH}px`,
  height: `${WINDOW_HEIGHT}px`,
  color: theme.palette.vars.interactiveTextInDefault,
  pointerEvents: "none",
}));

const Column = styled("div")(({ theme }) => ({
  flex: "0 0 auto",
  height: `${COLUMN_HEIGHT}px`,
  overflowY: "auto",
  overflowX: "hidden",
  overscrollBehavior: "contain",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  // Snap the entry nearest the window into it. The padding shrinks the
  // snapport to exactly the window.
  scrollSnapType: "y mandatory",
  scrollPadding: `${CLOCK_WINDOW_TOP}px 0 ${COLUMN_HEIGHT - CLOCK_WINDOW_TOP - WINDOW_HEIGHT}px`,
  outline: "none",
  "&:focus-visible": {
    boxShadow: `inset 0 0 0 2px ${theme.palette.vars.controlBorderActive}`,
    borderRadius: "8px",
  },
}));

const Slot = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `${ITEM_PITCH}px`,
  scrollSnapAlign: "center",
});

const Chip = styled("div")(({ theme }) => ({
  ...theme.typography.h5,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: `${CHIP_WIDTH}px`,
  height: `${CHIP_HEIGHT}px`,
  lineHeight: 1,
  borderRadius: "8px",
  border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  color: theme.palette.vars.interactiveTextInDisabled,
  cursor: "pointer",
  userSelect: "none",
  willChange: "transform",
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  "&[aria-disabled='true']": {
    cursor: "default",
    opacity: 0.4,
  },
}));

const PeriodColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "44px",
  marginLeft: "12px",
  marginTop: `${CLOCK_WINDOW_TOP}px`,
});

const PeriodOption = styled("button")(({ theme }) => ({
  ...theme.typography.subtitle2,
  boxSizing: "border-box",
  width: "43px",
  height: "30px",
  padding: "5px 10px",
  margin: 0,
  color: theme.palette.vars.interactiveTextInDefault,
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  cursor: "pointer",
  "&:first-of-type": {
    borderBottomWidth: 0,
    borderRadius: "8px 8px 0 0",
  },
  "&:last-of-type": {
    borderTopWidth: 0,
    borderRadius: "0 0 8px 8px",
  },
  "&[aria-selected='true']": {
    borderWidth: "1px",
    borderColor: theme.palette.vars.interactiveTertiaryActive,
    color: theme.palette.vars.interactiveTextInActive,
  },
  "&:hover:not(:disabled)": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  "&:disabled": {
    cursor: "default",
    color: theme.palette.vars.interactiveTextInDisabled,
  },
}));

interface WheelColumnProps {
  ariaLabel: string;
  options: WheelOption[];
  /** Entry to rest in the window. */
  positionIndex: number;
  /** Entry that is the current value, if any. */
  selectedIndex: number;
  /** Chip width once fully inside the window. */
  windowWidth: number;
  interactive: boolean;
  onSelect: (index: number) => void;
  sx?: SxProps<Theme>;
}

const WheelColumn = ({
  ariaLabel,
  options,
  positionIndex,
  selectedIndex,
  windowWidth,
  interactive,
  onSelect,
  sx,
}: WheelColumnProps) => {
  const theme = useTheme();
  const columnRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const paintedRef = useRef(new Set<number>());
  const mountedRef = useRef(false);
  const count = options.length;

  const activeColor = theme.palette.vars.interactiveTextInDefault;
  const mutedColor = theme.palette.vars.interactiveTextInDisabled;

  // Size, colour and spacing are interpolated from each entry's distance to
  // the window, so an entry eases in and out of it instead of switching.
  const paint = useCallback(() => {
    const column = columnRef.current;
    if (!column) return;
    const centre = (column.scrollTop + WINDOW_OFFSET) / ITEM_PITCH;
    const chips = column.children;
    const painted = new Set<number>();
    const first = Math.max(0, Math.floor(centre) - 3);
    const last = Math.min(chips.length - 1, Math.ceil(centre) + 6);

    for (let index = first; index <= last; index += 1) {
      const chip = chips[index]?.firstElementChild as HTMLElement | null;
      if (!chip) continue;
      const distance = index - centre;
      const closeness = Math.max(0, 1 - Math.abs(distance));
      const push =
        Math.sign(distance) * NEIGHBOUR_PUSH * Math.min(1, Math.abs(distance));
      chip.style.width = `${CHIP_WIDTH + (windowWidth - CHIP_WIDTH) * closeness}px`;
      chip.style.height = `${CHIP_HEIGHT + (WINDOW_HEIGHT - CHIP_HEIGHT) * closeness}px`;
      chip.style.fontSize = `${FONT_SIZE + (WINDOW_FONT_SIZE - FONT_SIZE) * closeness}px`;
      chip.style.color = `color-mix(in srgb, ${activeColor} ${Math.round(closeness * 100)}%, ${mutedColor})`;
      chip.style.transform = `translateY(${push}px)`;
      painted.add(index);
    }

    // Entries that just left the painted range go back to their resting look.
    paintedRef.current.forEach((index) => {
      if (painted.has(index)) return;
      const chip = chips[index]?.firstElementChild as HTMLElement | null;
      if (!chip) return;
      chip.style.width = "";
      chip.style.height = "";
      chip.style.fontSize = "";
      chip.style.color = "";
      chip.style.transform = `translateY(${index < centre ? -NEIGHBOUR_PUSH : NEIGHBOUR_PUSH}px)`;
    });
    paintedRef.current = painted;
  }, [activeColor, mutedColor, windowWidth]);

  const settle = useCallback(() => {
    const column = columnRef.current;
    if (!column || count === 0) return;

    let globalIndex = globalIndexAt(column.scrollTop);
    // Return to the middle copy; the content there is identical, so the jump
    // is invisible and the wheel can keep turning either way.
    const copy = Math.floor(globalIndex / count);
    if (copy !== MIDDLE_COPY) {
      const shift = (MIDDLE_COPY - copy) * count;
      column.scrollTop += shift * ITEM_PITCH;
      globalIndex += shift;
    }

    const index = mod(globalIndex, count);
    if (!interactive) {
      if (index !== positionIndex) {
        column.scrollTo({
          top: scrollTopFor(globalIndex + (positionIndex - index)),
          behavior: scrollBehavior(),
        });
      }
      return;
    }

    if (options[index]?.disabled) {
      // Roll on to the nearest entry that can be chosen.
      for (let step = 1; step < count; step += 1) {
        for (const direction of [1, -1]) {
          if (!options[mod(index + direction * step, count)]?.disabled) {
            column.scrollTo({
              top: scrollTopFor(globalIndex + direction * step),
              behavior: scrollBehavior(),
            });
            return;
          }
        }
      }
      return;
    }

    if (index !== selectedIndex) onSelect(index);
  }, [count, interactive, onSelect, options, positionIndex, selectedIndex]);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(paint);
    clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(settle, SETTLE_DELAY_MS);
  }, [paint, settle]);

  // Start in the middle copy with the current entry in the window.
  useLayoutEffect(() => {
    const column = columnRef.current;
    if (!column || count === 0 || mountedRef.current) return;
    column.scrollTop = scrollTopFor(
      MIDDLE_COPY * count + Math.max(0, positionIndex),
    );
    mountedRef.current = true;
    paint();
  }, [count, paint, positionIndex]);

  // Follow value changes made elsewhere (a click, AM/PM, the text field) by
  // turning the shortest way round.
  useEffect(() => {
    const column = columnRef.current;
    if (!column || count === 0 || positionIndex < 0) return;
    const globalIndex = globalIndexAt(column.scrollTop);
    let delta = mod(positionIndex - mod(globalIndex, count), count);
    if (delta > count / 2) delta -= count;
    if (delta === 0) return;
    column.scrollTo({
      top: scrollTopFor(globalIndex + delta),
      behavior: scrollBehavior(),
    });
  }, [count, positionIndex]);

  useEffect(
    () => () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(settleTimerRef.current);
    },
    [],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = {
      ArrowDown: 1,
      ArrowUp: -1,
      PageDown: 5,
      PageUp: -5,
    };
    const step = steps[event.key];
    if (!step || !interactive) return;
    event.preventDefault();
    columnRef.current?.scrollBy({
      top: step * ITEM_PITCH,
      behavior: scrollBehavior(),
    });
  };

  return (
    <Column
      ref={columnRef}
      role="listbox"
      aria-label={ariaLabel}
      tabIndex={interactive ? 0 : -1}
      onScroll={handleScroll}
      onKeyDown={handleKeyDown}
      sx={[
        { width: `${windowWidth}px` },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {Array.from({ length: COPIES * count }, (_, globalIndex) => {
        const index = globalIndex % count;
        const option = options[index];
        return (
          <Slot key={globalIndex}>
            <Chip
              role="option"
              aria-selected={index === selectedIndex}
              aria-disabled={option.disabled || undefined}
              // Only one copy is announced; the rest exist to keep turning.
              aria-hidden={
                Math.floor(globalIndex / count) !== MIDDLE_COPY || undefined
              }
              onClick={() => {
                if (interactive && !option.disabled) onSelect(index);
              }}
            >
              {option.label}
            </Chip>
          </Slot>
        );
      })}
    </Column>
  );
};

export interface TimeWheelProps {
  value: Dayjs | null;
  referenceDate?: Dayjs;
  onChange: (
    value: Dayjs,
    selectionState?: "partial" | "shallow" | "finish",
    selectedView?: TimeView | "meridiem",
  ) => void;
  ampm?: boolean;
  timeSteps?: { hours?: number; minutes?: number; seconds?: number };
  minutesStep?: number;
  minTime?: Dayjs;
  maxTime?: Dayjs;
  disablePast?: boolean;
  disableFuture?: boolean;
  shouldDisableTime?: (value: Dayjs, view: TimeView) => boolean;
  disableIgnoringDatePartForTimeValidation?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export const TimeWheel = ({
  value,
  referenceDate,
  onChange,
  ampm = true,
  timeSteps,
  minutesStep,
  minTime,
  maxTime,
  disablePast,
  disableFuture,
  shouldDisableTime,
  disableIgnoringDatePartForTimeValidation,
  readOnly,
  disabled,
  sx,
}: TimeWheelProps) => {
  const base = useMemo(
    () => value ?? referenceDate ?? dayjs().second(0).millisecond(0),
    [value, referenceDate],
  );
  const interactive = !readOnly && !disabled;
  const hourStep = timeSteps?.hours ?? 1;
  const minuteStep = timeSteps?.minutes ?? minutesStep ?? 5;
  const isPm = base.hour() >= 12;

  const isOutOfRange = useCallback(
    (start: Dayjs, end: Dayjs) => {
      const compare = (a: Dayjs, b: Dayjs) =>
        disableIgnoringDatePartForTimeValidation
          ? a.valueOf() - b.valueOf()
          : a.hour() * 60 + a.minute() - (b.hour() * 60 + b.minute());
      const now = dayjs();
      return Boolean(
        (minTime && compare(end, minTime) < 0) ||
        (maxTime && compare(start, maxTime) > 0) ||
        (disablePast && end.isBefore(now, "minute")) ||
        (disableFuture && start.isAfter(now, "minute")),
      );
    },
    [
      disableFuture,
      disableIgnoringDatePartForTimeValidation,
      disablePast,
      maxTime,
      minTime,
    ],
  );

  const isHourDisabled = useCallback(
    (hour24: number) => {
      const start = base.hour(hour24).minute(0);
      return (
        isOutOfRange(start, start.minute(59)) ||
        Boolean(shouldDisableTime?.(start, "hours"))
      );
    },
    [base, isOutOfRange, shouldDisableTime],
  );

  const hours = useMemo(() => {
    const values: number[] = [];
    for (let hour = 0; hour < (ampm ? 12 : 24); hour += hourStep) {
      values.push(hour);
    }
    return values;
  }, [ampm, hourStep]);

  const toHour24 = useCallback(
    (hour: number) => (ampm ? hour + (isPm ? 12 : 0) : hour),
    [ampm, isPm],
  );

  const hourOptions = useMemo(
    () =>
      hours.map((hour) => ({
        label: ampm ? pad(hour === 0 ? 12 : hour) : pad(hour),
        disabled: isHourDisabled(toHour24(hour)),
      })),
    [ampm, hours, isHourDisabled, toHour24],
  );

  const minutes = useMemo(() => {
    const values: number[] = [];
    for (let minute = 0; minute < 60; minute += minuteStep) {
      values.push(minute);
    }
    return values;
  }, [minuteStep]);

  const minuteOptions = useMemo(
    () =>
      minutes.map((minute) => {
        const candidate = base.minute(minute);
        return {
          label: pad(minute),
          disabled:
            isOutOfRange(candidate, candidate) ||
            Boolean(shouldDisableTime?.(candidate, "minutes")),
        };
      }),
    [base, isOutOfRange, minutes, shouldDisableTime],
  );

  const hourInHalf = ampm ? base.hour() % 12 : base.hour();
  const hourPosition = floorIndex(hours, hourInHalf);
  const minutePosition = floorIndex(minutes, base.minute());
  const hourSelected =
    value && hours[hourPosition] === hourInHalf ? hourPosition : -1;
  const minuteSelected =
    value && minutes[minutePosition] === base.minute() ? minutePosition : -1;

  const handleHour = useCallback(
    (index: number) =>
      onChange(base.hour(toHour24(hours[index])), "partial", "hours"),
    [base, hours, onChange, toHour24],
  );

  const handleMinute = useCallback(
    (index: number) =>
      onChange(base.minute(minutes[index]), "partial", "minutes"),
    [base, minutes, onChange],
  );

  const isHalfDisabled = (pm: boolean) =>
    hours.every((hour) => isHourDisabled(hour + (pm ? 12 : 0)));

  return (
    <Root sx={sx}>
      <WheelColumn
        ariaLabel="Hours"
        options={hourOptions}
        positionIndex={hourPosition}
        selectedIndex={hourSelected}
        windowWidth={HOUR_WIDTH}
        interactive={interactive}
        onSelect={handleHour}
      />
      <Separator aria-hidden>:</Separator>
      <WheelColumn
        ariaLabel="Minutes"
        options={minuteOptions}
        positionIndex={minutePosition}
        selectedIndex={minuteSelected}
        windowWidth={MINUTE_WIDTH}
        interactive={interactive}
        onSelect={handleMinute}
        sx={{ marginLeft: `${SEPARATOR_WIDTH}px` }}
      />
      {ampm && (
        <PeriodColumn role="listbox" aria-label="Meridiem">
          {[false, true].map((pm) => (
            <PeriodOption
              key={pm ? "pm" : "am"}
              type="button"
              role="option"
              aria-selected={Boolean(value) && isPm === pm}
              disabled={!interactive || isHalfDisabled(pm)}
              onClick={() => {
                if (isPm === pm && value) return;
                const hour = base.hour();
                onChange(
                  base.hour(pm ? (hour % 12) + 12 : hour % 12),
                  "partial",
                  "meridiem",
                );
              }}
            >
              {pm ? "PM" : "AM"}
            </PeriodOption>
          ))}
        </PeriodColumn>
      )}
    </Root>
  );
};

/** Drop-in `viewRenderers` entry for the hours, minutes and meridiem views. */
export const renderTimeWheelView = (props: TimeWheelProps) => (
  <TimeWheel {...props} />
);
