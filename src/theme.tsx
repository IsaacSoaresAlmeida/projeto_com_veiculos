import React from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const palette = {
  primary: "#00AEEF",
  primaryDark: "#0088C4",
  navy: "#003A63",
  green: "#00C853",
  yellow: "#FFB300",
  red: "#D32F2F",
  grayLight: "#F5F7FA",
  gray: "#CFD8DC",
  grayDark: "#37474F",
  black: "#1C1C1C",
};

const muiTheme = createTheme({
  palette: {
    primary: { main: palette.primary },
    secondary: { main: palette.navy },
    error: { main: palette.red },
    success: { main: palette.green },
  },
  typography: {
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const styledTheme = {
  colors: palette,
  spacing: (n:number)=> `${n*8}px`
};

export default function AppThemeProvider({ children }: { children: React.ReactNode }){
  return (
    <MUIThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={styledTheme}>
        {children}
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}