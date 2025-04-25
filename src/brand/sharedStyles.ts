import { Theme } from '@mui/material/styles'
import { materialColors } from './theme'

export const listItemButtonStyles = (
  isActive: boolean,
  isHovered: boolean | null
): Record<string, any> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 48,
  borderRadius: 24,
  padding: '0 16px',
  backgroundColor: isActive
    ? materialColors.utilityListActive
    : isHovered
      ? materialColors.utilityListHover
      : 'transparent',
  transition: 'background-color 0.3s, font-variation-settings 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: materialColors.utilityListHover,
  },
})

export const listItemTextStyles = (
  theme: Theme,
  isActive: boolean = false,
  isHovered: boolean | null
): Record<string, any> => ({
  fontFamily: theme.typography.navLabel?.fontFamily || theme.typography.fontFamily,
  fontSize: '1rem',
  fontWeight: isActive ? 700 : isHovered ? 700 : 500,
  fontVariationSettings: isActive ? '"GRAD" 600' : isHovered ? '"GRAD" 600' : '"GRAD" 0, opsz 17"',
  transition: 'font-variation-settings 0.3s, font-weight 0.3s, color 0.3s',
  lineHeight: '20px',
})

export const miniRailPillStyles: React.CSSProperties = {
  width: 56,
  height: 32,
  borderRadius: 16,
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 0,
  transition: 'background 0.2s cubic-bezier(.2,0,0,1)',
}

export const miniRailIconContainerStyles: React.CSSProperties = {
  width: 56,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginLeft: 12,
  marginRight: 12,
}

export const miniRailLabelStyles = (
  theme: Theme,
  isActive: boolean,
  isHovered: boolean | null
): React.CSSProperties => ({
  ...listItemTextStyles(theme, isActive, isHovered),
  fontSize: '12px', // <-- Set your desired font size here
  marginLeft: 0,
  textAlign: 'center',
  marginTop: '4px', // 4px between icon and label
  fontWeight: isActive
    ? theme.typography.fontWeightBold
    : theme.typography.navLabel?.fontWeight || 500,
  fontVariationSettings: isActive ? '"GRAD" 125' : '"GRAD" 0, opsz 17',
  transition: 'font-variation-settings 0.3s, font-weight 0.3s',
})

export const mobileAndTopDrawerLabelStyles = (
  theme: Theme,
  isActive: boolean = false,
  isHovered: boolean | null
): Record<string, any> => ({
  ...listItemTextStyles(theme, isActive, isHovered),
  fontSize: '1rem', // Override font size for these drawers
})

export const desktopChildDrawerLabelStyles = (
  theme: Theme,
  isActive: boolean,
  isHovered?: boolean
): Record<string, any> => ({
  ...listItemTextStyles(theme, isActive, isHovered),
  fontSize: '14px', // or your desired smaller size
})
