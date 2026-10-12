import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CV from "./pages/CV";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CV />
    </ThemeProvider>
  );
}

export default App;
