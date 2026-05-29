export const replaceMaterialLinks = (markdown: string) => {
  return markdown.replace(
    /\(\/(guides|customization|getting-started|discover-more)\/([^)]*)\)/gm,
    "(/docs/$1/$2)",
  );
};

export const replaceComponentLinks = (markdown: string) => {
  return markdown
    .replace(
      /\(\/components\/((icons|material-icons|transitions|pickers|about-the-lab)\/?[^)]*)\)/gm,
      "(/docs/$1)",
    )
    .replace(
      /\(\/components\/(?!tabs|breadcrumbs)([^)]*)\)/gm,
      "(/docs/react-$1)",
    )
    .replace(
      /\(\/docs\/(react-[-a-z]+)(x|ch)es(\/|#)([^)]*)\)/gm,
      "(/docs/$1$2$3$4)",
    )
    .replace(/\(\/docs\/(react-[-a-z]+)(x|ch)es"/gm, "(/docs/$1$2)")
    .replace(
      /\(\/docs\/(?!react-tabs|react-breadcrumbs)(react-[-a-z]+)s(\/|#)([^)]*)\)/gm,
      "(/docs/$1$2$3)",
    )
    .replace(
      /\(\/docs\/(?!react-tabs|react-breadcrumbs)(react-[-a-z]+)s"/gm,
      "(/docs/$1)",
    )
    .replace(/react-trap-focu/gm, "react-trap-focus")
    .replace(/react-trap-focuss/gm, "react-trap-focus")
    .replace(/react-progres/gm, "react-progress")
    .replace(/react-progresss/gm, "react-progress")
    .replace(
      /\(\/components\/(tabs|breadcrumbs)([^)]*)\)/gm,
      "(/docs/react-$1$2)",
    );
};

export const replaceAPILinks = (markdown: string) => {
  return markdown
    .replace(
      /\(\/api\/(loading-button|tab-list|tab-panel|date-picker|date-time-picker|time-picker|calendar-picker|calendar-picker-skeleton|desktop-picker|mobile-date-picker|month-picker|pickers-day|static-date-picker|year-picker|masonry|timeline|timeline-connector|timeline-content|timeline-dot|timeline-item|timeline-opposite-content|timeline-separator|unstable-trap-focus|tree-item|tree-view)([^)]*)\)/gm,
      "(/docs/api/$1$2)",
    )
    .replace(/\(\/api\/([^)]*)\)/gm, "(/docs/api/$1)");
};
