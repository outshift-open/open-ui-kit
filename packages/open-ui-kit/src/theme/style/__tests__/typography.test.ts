/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "node:fs";
import path from "node:path";
import { typography } from "../typography";

const expectedScale = {
  h1: {
    fontSize: "60px",
    lineHeight: "64px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  h2: {
    fontSize: "48px",
    lineHeight: "52px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  h3: {
    fontSize: "36px",
    lineHeight: "44px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  h4: {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  h5: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  h6: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  headingSubSection: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  subtitle1: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "0.15px",
  },
  subtitle2: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "0.1px",
  },
  body1Semibold: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
    letterSpacing: "0px",
  },
  body2Semibold: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 600,
    letterSpacing: "0px",
  },
  body1: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.5px",
  },
  body2: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "0.25px",
  },
  captionSemibold: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    letterSpacing: "0.4px",
  },
  captionMedium: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
    letterSpacing: "0.4px",
  },
  caption: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 400,
    letterSpacing: "0.4px",
  },
  button: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    letterSpacing: "0px",
  },
  overline: {
    fontSize: "10px",
    lineHeight: "12px",
    fontWeight: 500,
    letterSpacing: "0.4px",
    textTransform: "none",
  },
} as const;

describe("typography", () => {
  it("matches the Venture typography scale", () => {
    for (const [variant, expected] of Object.entries(expectedScale)) {
      expect(typography[variant as keyof typeof expectedScale]).toMatchObject(
        expected,
      );
    }
  });

  it("uses the expected font families", () => {
    expect(typography.fontFamily).toBe("Inter, sans-serif");

    for (const variant of [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "headingSubSection",
    ] as const) {
      expect(typography[variant]).toMatchObject({
        fontFamily: "Sharp Sans, sans-serif",
      });
    }
  });

  it("only references font files that exist", () => {
    const typographyCssPath = path.resolve(process.cwd(), "src/typography.css");
    const typographyCss = fs.readFileSync(typographyCssPath, "utf8");
    const fontUrls = [...typographyCss.matchAll(/url\("\.\/(.+?)"\)/g)].map(
      (match) => match[1],
    );

    expect(fontUrls).toHaveLength(16);

    for (const fontUrl of fontUrls) {
      expect(
        fs.existsSync(path.resolve(path.dirname(typographyCssPath), fontUrl)),
      ).toBe(true);
    }
  });
});
