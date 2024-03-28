"use client";

import getInitialThemeMode from "@/app/utils/getInitialThemeMode";
import { ThemeContextProps } from "@/common/types";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark" | null>(null);

  const toggleTheme = () => {
    setMode((prevVal) => {
      const newVal = prevVal == "dark" ? "light" : "dark";

      return newVal;
    });
  };

  useEffect(() => {
    setMode(getInitialThemeMode());
  }, []);

  useEffect(() => {
    mode && localStorage.setItem("color-theme", mode);
  }, [mode]);

  const value: ThemeContextProps = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
