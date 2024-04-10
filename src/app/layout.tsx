import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import RootLayout from "./components/RootLayout/RootLayout";
import { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RootLayout>{children}</RootLayout>
    </ThemeProvider>
  );
}
