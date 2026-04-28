import type { Decorator } from "@storybook/react-vite";
import MockDate from "mockdate";

/**
 * When a story sets `parameters.date` to a `Date`, `Date` in the preview matches
 * that instant (same behavior as storybook-mock-date-decorator, without legacy peers).
 */
export const mockDateDecorator: Decorator = (Story, context) => {
  MockDate.reset();
  const date = context.parameters.date;
  if (date instanceof Date) {
    MockDate.set(date);
  }
  return Story();
};
