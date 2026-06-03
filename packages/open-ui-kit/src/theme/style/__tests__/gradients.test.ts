import {
  gradientsBackgroundDark,
  gradientsBackgroundLight,
  gradientsIllustrationsBlue,
  gradientsIllustrationsGreen,
  gradientsIllustrationsLightBlue,
  gradientsIllustrationsOrange,
  gradientsIllustrationsPink,
  gradientsIllustrationsPurple,
  gradientsIllustrationsRainbow,
  gradientsPalette,
  gradientsPrimaryDefault,
  gradientsPrimaryHover,
  gradientsPrimaryPressed,
  gradientsRedDefault,
  gradientsRedHover,
  gradientsRedPressed,
  gradientsSecondaryDefault,
  gradientsSecondaryHover,
  gradientsSecondaryPressed,
} from "../gradients";

describe("gradient foundations", () => {
  it("matches the Figma CSS gradient values", () => {
    expect(gradientsPrimaryDefault).toBe(
      "linear-gradient(225.09deg, #ff6d2e 0%, #341686 75%, #0d274d 100%)",
    );
    expect(gradientsPrimaryHover).toBe(
      "linear-gradient(225.09deg, #f69377 0%, #5300a4 75%, #1c2b7f 100%)",
    );
    expect(gradientsPrimaryPressed).toBe(
      "linear-gradient(124.96deg, #0d274d 15.43%, #341686 32.77%, #ff6d2e 97.61%)",
    );
    expect(gradientsSecondaryDefault).toBe(
      "linear-gradient(225.09deg, #80a8d7 0%, #002786 65%, #021d60 100%)",
    );
    expect(gradientsSecondaryHover).toBe(
      "linear-gradient(225.09deg, #b3cbe7 0%, #00409f 65%, #002786 100%)",
    );
    expect(gradientsSecondaryPressed).toBe(
      "linear-gradient(124.96deg, #021d60 15.43%, #002786 32.77%, #80a8d7 97.61%)",
    );
    expect(gradientsRedDefault).toBe(
      "linear-gradient(225.09deg, #e09e89 0%, #b11939 75%, #a40f29 100%)",
    );
    expect(gradientsRedHover).toBe(
      "linear-gradient(225.09deg, #f9cdac 0%, #c62953 75%, #b11939 100%)",
    );
    expect(gradientsRedPressed).toBe(
      "linear-gradient(124.96deg, #a40f29 15.43%, #b11939 32.77%, #e09e89 97.61%)",
    );
    expect(gradientsIllustrationsPurple).toBe(
      "linear-gradient(79.3deg, #834dd7 7.94%, #7670d5 49.88%, #58c0d0 92.06%)",
    );
    expect(gradientsIllustrationsBlue).toBe(
      "linear-gradient(79.41deg, #214694 7.87%, #3169a8 50.07%, #56bad5 92.13%)",
    );
    expect(gradientsIllustrationsLightBlue).toBe(
      "linear-gradient(259.41deg, #00dff0 7.87%, #00aff0 50%, #006df0 92.13%)",
    );
    expect(gradientsIllustrationsGreen).toBe(
      "linear-gradient(79.41deg, #1ac1e5 7.87%, #4cc9b2 49.67%, #a7d755 92.13%)",
    );
    expect(gradientsIllustrationsOrange).toBe(
      "linear-gradient(270deg, #ff9900 0%, #c8511b 100%)",
    );
    expect(gradientsIllustrationsPink).toBe(
      "linear-gradient(244.41deg, #e09e89 16.19%, #c0328a 49.98%, #c0328a 83.81%)",
    );
    expect(gradientsIllustrationsRainbow).toBe(
      "linear-gradient(270deg, #ba4d5f 0%, #df875d 20%, #eab069 40%, #8cbdac 60%, #58c0d0 80%, #834dd7 100%)",
    );
    expect(gradientsBackgroundLight).toBe(
      "radial-gradient(100% 204.08% at 0% 100%, #dee6f9 0%, #f5f8fd 48.71%, #f5f8fd 100%)",
    );
    expect(gradientsBackgroundDark).toBe(
      "radial-gradient(100% 204.08% at 0% 100%, #0d274d 0%, #001c3b 20.08%, #00142b 100%)",
    );
  });

  it("exposes every gradient through gradientsPalette", () => {
    expect(gradientsPalette).toEqual({
      illustrations: {
        blue: gradientsIllustrationsBlue,
        rainbow: gradientsIllustrationsRainbow,
        purple: gradientsIllustrationsPurple,
        green: gradientsIllustrationsGreen,
        lightBlue: gradientsIllustrationsLightBlue,
        pink: gradientsIllustrationsPink,
        orange: gradientsIllustrationsOrange,
      },
      primary: {
        default: gradientsPrimaryDefault,
        pressed: gradientsPrimaryPressed,
        hover: gradientsPrimaryHover,
      },
      secondary: {
        default: gradientsSecondaryDefault,
        pressed: gradientsSecondaryPressed,
        hover: gradientsSecondaryHover,
      },
      red: {
        default: gradientsRedDefault,
        pressed: gradientsRedPressed,
        hover: gradientsRedHover,
      },
      background: {
        light: gradientsBackgroundLight,
        dark: gradientsBackgroundDark,
      },
    });
  });
});
