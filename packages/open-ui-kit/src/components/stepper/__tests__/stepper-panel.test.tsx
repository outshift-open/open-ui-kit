/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { StepperModal } from "../components/stepper-modal";
import { StepperPanel } from "../components/stepper-panel";
import {
  stepperPanelActiveLineStyles,
  stepperPanelCollapseButtonStyles,
  stepperPanelCollapseWrapperStyles,
  stepperPanelContentStyles,
  stepperPanelFooterStyles,
  stepperPanelIndicatorStyles,
  stepperPanelRootStyles,
  stepperPanelSidebarStyles,
  stepperPanelStepContentStyles,
  stepperPanelStepNumberStyles,
  stepperPanelStepsStyles,
  stepperPanelStepStyles,
  stepperPanelStepTitleStyles,
  steppedModalActionsStyles,
  steppedModalBodyTextStyles,
  steppedModalConnectorStyles,
  steppedModalContentStyles,
  steppedModalFooterStyles,
  steppedModalHeaderStyles,
  steppedModalIndicatorStyles,
  steppedModalRootStyles,
  steppedModalStepSeriesStyles,
  steppedModalStepStyles,
  steppedModalTitleStyles,
} from "../styles";
import type { StepperPanelProps } from "../types";

const steps = [
  { label: "Step One" },
  { label: "Step Two" },
  { label: "Step Three" },
];

const modalSteps = [
  { label: "Step One" },
  { label: "Step Two" },
  { label: "Step Three" },
];

