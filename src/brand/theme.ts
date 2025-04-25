import { createTheme, TypographyVariantsOptions } from '@mui/material/styles'
import { TypographyVariants } from '@mui/material/styles'
import '@mui/material/styles'

// Material 3 color system
export const materialColors = {
  white: '#fff',
  background: '#fefbff',
  onBackground: '#1c1b1d',
  surface0: '#fff',
  surface1: '#f8f1f6',
  surface2: '#f2ecee',
  surface3: '#ece7e9',
  surface4: '#e6e1e3',
  surfaceVariant: '#e8e0e8',
  onSurface: '#1c1b1d',
  onSurfaceVariant: '#4d4256',
  primary: '#6442d6',
  primary80: '#cbbeff',
  primary30: '#4b21bd',
  primary20: '#340098',
  onPrimary: '#fff',
  primaryContainer: '#9f86ff',
  onPrimaryContainer: '#1e0060',
  secondary: '#5d5d74',
  onSecondary: '#fff',
  secondaryContainer: '#dcdaf5',
  onSecondaryContainer: '#21182b',
  utilityListHover: 'rgba(31, 25, 35, 0.08)',
  utilityListActive: 'rgba(31, 25, 35, 0.10)',
  neutral10: '#1c1b1d',
  neutral90: '#e6e1e3',
}

// Material 3 elevations
export const materialElevations = {
  elevation1: '0px 1px 2px 0px rgba(0,0,0,0.12), 0px 1px 3px 1px rgba(0,0,0,0.07)',
  elevation2: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  elevation3: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    navLabel: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    navLabel?: React.CSSProperties
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: materialColors.primary,
      contrastText: materialColors.onPrimary,
      light: materialColors.primary80,
      dark: materialColors.primary30,
    },
    secondary: {
      main: materialColors.secondary,
      contrastText: materialColors.onSecondary,
    },
    background: {
      default: materialColors.background,
      paper: materialColors.surface0,
    },
    text: {
      primary: materialColors.onSurface,
      secondary: materialColors.onSurfaceVariant,
    },
  },
  shape: {
    borderRadius: 16, // Material 3 default corner radius
  },
  typography: {
    fontFamily: '"Google Sans Text", Inter, sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0px',
      fontVariationSettings: '"GRAD" 0, "opsz" 17',
    },
    navLabel: {
      fontFamily: '"Google Sans", Inter, sans-serif',
      fontSize: '1rem', // 12px
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '.1px',
      fontVariationSettings: '"GRAD" 0, "opsz" 17',
    },
  },
  spacing: 8, // 1 spacing unit = 8px
})

export const customVariables = {
  surfaceTint: materialColors.primary,
  onSurfaceVariant: materialColors.onSurfaceVariant,
  utilityListHover: materialColors.utilityListHover,
  utilityListActive: materialColors.utilityListActive,
  hoverIconColor: materialColors.primary,
  hoverTextColor: materialColors.onSurface,
  activeItemBackground: `rgba(100, 66, 214, 0.12)`, // Primary color with opacity
}

export default theme
