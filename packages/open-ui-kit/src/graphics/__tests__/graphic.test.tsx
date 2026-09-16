/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Graphic, type GraphicFontSize, graphicFontSizes } from "../graphic";

const sizes: GraphicFontSize[] = ["base", "small", "medium", "large", "xlarge"];

describe("Graphic", () => {
  it.each(sizes)("maps %s to its graphics-only size", (fontSize) => {
    render(<Graphic data-testid="graphic" fontSize={fontSize} />);

    expect(screen.getByTestId("graphic")).toHaveStyle({
      fontSize: graphicFontSizes[fontSize],
    });
  });

  it("uses medium as the default graphic size", () => {
    render(<Graphic data-testid="graphic" />);

    expect(screen.getByTestId("graphic")).toHaveStyle({
      fontSize: graphicFontSizes.medium,
    });
  });

  it("allows sx to override the predefined graphic size", () => {
    render(
      <Graphic
        data-testid="graphic"
        fontSize="base"
        sx={{ fontSize: "40px" }}
      />,
    );

    expect(screen.getByTestId("graphic")).toHaveStyle({ fontSize: "40px" });
  });
});
