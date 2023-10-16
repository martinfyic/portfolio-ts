import { useState } from "react";
import { useTheme } from "next-themes";

export const useDarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const handleLightTheme = () => {
    setTheme("light");
    handleNavbarButton();
  };

  const handleDarkTheme = () => {
    setTheme("dark");
    handleNavbarButton();
  };

  const handleNavbarButton = () => {
    setNavbar(!navbar);
  };

  return {
    currentTheme,
    handleDarkTheme,
    handleLightTheme,
    handleNavbarButton,
    navbar,
  };
};
