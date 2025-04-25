import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import InlineLogo from './Logo';

type ResponsiveAppBarProps = {
  onDrawerToggle: () => void;
  navItems: { label: string; path: string; icon: React.FunctionComponentElement<any> }[];
  logoSrc?: string;
  title?: string;
};

export default function ResponsiveAppBar({
  onDrawerToggle,
  title,
}: ResponsiveAppBarProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed" // <-- Changed from static to fixed
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          width: '100%', // Full width
          left: 0,       // Align to left edge
          zIndex: 1100,  // High z-index to appear above everything
        }}
      >
        <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle} // Ensure this toggles the TopDrawer
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <InlineLogo data-testid="inline-logo" />
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
