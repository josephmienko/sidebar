import { useState } from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MobileTopDrawer from '../Components/Drawers/MobileTopDrawer';
import DesktopTopDrawerRail from '../Components/Drawers/DesktopTopDrawerRail'; // Import DesktopNavRail
import DesktopChildDrawer from '../Components/Drawers/DesktopChildDrawer'; // Import DesktopChildDrawer
import { NavItem } from '../types/NavTypes'; // Import NavItem type
import { NavLayoutProps } from '../types/NavTypes';

// Define drawer widths consistently
const desktopNavRailWidth = 88; // match MiniTopDrawer’s expanded width
const childDrawerWidth = 240; // Desktop child drawer width
const mobileDrawerWidth = 319; // Mobile drawer width

export default function NavLayout({ children, title }: NavLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopChildDrawerOpen, setDesktopChildDrawerOpen] = useState(false); // State for desktop child drawer
  const [childNavItems, setChildNavItems] = useState<NavItem[] | null>(null); // State for child items

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Handler for when a category with children is clicked in MiniTopDrawer
  const handleCategoryClick = (items: NavItem[] | null) => {
    if (items && items.length > 0) {
      setChildNavItems(items);
      setDesktopChildDrawerOpen(true);
    } else {
      setChildNavItems(null);
      setDesktopChildDrawerOpen(false);
    }
  };

  // Handler to close the desktop child drawer
  const handleChildDrawerClose = () => {
    // Wait for fade-out before actually closing the drawer and clearing nav items
    setTimeout(() => {
      setDesktopChildDrawerOpen(false);
      setChildNavItems(null);
    }, 300); // 300ms matches Fade timeout in DesktopChildDrawer
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Mobile/Tablet: ResponsiveAppBar */}
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, width: '100%' }}>
        <ResponsiveAppBar
          onDrawerToggle={handleDrawerToggle}
          navItems={[]} // Pass navItems if needed by AppBar
          title={title}
        />
      </Box>

      {/* Layout container with flex row */}
      <Box sx={{ display: 'flex', width: '100%', height: 'calc(100vh - 64px)' /* Adjust height if AppBar is taller */ }}>

        {/* --- Desktop Navigation Area --- */}
        <Box sx={{
          display: { xs: 'none', md: 'flex' }, // Use flex for side-by-side drawers
          position: 'relative', // Needed for absolute positioning of child drawer
          width: desktopChildDrawerOpen ? (desktopNavRailWidth + childDrawerWidth) : desktopNavRailWidth, // Adjust width based on child drawer state
          flexShrink: 0,
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}>
          {/* MiniTopDrawer Container (adjust width if needed, or let MiniTopDrawer handle its own width) */}
           <DesktopTopDrawerRail
             onCategoryClick={handleCategoryClick}
             open={desktopChildDrawerOpen} // Pass the state for open
             navItems={childNavItems || []} // Pass childNavItems or an empty array
             onClose={handleChildDrawerClose} // Pass the handler for closing
           />

          {/* Desktop Child Drawer - Rendered here, positioned absolutely */}
          {childNavItems && (
            <DesktopChildDrawer
              open={desktopChildDrawerOpen}
              navItems={childNavItems}
              onClose={handleChildDrawerClose} // Use the handler from NavLayout
              onBackToMainMenu={handleChildDrawerClose} // Use the handler from NavLayout
              left={desktopNavRailWidth} // Position it to the right of the expanded MiniTopDrawer
              drawerWidth={childDrawerWidth} // <-- Pass width as prop
            />
          )}
        </Box>
        {/* --- End Desktop Navigation Area --- */}


        {/* Mobile: TopDrawer */}
        <MobileTopDrawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          drawerWidth={mobileDrawerWidth} // <-- Use 319px for mobile
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            // Adjust main content width based on desktop drawer state
            width: {
              xs: '100%',
              md: desktopChildDrawerOpen
                ? `calc(100% - ${desktopNavRailWidth + childDrawerWidth}px)`
                : `calc(100% - ${desktopNavRailWidth}px)`
            },
            transition: theme => theme.transitions.create(['width', 'margin'], { // Transition width and margin
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            // marginLeft: { // Optional: Add margin if drawers push content
            //   md: desktopChildDrawerOpen ? `${expandedDrawerWidth + childDrawerWidth}px` : `${expandedDrawerWidth}px`
            // },
            overflow: 'auto',
            // Adjust top padding if AppBar is present on desktop
             paddingTop: { xs: '80px', sm: '80px', md: 3 }, // Example padding
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}