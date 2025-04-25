import Drawer from '@mui/material/Drawer';
import NestedList from '../Lists/NestedList';
import Box from '@mui/material/Box';
import MobileReturnButton from '../Butts/MobileReturnButton';
import { useTheme } from '@mui/material/styles';
import MobileNavCloseButton from '../Butts/MobileNavCloseButton';
import List from '@mui/material/List';
import { mobileAndTopDrawerLabelStyles } from '../../brand/sharedStyles';
import {MobileChildDrawerProps} from '../../types/NavTypes';

export default function MobileChildDrawer({
  open,
  navItems,
  onClose,
  onBackToMainMenu,
}: MobileChildDrawerProps) {
  const theme = useTheme();
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="left"
      sx={{
        display: { xs: 'block', md: 'none' },
        zIndex: theme.zIndex.modal + 2,
        '& .MuiDrawer-paper': {
          width: 319,
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderTopRightRadius: theme.shape.borderRadius * 1.75,
          borderBottomRightRadius: theme.shape.borderRadius * 1.75,
          boxShadow: theme.shadows[2],
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'auto',
          fontFamily: theme.typography.fontFamily,
        },
      }}
      PaperProps={{
        elevation: 24,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '64px',
          px: 2,
        }}
      >
        <MobileNavCloseButton onClick={onClose} />
      </Box>
      <List sx={{ px: 0 }}>
      <MobileReturnButton onClick={onBackToMainMenu} />

        <NestedList
          items={navItems}
          labelSx={mobileAndTopDrawerLabelStyles}
          itemShift={3}
          level={2}
        />
      </List>
    </Drawer>
  );
}