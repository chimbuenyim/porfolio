import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/utils/GlobalStyles";
import Header from "../src/utils/Header";
import themes from "../src/utils/Theme";
function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(false);

  useEffect(() => setCurrentTheme(currentTheme), []);

  const current = currentTheme ? themes.colors.light : themes.colors.dark;

  return (
    <div>
      <ThemeProvider theme={current}>
        <Component
          {...pageProps}
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
        />
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
