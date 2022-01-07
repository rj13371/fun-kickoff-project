import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Arial", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 900,
      fontSize: 14,
    },
  },
  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
