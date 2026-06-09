/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextDecoder, TextEncoder } from "util";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GeneralSize, IconPosition } from "@/common";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Link as LinkIcon } from "@/custom-icons";
import {
  getLinkColor,
  getLinkRootStyles,
  getLinkTypographyStyles,
  iconStyle,
  linkStackStyle,
} from "../styles";
import { LinkColorEnum, LinkType } from "../types";

Object.assign(global, { TextDecoder, TextEncoder });

const { BrowserRouter } =
  jest.requireActual<typeof import("react-router-dom")>("react-router-dom");
const { Link } = jest.requireActual<typeof import("..")>("..");

const renderLink = (children = "Link", dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <BrowserRouter>
        <Link href="/docs">{children}</Link>
      </BrowserRouter>
    </ThemeProvider>,
  );

describe("Link", () => {
  it("renders a router link with the expected target", () => {
    renderLink();

    expect(screen.getByRole("link", { name: "Link" })).toHaveAttribute(
      "href",
      "/docs",
    );
  });

  it("uses light theme primary tokens for interactive states", () => {
    expect(getLinkColor(lightTheme, LinkColorEnum.Primary, "default")).toBe(
      lightTheme.palette.vars.interactivePrimaryDefaultDefault,
    );
    expect(getLinkColor(lightTheme, LinkColorEnum.Primary, "hover")).toBe(
      lightTheme.palette.vars.interactivePrimaryDefaultHover,
    );
    expect(getLinkColor(lightTheme, LinkColorEnum.Primary, "pressed")).toBe(
      lightTheme.palette.vars.interactivePrimaryDefaultActive,
    );
    expect(getLinkColor(lightTheme, LinkColorEnum.Primary, "disabled")).toBe(
      lightTheme.palette.vars.interactivePrimaryDefaultDisabled,
    );
  });

  it("uses dark theme secondary tokens for interactive states", () => {
    expect(getLinkColor(darkTheme, LinkColorEnum.Secondary, "default")).toBe(
      darkTheme.palette.vars.interactiveSecondaryDefaultDefault,
    );
    expect(getLinkColor(darkTheme, LinkColorEnum.Secondary, "hover")).toBe(
      darkTheme.palette.vars.interactiveSecondaryDefaultHover,
    );
    expect(getLinkColor(darkTheme, LinkColorEnum.Secondary, "pressed")).toBe(
      darkTheme.palette.vars.interactiveSecondaryDefaultActive,
    );
    expect(getLinkColor(darkTheme, LinkColorEnum.Secondary, "disabled")).toBe(
      darkTheme.palette.vars.interactiveSecondaryDefaultDisabled,
    );
  });

  it("matches helper typography and icon sizes", () => {
    expect(
      getLinkTypographyStyles(
        GeneralSize.Large,
        LinkType.StandaloneBold,
        lightTheme,
      ),
    ).toMatchObject({
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "125%",
      letterSpacing: "0px",
    });
    expect(
      getLinkTypographyStyles(
        GeneralSize.Medium,
        LinkType.StandaloneRegular,
        lightTheme,
      ),
    ).toMatchObject({ fontSize: "14px", lineHeight: "125%" });
    expect(
      getLinkTypographyStyles(
        GeneralSize.Small,
        LinkType.UnderlineRegular,
        lightTheme,
      ),
    ).toMatchObject({ fontSize: "12px", lineHeight: "125%" });
    expect(iconStyle[GeneralSize.Large]).toMatchObject({
      width: "24px",
      height: "24px",
    });
    expect(iconStyle[GeneralSize.Medium]).toMatchObject({
      width: "20px",
      height: "20px",
    });
    expect(iconStyle[GeneralSize.Small]).toMatchObject({
      width: "16px",
      height: "16px",
    });
  });

  it("matches helper spacing and focus styles", () => {
    expect(linkStackStyle(GeneralSize.Large)).toMatchObject({ gap: "4px" });
    expect(linkStackStyle(GeneralSize.Medium)).toMatchObject({ gap: "4px" });
    expect(linkStackStyle(GeneralSize.Small)).toMatchObject({ gap: "6px" });
    expect(linkStackStyle(GeneralSize.Small, true)).toMatchObject({
      gap: "4px",
    });
    expect(
      getLinkRootStyles({
        color: LinkColorEnum.Primary,
        disabled: false,
        ellipsis: false,
        linkType: LinkType.UnderlineRegular,
        theme: lightTheme,
      }),
    ).toMatchObject({
      textDecoration: "underline",
      "&:focus-visible": {
        outline: `2px solid ${lightTheme.palette.vars.excellentBorderActive}`,
        outlineOffset: "1px",
      },
    });
    expect(
      getLinkRootStyles({
        color: LinkColorEnum.Primary,
        disabled: true,
        ellipsis: false,
        linkType: LinkType.UnderlineRegular,
        theme: lightTheme,
      }),
    ).toMatchObject({
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "underline",
      },
    });
    expect(
      getLinkRootStyles({
        color: LinkColorEnum.Primary,
        disabled: true,
        ellipsis: false,
        linkType: LinkType.StandaloneRegular,
        theme: lightTheme,
      }),
    ).toMatchObject({
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    });
  });

  it("supports icons on either side", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Link
            Icon={LinkIcon}
            href="/docs"
            iconPosition={IconPosition.LeftIcon}
          >
            Link
          </Link>
          <Link
            Icon={LinkIcon}
            href="/docs"
            iconPosition={IconPosition.RightIcon}
          >
            Another link
          </Link>
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(screen.getByRole("link", { name: "Link" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Another link" }),
    ).toBeInTheDocument();
  });

  it("keeps consumer sx and event handlers working", () => {
    const handleMouseEnter = jest.fn();
    const customizeColor = jest.fn(
      () => lightTheme.palette.vars.infoTextDefault,
    );

    render(
      <ThemeProvider>
        <BrowserRouter>
          <Link
            customizeColor={customizeColor}
            href="/docs"
            onMouseEnter={handleMouseEnter}
            sx={{ textDecoration: "none" }}
          >
            Link
          </Link>
        </BrowserRouter>
      </ThemeProvider>,
    );

    fireEvent.mouseEnter(screen.getByRole("link", { name: "Link" }));

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(customizeColor).toHaveBeenLastCalledWith({
      disabled: false,
      hovered: true,
      pressed: false,
    });
  });
});
