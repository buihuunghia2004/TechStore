import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import { closeSidebar } from '../../utils/helper/AppBar';
import SideBarContent from './SideBarContent/SideBarContent';
import { useTheme } from '@mui/material/styles';

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: 'grid',
          transition: '0.2s ease',
          '& > *': {
            overflow: 'hidden',
          },
          gridTemplateRows: open ? '1fr' : '0fr',
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  const theme = useTheme();
  return (
    <Box className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: { xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',md: 'none'},
        transition: 'transform 0.4s, width 0.4s', zIndex: 10000, height: '100vh',width: '270px',top: 0,p: 2,
        flexShrink: 0,display: 'flex',flexDirection: 'column', gap: 2, borderRight: '1px solid',borderColor: 'divider',
      }}>
      <Box className="Sidebar-overlay"
        sx={{ position: 'fixed',zIndex: 9998,top: 0,left: 0,width: '100vw',height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',backgroundColor: 'rgba(0, 0, 0, 0.5)', transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <IconButton variant="contained" color="" size="small"><BrightnessAutoRoundedIcon /></IconButton>
        <Typography variant="h2">Tech-web</Typography>
      </Box>

      <InputBase
        sx={{
          ml: 1, padding: '4px 8px', backgroundColor: '#fff',
          borderRadius: 1, border: '1px solid #ddd',
          '&:hover': {borderColor: '#00BFFF', },
          '& .MuiInputBase-input': {
            color: '#000',
          },
        }}
        startAdornment={<SearchRoundedIcon />}
        placeholder="Search"
      />

      <SideBarContent />

      <Box sx={{ minHeight: 0, overflow: 'hidden auto', flexGrow: 1,display: 'flex', flexDirection: 'column' }}>
        <Card variant="outlined" sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">Used space</Typography>
            <IconButton size="small"><CloseRoundedIcon /></IconButton>
          </Stack>
          <Typography variant="caption">Your team has used 80% of your available space. Need more?</Typography>
          <LinearProgress variant="determinate" value={80} sx={{ my: 1 }} />
          <Button size="small" variant="contained">Upgrade plan</Button>
        </Card>
      </Box>
    </Box>
  );
}
