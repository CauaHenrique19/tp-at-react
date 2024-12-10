import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff33",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff66",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3f50b5",
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export { darkTheme };
