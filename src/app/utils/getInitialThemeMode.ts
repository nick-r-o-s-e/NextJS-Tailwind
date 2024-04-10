import { ThemeMode } from "@/common/types";

const getInitialThemeMode = (): ThemeMode =>
  <"light" | "dark">localStorage.getItem("color-theme") || "dark";

export default getInitialThemeMode;
