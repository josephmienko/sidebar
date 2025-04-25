import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';
import { SimpleButtonProps } from '../../types/ButtTypes';


export default function MobileReturnButton({ onClick }: SimpleButtonProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 48,
        px: 2,
        cursor: 'pointer',
        width: '100%',
        background: 'none',
        borderRadius: 24,
        minWidth: 0,
        boxSizing: 'border-box',
        transition: 'background 0.2s cubic-bezier(.2,0,0,1)',
        '&:hover': {
          background: theme.palette.action.selected,
        },
      }}
      onClick={onClick}
      role="button"
      aria-label="Back to Main Menu"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 1 }}>
        <ArrowBackIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
        <Typography
          variant="body1"
          sx={{
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.secondary,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            fontVariationSettings: '"GRAD" 0, "opsz" 17',
            transition: 'font-variation-settings 0.3s, font-weight 0.3s, color 0.3s',
          }}
        >
          Main Menu
        </Typography>
      </Box>
    </Box>
  );
}