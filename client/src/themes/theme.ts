import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial"',
    fontSize: 12,
    button: {
      textTransform: 'uppercase',
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid #000',
          height: 42,
        },
        notchedOutline: {
          display: 'none',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
          fontSize: 14,
          fontWeight: '700',
        },
      },
    },
  },
});
