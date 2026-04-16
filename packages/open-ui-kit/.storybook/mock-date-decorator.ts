import type { Decorator } from "@storybook/react";
import MockDate from "mockdate";

/**
 * Mirrors storybook-mock-date-decorator: set `parameters.date` to a `Date` on a story to freeze time.
 * Inlined so we do not depend on a package whose peer range is Storybook 9-only.
 */
export const mockDateDecorator: Decorator = (Story, context) => {
  MockDate.reset();
  const date = context.parameters?.date;
  if (date instanceof Date) {
    MockDate.set(date);
  }
  return Story();
};
