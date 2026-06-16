import { ThemeMode } from "@/theme-provider/theme-provider";

export const openUiKitDocsModeStorageKey = "open-ui-kit-docs-mode";
export const openUiKitDocsModeChangeEvent = "open-ui-kit-docs-mode-change";

export function isOpenUiKitDocsMode(mode: string | null): mode is ThemeMode {
  return (
    mode === ThemeMode.Light ||
    mode === ThemeMode.Dark ||
    mode === ThemeMode.IoC
  );
}

export function getStoredOpenUiKitDocsMode() {
  if (
    typeof document !== "undefined" &&
    document.body?.classList.contains("mode-ioc")
  ) {
    return ThemeMode.IoC;
  }

  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }

  try {
    const mode = window.localStorage.getItem(openUiKitDocsModeStorageKey);
    if (isOpenUiKitDocsMode(mode)) {
      applyOpenUiKitDocsModeClass(mode);
      return mode;
    }

    applyOpenUiKitDocsModeClass(null);
    return null;
  } catch {
    return null;
  }
}

function applyOpenUiKitDocsModeClass(mode: ThemeMode | null) {
  if (typeof document === "undefined" || !document.body) {
    return;
  }

  document.body.classList.toggle("mode-ioc", mode === ThemeMode.IoC);
}

function dispatchOpenUiKitDocsModeChange() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(openUiKitDocsModeChangeEvent));
}

export function setStoredOpenUiKitDocsMode(mode: ThemeMode) {
  applyOpenUiKitDocsModeClass(mode);

  if (typeof window === "undefined" || !window.localStorage) {
    dispatchOpenUiKitDocsModeChange();
    return;
  }

  try {
    window.localStorage.setItem(openUiKitDocsModeStorageKey, mode);
  } catch {
    // Ignore storage failures so the header toggle still updates MUI mode.
  } finally {
    dispatchOpenUiKitDocsModeChange();
  }
}

export function clearStoredOpenUiKitDocsMode() {
  applyOpenUiKitDocsModeClass(null);

  if (typeof window === "undefined" || !window.localStorage) {
    dispatchOpenUiKitDocsModeChange();
    return;
  }

  try {
    window.localStorage.removeItem(openUiKitDocsModeStorageKey);
  } catch {
    // Ignore storage failures so the settings drawer still updates MUI mode.
  } finally {
    dispatchOpenUiKitDocsModeChange();
  }
}

export function getMuiDocsMode(mode: ThemeMode): "light" | "dark" {
  return mode === ThemeMode.Light ? "light" : "dark";
}