const renderStepper = (
  props: Partial<StepperPanelProps> = {},
  mode = ThemeMode.Light,
) =>
  render(
    <ThemeProvider defaultMode={mode}>
      <StepperPanel steps={steps} activeStep={0} {...props}>
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

    it("renders the collapse control with an accessible name", () => {
      renderStepper({ collapseButtonAriaLabel: "Collapse setup steps" });
      expect(
        screen.getByRole("button", { name: "Collapse setup steps" }),
      ).toBeInTheDocument();
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

    it("calls onCollapseClick when the collapse control is clicked", () => {
      const onCollapseClick = jest.fn();
      renderStepper({ onCollapseClick });
      fireEvent.click(screen.getByRole("button", { name: "Collapse stepper" }));
      expect(onCollapseClick).toHaveBeenCalledWith(expect.anything());
    });

    it("toggles the sidebar collapsed state when uncontrolled", () => {
      renderStepper();
      fireEvent.click(screen.getByRole("button", { name: "Collapse stepper" }));

      expect(
        screen.getByRole("button", { name: "Expand stepper" }),
      ).toBeInTheDocument();
      expect(screen.queryByText("Step One")).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole("button", { name: "Expand stepper" }));
      expect(
        screen.getByRole("button", { name: "Collapse stepper" }),
      ).toBeInTheDocument();
      expect(screen.getByText("Step One")).toBeInTheDocument();
    });

    it("calls onCollapsedChange with the next collapsed state", () => {
      const onCollapsedChange = jest.fn();
      renderStepper({ onCollapsedChange });
      fireEvent.click(screen.getByRole("button", { name: "Collapse stepper" }));
      expect(onCollapsedChange).toHaveBeenCalledWith(true, expect.anything());
    });

    it("does not call onStepClick for disabled steps", () => {
      const onStepClick = jest.fn();
      renderStepper({
        steps: [
          { label: "Enabled Step" },
          { label: "Disabled Step", state: "disabled" },
        ],
        onStepClick,
      });

      fireEvent.click(screen.getByRole("button", { name: "2 Disabled Step" }));
      expect(onStepClick).not.toHaveBeenCalled();
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
    it("maps light panel tokens to the Figma CSS values", () => {
      expect(stepperPanelRootStyles(lightTheme)).toEqual(
        expect.objectContaining({
          width: "912px",
          height: "480px",
          backgroundColor: "#fbfcfe",
          boxShadow: "0px 4px 4px rgba(200, 213, 245, 0.33)",
          borderRadius: "12px",
        }),
      );
      expect(stepperPanelSidebarStyles(lightTheme)).toEqual(
        expect.objectContaining({
          width: "320px",
          height: "480px",
          backgroundColor: "#fbfcfe",
          borderRight: "1px solid #d5dff7",
        }),
      );
      expect(stepperPanelFooterStyles(lightTheme)).toEqual(
        expect.objectContaining({
          width: "592px",
          height: "66px",
          backgroundColor: "#fbfcfe",
        }),
      );
      expect(stepperPanelSidebarStyles(lightTheme, true)).toEqual(
        expect.objectContaining({
          alignItems: "center",
          gap: "5px",
          width: "77px",
        }),
      );
      expect(stepperPanelStepsStyles(true)).toEqual(
        expect.objectContaining({ width: "76px" }),
      );
      expect(stepperPanelStepStyles(false, true)).toEqual(
        expect.objectContaining({ width: "76px" }),
      );
      expect(stepperPanelStepContentStyles(true)).toEqual(
        expect.objectContaining({ width: "73px" }),
      );
      expect(stepperPanelCollapseWrapperStyles()).toEqual(
        expect.objectContaining({
          alignSelf: "flex-end",
          margin: 0,
          width: "68px",
        }),
      );
      expect(stepperPanelCollapseWrapperStyles(true)).toEqual(
        expect.objectContaining({
          alignSelf: "center",
          margin: "0 auto",
          width: "56px",
        }),
      );
    });

    it("maps dark panel tokens to the Figma CSS values", () => {
      expect(stepperPanelRootStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
          boxShadow: "0px 4px 4px rgba(6, 34, 66, 0.33)",
        }),
      );
      expect(stepperPanelSidebarStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
          borderRight: "1px solid #4f628d",
        }),
      );
      expect(stepperPanelFooterStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
        }),
      );
    });

    it("maps step state tokens in both themes", () => {
      expect(stepperPanelIndicatorStyles(lightTheme, "current")).toEqual(
        expect.objectContaining({ backgroundColor: "#187adc" }),
      );
      expect(stepperPanelIndicatorStyles(lightTheme, "completed")).toEqual(
        expect.objectContaining({ border: "2px solid #187adc" }),
      );
      expect(stepperPanelIndicatorStyles(lightTheme, "disabled")).toEqual(
        expect.objectContaining({ border: "2px solid #e8eefb" }),
      );
      expect(stepperPanelStepNumberStyles(lightTheme, "current")).toEqual(
        expect.objectContaining({ color: "#e8e9ea" }),
      );
      expect(stepperPanelStepNumberStyles(lightTheme, "idle")).toEqual(
        expect.objectContaining({ color: "#3c4551" }),
      );
      expect(stepperPanelStepTitleStyles(lightTheme, "disabled")).toEqual(
        expect.objectContaining({ color: "#c5c7cb" }),
      );
      expect(stepperPanelIndicatorStyles(darkTheme, "idle")).toEqual(
        expect.objectContaining({ border: "2px solid #263b62" }),
      );
      expect(stepperPanelStepNumberStyles(darkTheme, "current")).toEqual(
        expect.objectContaining({ color: "#00142b" }),
      );
      expect(stepperPanelActiveLineStyles(darkTheme, "current")).toEqual(
        expect.objectContaining({ backgroundColor: "#1bcdff" }),
      );
      expect(stepperPanelCollapseButtonStyles(darkTheme)).toEqual(
        expect.objectContaining({
          border: "2px solid #4f628d",
          color: "#e8e9ea",
        }),
      );
    });

    it("maps content heights for footer and non-footer layouts", () => {
      expect(stepperPanelContentStyles(true)).toEqual(
        expect.objectContaining({ height: "414px" }),
      );
      expect(stepperPanelContentStyles(false)).toEqual(
        expect.objectContaining({ height: "480px" }),
      );
    });

    it("maps light stepped modal tokens to the Figma CSS values", () => {
      expect(steppedModalRootStyles(lightTheme)).toEqual(
        expect.objectContaining({
          width: "768px",
          height: "416px",
          backgroundColor: "#fbfcfe",
          boxShadow: "0px 4px 12px rgba(200, 213, 245, 0.5)",
          borderRadius: "8px",
        }),
      );
      expect(steppedModalHeaderStyles).toEqual(
        expect.objectContaining({
          padding: "24px",
          width: "768px",
          height: "102px",
        }),
      );
      expect(steppedModalContentStyles).toEqual(
        expect.objectContaining({
          padding: "0px 24px 24px",
          width: "768px",
          height: "234px",
        }),
      );
      expect(steppedModalStepSeriesStyles).toEqual(
        expect.objectContaining({
          padding: "16px 48px 8px",
          width: "720px",
          height: "72px",
        }),
      );
      expect(steppedModalStepStyles).toEqual(
        expect.objectContaining({
          width: "32px",
          height: "48px",
          gap: "4px",
        }),
      );
      expect(steppedModalTitleStyles(lightTheme)).toEqual(
        expect.objectContaining({
          color: "#00142b",
          fontSize: "24px",
          lineHeight: "30px",
        }),
      );
      expect(steppedModalFooterStyles).toEqual(
        expect.objectContaining({
          padding: "24px",
          width: "768px",
          height: "80px",
        }),
      );
      expect(steppedModalActionsStyles).toEqual(
        expect.objectContaining({
          width: "672px",
          height: "32px",
          gap: "8px",
        }),
      );
    });

    it("maps stepped modal states in both themes", () => {
      expect(steppedModalIndicatorStyles(lightTheme, "completed")).toEqual(
        expect.objectContaining({ border: "2px solid #187adc" }),
      );
      expect(steppedModalIndicatorStyles(lightTheme, "current")).toEqual(
        expect.objectContaining({ backgroundColor: "#187adc" }),
      );
      expect(steppedModalIndicatorStyles(lightTheme, "idle")).toEqual(
        expect.objectContaining({ border: "2px solid #e8eefb" }),
      );
      expect(steppedModalConnectorStyles(lightTheme, true)).toEqual(
        expect.objectContaining({
          "&::before": expect.objectContaining({
            borderTop: "2px solid #187adc",
          }),
        }),
      );
      expect(steppedModalConnectorStyles(darkTheme, false)).toEqual(
        expect.objectContaining({
          "&::before": expect.objectContaining({
            borderTop: "1px solid #4f628d",
          }),
        }),
      );
      expect(steppedModalBodyTextStyles(darkTheme)).toEqual(
        expect.objectContaining({ color: "#e8e9ea" }),
      );
      expect(steppedModalRootStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
          boxShadow: "0px 4px 12px rgba(6, 34, 66, 0.5)",
        }),
      );
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderStepper({}, ThemeMode.Dark)).not.toThrow();
    });
  });
});

