import * as React from 'react';
import { Box, IconButton, CssBaseline, useTheme, Button, GlobalStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { toggleSidebar } from '~/utils/helper/AppBar';

export default function Header() {
  return (
    <Box
    sx={{
      display: { xs: 'flex', md: 'none' },
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      width: '100vw',
      height: 'var(--Header-height)',
      zIndex: 9995,
      p: 2,
      gap: 1,
      borderBottom: '1px solid',
      borderColor: 'background.level1',
      boxShadow: 'sm',
    }}
      >
         <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
        <IconButton
         onClick={() => {
            toggleSidebar()
          }}          
          variant="outlined"
          color="neutral"
          size="small"
        >
          <MenuIcon />
        </IconButton>
      </Box>
  )
}