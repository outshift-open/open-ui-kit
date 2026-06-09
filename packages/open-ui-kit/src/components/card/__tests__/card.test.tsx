/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
} from "../components/card";
import CardDescription from "../components/card-description";
import CardSubheader from "../components/card-subheader";
import {
  cardActiveStyles,
  cardDisabledStyles,
  cardInteractiveStyles,
  cardRootStyles,
} from "../styles";

const renderCard = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("Card", () => {
  describe("rendering", () => {
    it("renders card with content", () => {
      renderCard(
        <Card>
          <CardHeader title="Card title" />
          <CardContent>
            <CardDescription>Description text</CardDescription>
          </CardContent>
        </Card>,
      );
      expect(screen.getByText("Card title")).toBeInTheDocument();
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("renders card as a region by default", () => {
      renderCard(<Card data-testid="card">Content</Card>);
      expect(screen.getByTestId("card")).toBeInTheDocument();
    });
  });

  describe("CardHeader", () => {
    it("renders title", () => {
      renderCard(
        <Card>
          <CardHeader title="My title" />
        </Card>,
      );
      expect(screen.getByText("My title")).toBeInTheDocument();
    });

    it("renders subheader when provided", () => {
      renderCard(
        <Card>
          <CardHeader title="Title" subheader="Sub" />
        </Card>,
      );
      expect(screen.getByText("Sub")).toBeInTheDocument();
    });
  });

  describe("CardContent", () => {
    it("renders children", () => {
      renderCard(
        <Card>
          <CardContent>Inner content</CardContent>
        </Card>,
      );
      expect(screen.getByText("Inner content")).toBeInTheDocument();
    });
  });

  describe("CardActions", () => {
    it("renders action buttons", () => {
      renderCard(
        <Card>
          <CardActions>
            <button>Action</button>
          </CardActions>
        </Card>,
      );
      expect(
        screen.getByRole("button", { name: "Action" }),
      ).toBeInTheDocument();
    });
  });

  describe("CardActionArea", () => {
    it("renders as a button for clickable cards", () => {
      renderCard(
        <CardActionArea>
          <Card>Clickable card</Card>
        </CardActionArea>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("design token styles", () => {
    it("maps light card surface tokens to the Figma CSS values", () => {
      expect(cardRootStyles(lightTheme)).toEqual(
        expect.objectContaining({
          alignItems: "flex-start",
          backgroundColor: "#fbfcfe",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(200, 213, 245, 0.33)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          justifyContent: "center",
          padding: "16px",
        }),
      );
      expect(cardInteractiveStyles(lightTheme)).toEqual({
        border: "1px solid #0051af",
      });
      expect(cardActiveStyles(lightTheme)).toEqual({
        border: "1px solid #0051af",
        boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
      });
      expect(cardDisabledStyles(lightTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#f5f8fd",
          border: "1px solid #e8eefb",
          boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
          color: "#c5c7cb",
        }),
      );
    });

    it("maps dark card surface tokens to the Figma CSS values", () => {
      expect(cardRootStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
          boxShadow: "0px 4px 4px rgba(6, 34, 66, 0.33)",
          color: "#e8e9ea",
        }),
      );
      expect(cardInteractiveStyles(darkTheme)).toEqual({
        border: "1px solid #12c1ff",
      });
      expect(cardActiveStyles(darkTheme)).toEqual({
        border: "1px solid #12c1ff",
        boxShadow: "0px 2px 5px rgba(6, 34, 66, 0.4)",
      });
      expect(cardDisabledStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#0d274d",
          border: "1px solid #263b62",
          boxShadow: "0px 2px 5px rgba(6, 34, 66, 0.4)",
          color: "#777d85",
        }),
      );
    });

    it("applies disabled state through the public disabled prop", () => {
      renderCard(
        <Card data-testid="card" disabled>
          <CardHeader title="Disabled title" subheader="Disabled subheader" />
        </Card>,
      );

      expect(screen.getByTestId("card")).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getByTestId("card")).toHaveStyle({
        backgroundColor: "#f5f8fd",
        border: "1px solid #e8eefb",
      });
    });

    it("lets consumer sx override internal card spacing", () => {
      renderCard(
        <Card data-testid="card" sx={{ padding: "24px" }}>
          Content
        </Card>,
      );

      expect(screen.getByTestId("card")).toHaveStyle({ padding: "24px" });
    });
  });

  describe("CardDescription", () => {
    it("renders description text", () => {
      renderCard(<CardDescription>Some description</CardDescription>);
      expect(screen.getByText("Some description")).toBeInTheDocument();
    });

    it("renders without throwing in light mode", () => {
      expect(() =>
        renderCard(<CardDescription>Light description</CardDescription>),
      ).not.toThrow();
    });

    it("renders without throwing in dark mode", () => {
      expect(() =>
        renderCard(<CardDescription>Dark description</CardDescription>, true),
      ).not.toThrow();
    });
  });

  describe("CardSubheader", () => {
    it("renders subheader text", () => {
      renderCard(<CardSubheader>March 26, 2025</CardSubheader>);
      expect(screen.getByText("March 26, 2025")).toBeInTheDocument();
    });

    it("renders without throwing in light mode", () => {
      expect(() =>
        renderCard(<CardSubheader>Light subheader</CardSubheader>),
      ).not.toThrow();
    });

    it("renders without throwing in dark mode", () => {
      expect(() =>
        renderCard(<CardSubheader>Dark subheader</CardSubheader>, true),
      ).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("renders full card composition in light mode without throwing", () => {
      expect(() =>
        renderCard(
          <Card>
            <CardHeader title="Title" />
            <CardContent>
              <CardSubheader>Subheader</CardSubheader>
              <CardDescription>Description</CardDescription>
            </CardContent>
            <CardActions>
              <button>Action</button>
            </CardActions>
          </Card>,
        ),
      ).not.toThrow();
    });

    it("renders clickable card in light mode without throwing", () => {
      expect(() =>
        renderCard(
          <CardActionArea>
            <Card>
              <CardHeader title="Clickable" />
            </Card>
          </CardActionArea>,
        ),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders full card composition in dark mode without throwing", () => {
      expect(() =>
        renderCard(
          <Card>
            <CardHeader title="Title" />
            <CardContent>
              <CardSubheader>Subheader</CardSubheader>
              <CardDescription>Description</CardDescription>
            </CardContent>
            <CardActions>
              <button>Action</button>
            </CardActions>
          </Card>,
          true,
        ),
      ).not.toThrow();
    });

    it("renders clickable card in dark mode without throwing", () => {
      expect(() =>
        renderCard(
          <CardActionArea>
            <Card>
              <CardHeader title="Clickable dark" />
            </Card>
          </CardActionArea>,
          true,
        ),
      ).not.toThrow();
    });
  });
});
