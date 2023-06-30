export type CoreStyles =
  | "resetNative"
  | "sensibleEnhancements"
  | "responsiveType"

export const importMap: Record<CoreStyles, () => Promise<unknown>> = {
  resetNative: async () => import("./assets/ResetNative.css"),
  sensibleEnhancements: async () => import("./assets/SensibleEnhancements.css"),
  responsiveType: async () => import("./assets/ResponsiveType.css")
}

export async function loadStyle(style: CoreStyles) {
  return importMap[style]()
}

export async function loadStyles() {
  await loadStyle("resetNative")
  await loadStyle("sensibleEnhancements")
  await loadStyle("responsiveType")
}
