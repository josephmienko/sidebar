import Drawer from '@mui/material/Drawer'
import NestedList from '../Lists/NestedList'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import { useTheme } from '@mui/material/styles'
import { materialColors, materialElevations } from '../../brand/theme'
import { listItemTextStyles } from '../../brand/sharedStyles'
import {DesktopChildDrawerProps} from '../../types/NavTypes'


export default function DesktopChildDrawer({
  open,
  navItems,
  left,
  drawerWidth = 240,
}: DesktopChildDrawerProps) {
  const theme = useTheme()
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      hideBackdrop
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          position: 'fixed',
          left,
          top: 0,
          width: drawerWidth,
          height: '100vh',
          background: materialColors.surface2,
          color: theme.palette.text.primary,
          borderTopRightRadius: theme.shape.borderRadius * 0.875,
          borderBottomRightRadius: theme.shape.borderRadius * 0.875,
          boxShadow: materialElevations.elevation1,
          overflowY: 'auto',
          zIndex: 1200,
          pointerEvents: open ? 'auto' : 'none',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          border: 0,
          fontFamily: theme.typography.fontFamily,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: theme.spacing(1),
        },
      }}
      slotProps={{
        paper: {
          elevation: 0,
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Fade in={open} timeout={300} appear={false} unmountOnExit={false}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={listItemTextStyles(theme, false, false)}
          >
            <NestedList
              items={navItems}
              itemShift={1}
              level={1}
            />
          </Box>
        </Box>
      </Fade>
    </Drawer>
  )
}