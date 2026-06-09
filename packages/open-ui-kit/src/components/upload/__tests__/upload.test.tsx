/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Upload } from "../components/upload";
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
        document.querySelector(".MuiLinearProgress-root"),
      ).toBeInTheDocument();
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
  });
});
