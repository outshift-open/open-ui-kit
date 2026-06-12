/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Upload } from "../components/upload";
import {
  getUploadAttachmentIconStyles,
  getUploadFileListItemStyles,
  getUploadFileNameStyles,
  getUploadFileRowStyles,
  getUploadHintStyles,
  getUploadLabelStyles,
  getUploadProgressFillStyles,
  getUploadProgressTrackStyles,
  getUploadTriggerIconStyles,
  getUploadTriggerStyles,
} from "../styles";
import type { UploadFile } from "../types";

const renderUpload = (
  props: Partial<React.ComponentProps<typeof Upload>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Upload onFilesChange={jest.fn()} {...props} />
    </ThemeProvider>,
  );

const files: UploadFile[] = [
  { id: "f1", name: "example-file-1.png", status: "idle" },
  { id: "f2", name: "example-file-2.png", status: "uploading", progress: 50 },
  {
    id: "f3",
    name: "example-file-3.png",
    status: "error",
    errorMessage: "Too large.",
  },
];

type StyleObject = Record<string, unknown>;

describe("Upload", () => {
  describe("rendering", () => {
    it("renders drag variant by default", () => {
      renderUpload();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders default drag label", () => {
      renderUpload();
      expect(
        screen.getByText("Click or drag file to this area to upload"),
      ).toBeInTheDocument();
    });

    it("renders custom label", () => {
      renderUpload({ label: "Drop files here" });
      expect(screen.getByText("Drop files here")).toBeInTheDocument();
    });

    it("renders hint text", () => {
      renderUpload({ hint: "PDF only" });
      expect(screen.getByText("PDF only")).toBeInTheDocument();
    });

    it("renders button variant", () => {
      renderUpload({ variant: "button" });
      expect(
        screen.getByRole("button", { name: /upload/i }),
      ).toBeInTheDocument();
    });

    it("renders in dark mode without throwing", () => {
      expect(() => renderUpload({}, true)).not.toThrow();
    });
  });

  describe("file list", () => {
    it("renders file names", () => {
      renderUpload({ files });
      expect(screen.getByText("example-file-1.png")).toBeInTheDocument();
      expect(screen.getByText("example-file-2.png")).toBeInTheDocument();
      expect(screen.getByText("example-file-3.png")).toBeInTheDocument();
    });

    it("renders error message for error files", () => {
      renderUpload({ files });
      expect(screen.getByText("Too large.")).toBeInTheDocument();
    });

    it("renders progress bar for uploading files", () => {
      renderUpload({ files });
      expect(
        screen.getByRole("progressbar", {
          name: "example-file-2.png upload progress",
        }),
      ).toBeInTheDocument();
    });

    it("renders spinner for uploading files without progress", () => {
      renderUpload({
        files: [{ id: "f1", name: "example-file-1.png", status: "uploading" }],
      });
      expect(
        screen.getAllByLabelText("example-file-1.png uploading"),
      ).toHaveLength(2);
    });

    it("renders thumbnail file rows", () => {
      renderUpload({
        files: [
          {
            id: "f1",
            name: "thumbnail.png",
            status: "idle",
            thumbnailSrc: "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          },
        ],
      });
      expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
    });

    it("calls onFileRemove when remove button is clicked", () => {
      const onFileRemove = jest.fn();
      renderUpload({ files: [{ id: "f1", name: "file.png" }], onFileRemove });
      fireEvent.click(screen.getByLabelText("Remove file.png"));
      expect(onFileRemove).toHaveBeenCalledWith("f1");
    });
  });

  describe("token coverage", () => {
    it("renders light theme tokens without throwing", () => {
      expect(() => renderUpload({ files })).not.toThrow();
    });

    it("renders dark theme tokens without throwing", () => {
      expect(() => renderUpload({ files }, true)).not.toThrow();
    });

    it("matches light drag trigger tokens from the CSS spec", () => {
      const defaultStyles = getUploadTriggerStyles(
        lightTheme,
        "md",
        false,
      ) as StyleObject;
      const activeStyles = getUploadTriggerStyles(
        lightTheme,
        "md",
        true,
      ) as StyleObject;
      const iconStyles = getUploadTriggerIconStyles(lightTheme, "md", false);
      const labelStyles = getUploadLabelStyles(lightTheme, "md", false);
      const hintStyles = getUploadHintStyles(lightTheme);

      expect(defaultStyles).toMatchObject({
        padding: "48px 24px",
        gap: "8px",
        minHeight: "166px",
        border: `2px dashed ${lightTheme.palette.vars.controlBorderDefault}`,
        borderRadius: "8px",
        backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
      });
      expect(activeStyles).toMatchObject({
        border: `2px dashed ${lightTheme.palette.vars.interactivePrimaryDefaultActive}`,
        backgroundColor: lightTheme.palette.vars.interactivePrimaryWeakDefault,
      });
      expect(iconStyles).toMatchObject({
        width: "20px",
        height: "20px",
        color: lightTheme.palette.vars.baseTextDefault,
      });
      expect(labelStyles).toMatchObject({
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        color: lightTheme.palette.vars.baseTextDefault,
      });
      expect(hintStyles).toMatchObject({
        fontSize: "12px",
        lineHeight: "18px",
        color: lightTheme.palette.vars.baseTextMedium,
      });
      expect(lightTheme.palette.vars.interactivePrimaryDefaultActive).toBe(
        "#0051af",
      );
      expect(lightTheme.palette.vars.interactivePrimaryWeakDefault).toBe(
        "#e8f1ff",
      );
    });

    it("matches dark drag trigger tokens from the CSS spec", () => {
      const defaultStyles = getUploadTriggerStyles(
        darkTheme,
        "sm",
        false,
      ) as StyleObject;
      const activeStyles = getUploadTriggerStyles(
        darkTheme,
        "sm",
        true,
      ) as StyleObject;
      const iconStyles = getUploadTriggerIconStyles(darkTheme, "sm", false);
      const labelStyles = getUploadLabelStyles(darkTheme, "sm", false);
      const hintStyles = getUploadHintStyles(darkTheme);

      expect(defaultStyles).toMatchObject({
        padding: "36px 24px",
        gap: "4px",
        minHeight: "132px",
        border: `2px dashed ${darkTheme.palette.vars.controlBorderDefault}`,
        backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
      });
      expect(activeStyles).toMatchObject({
        border: `2px dashed ${darkTheme.palette.vars.interactivePrimaryDefaultActive}`,
        backgroundColor: darkTheme.palette.vars.interactivePrimaryWeakDefault,
      });
      expect(iconStyles).toMatchObject({
        width: "16px",
        height: "16px",
        color: darkTheme.palette.vars.baseTextDefault,
      });
      expect(labelStyles).toMatchObject({
        fontSize: "12px",
        lineHeight: "18px",
        color: darkTheme.palette.vars.baseTextDefault,
      });
      expect(hintStyles).toMatchObject({
        color: darkTheme.palette.vars.baseTextMedium,
      });
      expect(darkTheme.palette.vars.interactivePrimaryDefaultActive).toBe(
        "#12c1ff",
      );
      expect(darkTheme.palette.vars.interactivePrimaryWeakDefault).toBe(
        "#062242",
      );
    });

    it("matches light file row, progress, and status tokens from the CSS spec", () => {
      expect(
        getUploadFileListItemStyles(lightTheme, "md", false),
      ).toMatchObject({
        borderTop: `1px solid ${lightTheme.palette.vars.interactiveSecondaryWeakHover}`,
        borderBottom: `1px solid ${lightTheme.palette.vars.interactiveSecondaryWeakHover}`,
        padding: "4px 0px",
        marginBottom: "-1px",
      });
      expect(
        getUploadFileRowStyles(lightTheme, "md", "idle", false),
      ).toMatchObject({
        padding: "4px 8px 4px 4px",
        gap: "24px",
        minHeight: "36px",
        borderRadius: "6px",
      });
      expect(
        getUploadFileNameStyles(lightTheme, "sm", "idle", false),
      ).toMatchObject({
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
        color: lightTheme.palette.vars.baseTextDefault,
      });
      expect(
        getUploadFileNameStyles(lightTheme, "md", "uploading", false),
      ).toMatchObject({
        color: lightTheme.palette.vars.baseTextDisabled,
      });
      expect(getUploadAttachmentIconStyles(lightTheme, "idle")).toMatchObject({
        color: lightTheme.palette.vars.controlIconWeak,
      });
      expect(getUploadProgressTrackStyles(lightTheme)).toMatchObject({
        width: "92px",
        height: "8px",
        backgroundColor: lightTheme.palette.vars.baseBorderDefault,
      });
      expect(getUploadProgressFillStyles(lightTheme, 67)).toMatchObject({
        width: "67%",
        backgroundColor: lightTheme.palette.vars.accentADefault,
      });
      expect(lightTheme.palette.vars.interactiveSecondaryWeakHover).toBe(
        "#e8eefb",
      );
      expect(lightTheme.palette.vars.baseTextDisabled).toBe("#c5c7cb");
      expect(lightTheme.palette.vars.accentADefault).toBe("#5c6ddd");
    });

    it("matches dark file row, progress, and status tokens from the CSS spec", () => {
      expect(getUploadFileListItemStyles(darkTheme, "md", false)).toMatchObject(
        {
          borderTop: `1px solid ${darkTheme.palette.vars.interactiveSecondaryWeakHover}`,
          borderBottom: `1px solid ${darkTheme.palette.vars.interactiveSecondaryWeakHover}`,
        },
      );
      expect(
        getUploadFileRowStyles(darkTheme, "sm", "error", true),
      ).toMatchObject({
        padding: "4px",
        minHeight: "40px",
        borderRadius: "4px",
        backgroundColor: darkTheme.palette.vars.negativeBackgroundWeak,
      });
      expect(
        getUploadFileNameStyles(darkTheme, "md", "uploading", false),
      ).toMatchObject({
        color: darkTheme.palette.vars.baseTextDisabled,
      });
      expect(getUploadProgressTrackStyles(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.baseBorderDefault,
      });
      expect(getUploadProgressFillStyles(darkTheme, 67)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.accentADefault,
      });
      expect(darkTheme.palette.vars.interactiveSecondaryWeakHover).toBe(
        "#263b62",
      );
      expect(darkTheme.palette.vars.baseTextDisabled).toBe("#777d85");
      expect(darkTheme.palette.vars.accentADefault).toBe("#bac1ff");
    });
  });
});
