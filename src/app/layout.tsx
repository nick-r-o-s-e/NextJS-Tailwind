import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import RootLayout from "./components/RootLayout/RootLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RootLayout>{children}</RootLayout>
    </ThemeProvider>
  );
}
