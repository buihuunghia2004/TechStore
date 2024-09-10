import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BFFF', 
      dark: '#00A3E0',
      contrastText: '#fff', // Chữ trắng trên nền xanh
    },

    background: {
      default: '#00BFFF', // Nền của ứng dụng
      paper: '#00BFFF', // Nền của các thành phần như Card, Paper
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 24,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h1
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h2
    },
    h3: {
      fontSize: 16,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h3
    },
    h4: {
      fontSize: 14,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h4
    },
    h5: {
      fontSize: 12,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h5
    },
    h6: {
      fontSize: 10,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho h6
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
      color: '#fff', // Chữ trắng cho body1
    },
    body2: {
      fontSize: 10,
      fontWeight: 400,
      color: '#fff', // Chữ trắng cho body2
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho subtitle1
    },
    subtitle2: {
      fontSize: 10,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho subtitle2
    },
    button: {
      fontSize: 12,
      fontWeight: 500,
      color: '#fff', // Chữ trắng cho button
    },
  },
   components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#00BFFF', 
          color: '#fff', 
          '&:hover': {
            backgroundColor: '#009ACD', 
          },
        },
      },
    },
    MuiInputBase: {
        styleOverrides: {
          root: {
            padding: '4px 8px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd',
            '&:hover': {
              borderColor: '#00BFFF',
            },
            '& .MuiInputBase-input': {
                color: '#00BFFF',
                fontSize: '14px',
            },
            '& .MuiInputBase-input::placeholder': {
                fontSize: '12px',
                color: '#888', 
            },
          },
        },
      },
  },
});

export default theme;
