import * as React from "react";

export function samePageLinkNavigation(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return true;
  }
  return false;
}

function isLink(event: MouseEvent): HTMLElement | null {
  let activeElement: HTMLElement | null = event.target as HTMLElement | null;
  while (
    activeElement?.nodeType === Node.ELEMENT_NODE &&
    activeElement.nodeName !== "A"
  ) {
    activeElement = activeElement.parentElement;
  }

  // Ignore non internal link clicks.
  // Absolute URLs can be internal, we delegate this to Next.js's router
  if (
    activeElement === null ||
    activeElement.nodeName !== "A" ||
    activeElement.getAttribute("target") === "_blank" ||
    activeElement.getAttribute("data-no-markdown-link") === "true"
  ) {
    return null;
  }

  return activeElement;
}

/**
 * @param {MouseEvent} event
 */
function handleClick(event: MouseEvent) {
  // Ignore click events meant for native link handling, for example open in new tab
  if (samePageLinkNavigation(event)) {
    return;
  }

  const activeElement = isLink(event);
  if (activeElement === null) {
    return;
  }

  event.preventDefault();
  const as = activeElement.getAttribute("href");
  if (as === null) {
    return;
  }
  window.location.assign(as);
}

/**
 * Source copied from https://github.com/vercel/next.js/blob/ebc4eaaa2564b4283711646079d68e430496c88b/packages/next/src/client/link.tsx
 */
function handleMouseOver(event: MouseEvent) {
  const activeElement = isLink(event);
  if (activeElement === null) {
    return;
  }

  const as = activeElement.getAttribute("href");
  if (as === null) {
    return;
  }
  // The copied docs shell used Next's singleton router here. In this local docs app
  // it can be undefined during hydration, so let the browser handle preloading.
}

export function MarkdownLinks() {
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleMouseOver);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return null;
}
