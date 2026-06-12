import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import {
  darkModeCardFloating,
  darkModeCardLifted,
  darkModeCardRaised,
  darkModeCardSubtle,
  darkModeFooterBottom,
  darkModeSideDrawerLeft,
  darkModeSideDrawerRight,
  lightModeCardFloating,
  lightModeCardLifted,
  lightModeCardRaised,
  lightModeCardSubtle,
  lightModeFooterBottom,
  lightModeSideDrawerLeft,
  lightModeSideDrawerRight,
} from "../color-palette";

describe("elevation foundations", () => {
  it("matches the Figma CSS shadow tokens", () => {
    expect(lightModeSideDrawerRight).toBe(
      "-8px 0px 12px rgba(200, 213, 245, 0.1), -4px 0px 4px rgba(200, 213, 245, 0.1)",
    );
    expect(lightModeSideDrawerLeft).toBe(
      "8px 0px 12px rgba(200, 213, 245, 0.1), 4px 0px 4px rgba(200, 213, 245, 0.1)",
    );
    expect(lightModeCardLifted).toBe("0px 4px 4px rgba(200, 213, 245, 0.33)");
    expect(lightModeCardSubtle).toBe("0px 2px 5px rgba(200, 213, 245, 0.4)");
    expect(lightModeCardRaised).toBe("0px 4px 12px rgba(200, 213, 245, 0.5)");
    expect(lightModeCardFloating).toBe("0px 4px 12px rgba(200, 213, 245, 0.7)");
    expect(lightModeFooterBottom).toBe(
      "0px -4px 12px rgba(200, 213, 245, 0.33)",
    );

    expect(darkModeSideDrawerRight).toBe(
      "-8px 0px 12px rgba(21, 29, 40, 0.1), -4px 0px 4px rgba(21, 29, 40, 0.1)",
    );
    expect(darkModeSideDrawerLeft).toBe(
      "8px 0px 12px rgba(21, 29, 40, 0.1), 4px 0px 4px rgba(21, 29, 40, 0.1)",
    );
    expect(darkModeCardLifted).toBe("0px 4px 4px rgba(6, 34, 66, 0.33)");
    expect(darkModeCardSubtle).toBe("0px 2px 5px rgba(6, 34, 66, 0.4)");
    expect(darkModeCardRaised).toBe("0px 4px 12px rgba(6, 34, 66, 0.5)");
    expect(darkModeCardFloating).toBe("0px 4px 12px rgba(6, 34, 66, 0.7)");
    expect(darkModeFooterBottom).toBe(
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 12px rgba(6, 34, 66, 0.33)",
    );
  });

  it("wires theme.shadows to design-system elevation tokens in both themes", () => {
    expect(lightTheme.shadows).toHaveLength(25);
    expect(darkTheme.shadows).toHaveLength(25);

    expect(lightTheme.shadows.slice(0, 8)).toEqual([
      "none",
      lightModeCardLifted,
      lightModeCardSubtle,
      lightModeCardRaised,
      lightModeCardFloating,
      lightModeSideDrawerRight,
      lightModeSideDrawerLeft,
      lightModeFooterBottom,
    ]);
    expect(darkTheme.shadows.slice(0, 8)).toEqual([
      "none",
      darkModeCardLifted,
      darkModeCardSubtle,
      darkModeCardRaised,
      darkModeCardFloating,
      darkModeSideDrawerRight,
      darkModeSideDrawerLeft,
      darkModeFooterBottom,
    ]);
  });
});
