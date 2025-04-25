import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { navItems } from '../NavData';
import { materialColors } from '../../brand/theme';
import { NavItem } from '../../types/NavTypes';
import  DesktopRailButton  from '../Butts/DesktopRailButton';
import { DesktopTopDrawerRailProps } from '../../types/NavTypes';

const railWidth = 88;

const Drawer = styled(MuiDrawer)({
  width: railWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: railWidth,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: materialColors.surface2,
    border: 'none',
    paddingTop: 16,
    paddingBottom: 16,
    zIndex: 1200,
  },
});

const isPathActive = (path: string, current: string) => {
  if (path === '/' && current === '/') return true;
  if (path !== '/' && (current === path || current.startsWith(path + '/'))) return true;
  return false;
};


export default function DesktopTopDrawerRail({ onCategoryClick }: DesktopTopDrawerRailProps) {
  const location = useLocation();

  const handleClick = (children?: NavItem[]) => {
    onCategoryClick(children && children.length ? children : null);
  };

  return (
    <Drawer
      variant="permanent"
      slotProps={{
        paper: {
          elevation: 4,
        },
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px', // 12px between each MiniListItemButton (pill)
        }}
      >
        {navItems.map(({ label, path, iconOutlined, iconFilled, children }) => {
          const active = isPathActive(path, location.pathname);
          return (
            <DesktopRailButton
              key={label}
              label={label}
              path={path}
              iconOutlined={iconOutlined}
              iconFilled={iconFilled}
              children={children}
              active={active}
              railWidth={railWidth}
              onClick={handleClick}
              isHovered={false} // Replace with actual logic if needed
              isActive={active} // Assuming 'active' determines if it's active
            />
          );
        })}
      </List>

      {/* bottom area for toggles, e.g. dark mode, animations */}
      <Box>
        {/* place your toggle buttons here, centered */}
      </Box>
    </Drawer>
  );
}