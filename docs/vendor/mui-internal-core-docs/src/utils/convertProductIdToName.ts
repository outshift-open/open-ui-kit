const productNameProductId: Record<string, string> = {
  "open-ui-kit-core": "Open UI Kit Core",
  "joy-ui": "Joy UI",
  "base-ui": "Base UI",
  x: "Advanced components",
  system: "System styles",
  toolpad: "Toolpad",
  "toolpad-studio": "Toolpad Studio",
  "toolpad-core": "Toolpad Core",
  "docs-infra": "Docs Infra",
};

export function convertProductIdToName(productInfo: {
  productId: string;
  productCategoryId: string;
}): string | undefined {
  return (
    productNameProductId[productInfo.productId] ||
    productNameProductId[productInfo.productCategoryId]
  );
}
