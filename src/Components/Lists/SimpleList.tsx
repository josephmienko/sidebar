import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import { listItemButtonStyles, listItemTextStyles } from '../../brand/sharedStyles'
import { useTheme } from '@mui/material/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SimpleListProps } from '../../types/ListTypes'

export default function SimpleList({ navItems = [], onParentClick, labelSx }: SimpleListProps) {
  const theme = useTheme()
  const location = useLocation()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <List
      sx={{
        gap: 0,
        marginBottom: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}>
      {navItems.map(({ label, path, iconOutlined, iconFilled, children }) => {
        const isActive = location.pathname === path
        const hasIcon = !!(iconOutlined || iconFilled)
        const itemKey = path
        const isHovered = hoveredItem === itemKey

        return (
          <ListItem key={label} disablePadding>
            {children ? (
              <ListItemButton
                onClick={() => onParentClick(children)}
                onMouseEnter={() => setHoveredItem(itemKey)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  ...listItemButtonStyles(isActive, isHovered),
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                }}
              >
                {hasIcon && (
                  <ListItemIcon sx={{ minWidth: 40, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isActive ? iconFilled : iconOutlined}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    <Typography sx={labelSx ? labelSx(theme, isActive, isHovered) : listItemTextStyles(theme, isActive, isHovered)}>
                      {label}
                    </Typography>
                  }
                  sx={{ marginLeft: hasIcon ? 1 : theme.spacing(1) }}
                />
                <ArrowForwardIcon
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '24px',
                    marginLeft: 'auto',
                    transition: 'color 0.3s, font-variation-settings 0.3s',
                    fontVariationSettings: '"GRAD" 0, "opsz" 18',
                  }}
                />
              </ListItemButton>
            ) : (
              <ListItemButton
                component={Link}
                to={path}
                onMouseEnter={() => setHoveredItem(itemKey)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  ...listItemButtonStyles(isActive, isHovered),
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                }}
              >
                {hasIcon && (
                  <ListItemIcon sx={{ minWidth: 40, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isActive ? iconFilled : iconOutlined}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    <Typography sx={labelSx ? labelSx(theme, isActive, isHovered) : listItemTextStyles(theme, isActive, isHovered)}>
                      {label}
                    </Typography>
                  }
                  sx={{ marginLeft: hasIcon ? 1 : theme.spacing(1) }}
                />
              </ListItemButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}