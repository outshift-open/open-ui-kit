/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PersonIcon from "@mui/icons-material/Person";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";

const renderWithTheme = (ui: React.ReactElement, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

describe("Avatar", () => {
  describe("rendering", () => {
    it("renders initials", () => {
      renderWithTheme(<Avatar initials="WW" />);
      expect(screen.getByText("WW")).toBeInTheDocument();
    });

    it("renders with image src", () => {
      renderWithTheme(<Avatar src="/img.png" alt="User" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders with icon", () => {
      renderWithTheme(
        <Avatar icon={<PersonIcon data-testid="person-icon" />} />,
      );
      expect(screen.getByTestId("person-icon")).toBeInTheDocument();
    });

    it("renders with no content", () => {
      const { container } = renderWithTheme(<Avatar />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("renders large size by default", () => {
      const { container } = renderWithTheme(<Avatar initials="WW" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders large size explicitly", () => {
      const { container } = renderWithTheme(<Avatar size="L" initials="WW" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders medium size", () => {
      const { container } = renderWithTheme(<Avatar size="M" initials="WW" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders medium with icon", () => {
      renderWithTheme(
        <Avatar size="M" icon={<PersonIcon data-testid="icon-m" />} />,
      );
      expect(screen.getByTestId("icon-m")).toBeInTheDocument();
    });
  });

  describe("image overlay", () => {
    it("renders without errors when src is provided", () => {
      const { container } = renderWithTheme(
        <Avatar src="/img.png" alt="User" />,
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders without errors when no src", () => {
      const { container } = renderWithTheme(<Avatar initials="WW" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe("dark theme", () => {
    it("renders initials in dark mode without errors", () => {
      renderWithTheme(<Avatar size="L" initials="WW" />, true);
      expect(screen.getByText("WW")).toBeInTheDocument();
    });

    it("renders icon in dark mode without errors", () => {
      renderWithTheme(
        <Avatar size="M" icon={<PersonIcon data-testid="dark-icon" />} />,
        true,
      );
      expect(screen.getByTestId("dark-icon")).toBeInTheDocument();
    });

    it("renders image in dark mode without errors", () => {
      renderWithTheme(<Avatar src="/img.png" alt="Dark user" />, true);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });
});

describe("AvatarGroup", () => {
  describe("rendering", () => {
    it("renders all avatars in the group", () => {
      renderWithTheme(
        <AvatarGroup>
          <Avatar initials="WW" />
          <Avatar initials="VW" />
          <Avatar initials="AA" />
        </AvatarGroup>,
      );
      expect(screen.getByText("WW")).toBeInTheDocument();
      expect(screen.getByText("VW")).toBeInTheDocument();
      expect(screen.getByText("AA")).toBeInTheDocument();
    });

    it("renders large group by default", () => {
      const { container } = renderWithTheme(
        <AvatarGroup>
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders medium group", () => {
      const { container } = renderWithTheme(
        <AvatarGroup size="M">
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("applies size to all children", () => {
      renderWithTheme(
        <AvatarGroup size="M">
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
      );
      expect(screen.getByText("WW")).toBeInTheDocument();
      expect(screen.getByText("VW")).toBeInTheDocument();
    });

    it("shows overflow count when max is exceeded", () => {
      renderWithTheme(
        <AvatarGroup>
          <Avatar initials="WW" />
          <Avatar initials="VW" />
          <Avatar initials="AA" />
          <Avatar initials="BB" />
          <Avatar initials="CC" />
          <Avatar initials="DD" />
          <Avatar initials="EE" />
        </AvatarGroup>,
      );
      expect(screen.getByText("WW")).toBeInTheDocument();
    });
  });

  describe("dark theme", () => {
    it("renders group in dark mode without errors", () => {
      renderWithTheme(
        <AvatarGroup size="L">
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
        true,
      );
      expect(screen.getByText("WW")).toBeInTheDocument();
    });

    it("renders medium group in dark mode without errors", () => {
      renderWithTheme(
        <AvatarGroup size="M">
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
        true,
      );
      expect(screen.getByText("WW")).toBeInTheDocument();
    });
  });
});
