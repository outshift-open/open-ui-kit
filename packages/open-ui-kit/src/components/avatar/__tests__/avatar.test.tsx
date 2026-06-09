/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PersonIcon from "@mui/icons-material/Person";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";

const renderWithTheme = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

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

    it("forwards props to the root avatar", () => {
      renderWithTheme(<Avatar data-testid="avatar-root" initials="WW" />);
      expect(screen.getByTestId("avatar-root")).toBeInTheDocument();
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
      expect(
        container.querySelector(".avatar-image-overlay"),
      ).toBeInTheDocument();
    });

    it("renders without errors when no src", () => {
      const { container } = renderWithTheme(<Avatar initials="WW" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe("token coverage", () => {
    it("uses light theme avatar dimensions and tokens", () => {
      renderWithTheme(<Avatar data-testid="avatar-root" initials="WW" />);

      const avatar = screen.getByTestId("avatar-root");
      const styles = getComputedStyle(avatar);

      expect(styles.width).toBe("40px");
      expect(styles.height).toBe("40px");
      expect(styles.borderRadius).toBe("50px");
      expect(styles.backgroundColor).toBe("rgb(232, 241, 255)");
      expect(styles.color).toBe("rgb(24, 122, 220)");
      expect(styles.fontSize).toBe("16px");
      expect(styles.fontWeight).toBe("600");
      expect(styles.lineHeight).toBe("133%");
      expect(styles.letterSpacing).toBe("0.15px");
      expect(lightTheme.palette.vars.brandBackgroundPrimaryWeak).toBe(
        "#e8f1ff",
      );
      expect(lightTheme.palette.vars.brandBackgroundPrimaryMedium).toBe(
        "#9bcaff",
      );
      expect(lightTheme.palette.vars.brandIconPrimaryDefault).toBe("#187adc");
      expect(lightTheme.palette.vars.brandIconPrimaryStrong).toBe("#0051af");
    });

    it("uses medium avatar dimensions and icon sizing", () => {
      renderWithTheme(
        <Avatar
          data-testid="avatar-root"
          size="M"
          icon={<PersonIcon data-testid="person-icon" />}
        />,
      );

      const avatar = screen.getByTestId("avatar-root");
      const icon = screen.getByTestId("person-icon");
      const avatarStyles = getComputedStyle(avatar);
      const iconStyles = getComputedStyle(icon);

      expect(avatarStyles.width).toBe("32px");
      expect(avatarStyles.height).toBe("32px");
      expect(avatarStyles.fontSize).toBe("12px");
      expect(avatarStyles.letterSpacing).toBe("normal");
      expect(iconStyles.width).toBe("20px");
      expect(iconStyles.height).toBe("20px");
      expect(iconStyles.color).toBe("rgb(24, 122, 220)");
    });

    it("uses dark theme avatar tokens", () => {
      renderWithTheme(<Avatar data-testid="avatar-root" initials="WW" />, true);

      const styles = getComputedStyle(screen.getByTestId("avatar-root"));

      expect(styles.backgroundColor).toBe("rgb(6, 34, 66)");
      expect(styles.color).toBe("rgb(27, 205, 255)");
      expect(darkTheme.palette.vars.brandBackgroundPrimaryWeak).toBe("#062242");
      expect(darkTheme.palette.vars.brandBackgroundPrimaryMedium).toBe(
        "#263b62",
      );
      expect(darkTheme.palette.vars.brandIconPrimaryDefault).toBe("#1bcdff");
      expect(darkTheme.palette.vars.brandIconPrimaryStrong).toBe("#12c1ff");
    });

    it("uses the CSS-specified image overlay token", () => {
      const { container } = renderWithTheme(
        <Avatar src="/img.png" alt="User" />,
      );

      const overlay = container.querySelector(".avatar-image-overlay");

      expect(overlay).toBeInTheDocument();
      expect(getComputedStyle(overlay as Element).backgroundColor).toBe(
        "rgba(0, 81, 175, 0.098)",
      );
      expect(lightTheme.palette.vars.interactivePrimaryWeakDisabled).toBe(
        "#0051af19",
      );
      expect(darkTheme.palette.vars.interactivePrimaryWeakDisabled).toBe(
        "#00142b19",
      );
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

    it("forwards props to the root avatar group", () => {
      renderWithTheme(
        <AvatarGroup data-testid="avatar-group-root">
          <Avatar initials="WW" />
          <Avatar initials="VW" />
        </AvatarGroup>,
      );
      expect(screen.getByTestId("avatar-group-root")).toBeInTheDocument();
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
      expect(screen.getByText("+3")).toBeInTheDocument();
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
