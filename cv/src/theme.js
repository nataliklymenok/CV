import { createTheme } from "@mui/material/styles";

const sans = "system-ui, 'Segoe UI', Roboto, sans-serif";
export const serif =
  "Fraunces, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4f6652" },
    background: { default: "#f5f0e6", paper: "#fbf8f1" },
    text: { primary: "#26211c", secondary: "#766c62" },
    divider: "#e0d6c5",
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: serif,
      fontSize: 44,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
      "@media (max-width: 900px)": { fontSize: 34 },
    },
    h2: {
      fontFamily: serif,
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: { fontSize: 17, fontWeight: 600, lineHeight: 1.35 },
    overline: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.14em",
    },
    body1: { fontSize: 16, lineHeight: 1.55 },
    body2: { fontSize: 15, lineHeight: 1.55 },
  },
});

export default theme;
