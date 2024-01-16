import { createContext, useState } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
