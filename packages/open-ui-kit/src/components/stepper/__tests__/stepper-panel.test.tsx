/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { StepperPanel } from "../components/stepper-panel";

const steps = [
  { label: "Step One" },
  { label: "Step Two" },
  { label: "Step Three" },
];

const renderStepper = (props: Record<string, unknown> = {}, dark = false) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <StepperPanel steps={steps} activeStep={0} {...(props as any)}>
        <span>Content</span>
      </StepperPanel>
    </ThemeProvider>,
  );

describe("StepperPanel", () => {
  describe("rendering", () => {
    it("renders all step labels", () => {
      renderStepper();
      expect(screen.getByText("Step One")).toBeInTheDocument();
      expect(screen.getByText("Step Two")).toBeInTheDocument();
      expect(screen.getByText("Step Three")).toBeInTheDocument();
    });

    it("renders step numbers", () => {
      renderStepper();
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("renders children content", () => {
      renderStepper();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("renders footer when provided", () => {
      renderStepper({ footer: <button>Next</button> });
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    it("renders without footer without throwing", () => {
      expect(() => renderStepper()).not.toThrow();
    });
  });

  describe("interaction", () => {
    it("calls onStepClick with the correct index when a step is clicked", () => {
      const onStepClick = jest.fn();
      renderStepper({ onStepClick });
      fireEvent.click(screen.getByText("Step Two"));
      expect(onStepClick).toHaveBeenCalledWith(1, expect.anything());
    });

    it("renders without onStepClick without throwing", () => {
      expect(() => renderStepper({ onStepClick: undefined })).not.toThrow();
    });
  });

  describe("active step", () => {
    it("renders step 2 as active without throwing", () => {
      expect(() => renderStepper({ activeStep: 1 })).not.toThrow();
    });

    it("renders last step as active without throwing", () => {
      expect(() => renderStepper({ activeStep: 2 })).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderStepper()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderStepper({}, true)).not.toThrow();
    });
  });
});