describe("StepperModal", () => {
  it("renders the modal title, subtitle, steps, description, content, and footer", () => {
    render(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <StepperModal
          open
          title="Workflow title"
          subtitle="Optional descriptor"
          steps={modalSteps}
          activeStep={1}
          description="Workflow description"
          footer={<button type="button">Next</button>}
        >
          <span>Instance Slot</span>
        </StepperModal>
      </ThemeProvider>,
    );

    expect(screen.getByText("Workflow title")).toBeInTheDocument();
    expect(screen.getByText("Optional descriptor")).toBeInTheDocument();
    expect(screen.getByText("Workflow description")).toBeInTheDocument();
    expect(screen.getByText("Instance Slot")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("uses dialog open state to show and hide the modal", async () => {
    const { rerender } = render(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <StepperModal
          open
          title="Workflow title"
          steps={modalSteps}
          activeStep={1}
        />
      </ThemeProvider>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    rerender(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <StepperModal
          open={false}
          title="Workflow title"
          steps={modalSteps}
          activeStep={1}
        />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders without subtitle, description, content, or footer", () => {
    expect(() =>
      render(
        <ThemeProvider defaultMode={ThemeMode.Dark}>
          <StepperModal
            open
            title="Workflow title"
            steps={modalSteps}
            activeStep={0}
          />
        </ThemeProvider>,
      ),
    ).not.toThrow();
  });
});
