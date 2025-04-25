import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MobileNavCloseButton from '../Butts/MobileNavCloseButton';
import { navItems } from '../NavData';
import SimpleList from '../Lists/SimpleList';
import { useTheme } from '@mui/material/styles';
import { mobileAndTopDrawerLabelStyles } from '../../brand/sharedStyles';
import { materialElevations } from '../../brand/theme';
import MobileChildDrawer from './MobileChildDrawer';
import { NavItem } from '../../types/NavTypes';
import { TopDrawerProps } from '../../types/NavTypes';


export default function TopDrawer({
  open,
  onClose,
  drawerWidth,
}: TopDrawerProps) {
  const theme = useTheme();
  const [childDrawerOpen, setChildDrawerOpen] = useState(false);
  const [childNavItems, setChildNavItems] = useState<NavItem[]>([]);

  const handleParentClick = (children: NavItem[]) => {
    setChildNavItems(children);
    setChildDrawerOpen(true);
  };

  const handleBackToMainMenu = () => {
    setChildDrawerOpen(false);
  };

  return (
    <>
      <Drawer
        data-testid="drawer"
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            fontFamily: theme.typography.fontFamily,
            WebkitFontSmoothing: 'antialiased',
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderTopRightRadius: theme.shape.borderRadius * 1.75, // 28px
            borderBottomRightRadius: theme.shape.borderRadius * 1.75, // 28px
            boxShadow: materialElevations.elevation2,
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            '& .MuiTypography-root': {
              fontFamily: theme.typography.navLabel.fontFamily,
              fontSize: theme.typography.navLabel.fontSize,
              fontWeight: theme.typography.navLabel.fontWeight,
              letterSpacing: theme.typography.navLabel.letterSpacing,
              lineHeight: theme.typography.navLabel.lineHeight,
              fontVariationSettings: theme.typography.navLabel.fontVariationSettings,
              transition: 'font-variation-settings 0.2s cubic-bezier(0.2, 0, 0, 1)',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '64px',
            px: 2,
          }}
        >
          <MobileNavCloseButton onClick={onClose} />
        </Box>

        <Box sx={{ py: 2 }}>
        <SimpleList
          navItems={navItems}
          onParentClick={handleParentClick}
          labelSx={mobileAndTopDrawerLabelStyles}
        />
        </Box>
      </Drawer>
      
      <MobileChildDrawer
        open={childDrawerOpen}
        navItems={childNavItems}
        onClose={() => {
          setChildDrawerOpen(false);
          onClose(); // This closes the TopDrawer as well
        }}
        onBackToMainMenu={handleBackToMainMenu}
      />
    </>
  );
}