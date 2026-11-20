import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import frontendCv from "./data/frontend";
import qaCv from "./data/qa";
import CV from "./pages/CV";
import theme from "./theme";

const cv =
  new URLSearchParams(window.location.search).get("cv") === "qa"
    ? qaCv
    : frontendCv;

function App() {
  useEffect(() => {
    document.title = `Nataliia Klymenok — ${cv.title}`;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CV cv={cv} />
    </ThemeProvider>
  );
}

export default App;
