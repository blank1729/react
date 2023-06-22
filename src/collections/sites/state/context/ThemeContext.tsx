import React, { useState } from "react";
import { LayoutProps } from "../../../types/component";

export const themecontext = React.createContext<string | null>(null);

// https://stackoverflow.com/questions/53688899/what-is-the-type-of-the-children-prop
//  Just children: React.ReactNode
function ThemeProvider({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <themecontext.Provider value={theme}>{children}</themecontext.Provider>
  );
}

export default ThemeProvider;
