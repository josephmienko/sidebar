import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { listItemButtonStyles, listItemTextStyles } from '../../brand/sharedStyles'
import { useTheme } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { NestedListProps } from '../../types/ListTypes'
import { NavItem } from '../../types/NavTypes'

const isPathActive = (path: string, currentPath: string): boolean => {
  if (currentPath === path) return true;
  if (path !== '/' && currentPath.startsWith(path + '/')) return true;
  return false;
}

export default function NestedList({ items, level = 0, labelSx, itemShift }: NestedListProps) {
  const location = useLocation()
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const theme = useTheme()

  // Auto-expand parents of active route when component mounts
  React.useEffect(() => {
    const newOpenState = { ...open };
    items.forEach(({ label, children }) => {
      if (children && children.some((child: NavItem) => 
        isPathActive(child.path, location.pathname) || 
        (child.children?.some((grandchild: NavItem) => isPathActive(grandchild.path, location.pathname)))
      )) {
        newOpenState[label] = true;
      }
    });
    setOpen(newOpenState);
    // eslint-disable-next-line
  }, [location.pathname, items]);

  // Calculate the shift for this level
  const baseShift = typeof itemShift === 'number'
    ? itemShift
    : parseInt(itemShift || '0', 10);
  const shiftPerLevel = 0;
  const thisLevelShift = baseShift + level * shiftPerLevel;

  const pillMarginStep = 2;
  const pillMarginLeft = level * pillMarginStep;

  return (
    <List sx={{ pl: 0 }}>
      {items.map(({ label, path, iconOutlined, iconFilled, children }) => {
        const isActive = isPathActive(path, location.pathname);
        const hasIcon = !!(iconOutlined || iconFilled);
        const itemKey = path; // or `${label}-${path}` if label is not unique
        const isHovered = hoveredItem === itemKey;

        return (
          <React.Fragment key={label}>
            {children ? (
              <ListItemButton
                onClick={() => setOpen(prev => ({ ...prev, [label]: !prev[label] }))}
                onMouseEnter={() => setHoveredItem(itemKey)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  ...listItemButtonStyles(isActive, isHovered),
                  margin: 0,
                  marginLeft: pillMarginLeft,
                  marginRight: 2,
                  paddingLeft: thisLevelShift,
                  minHeight: 48,
                  borderRadius: 24,
                  boxSizing: 'border-box',
                  position: 'relative',
                }}
              >
                {hasIcon && (
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {isActive ? iconFilled : iconOutlined}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    <Typography sx={
                      labelSx
                        ? labelSx(theme, isActive, isHovered)
                        : listItemTextStyles(theme, isActive, isHovered)
                    }>
                      {label}
                    </Typography>
                  }
                  sx={{ marginLeft: hasIcon ? 0 : theme.spacing(1) }}
                />
                <Box
                  component={open[label] ? ExpandLess : ExpandMore}
                  sx={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
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
                  margin: 0,
                  marginLeft: pillMarginLeft,
                  marginRight: 2,
                  paddingLeft: thisLevelShift,
                  minHeight: 48,
                  borderRadius: 24,
                  boxSizing: 'border-box',
                }}
              >
                {hasIcon && (
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {isActive ? iconFilled : iconOutlined}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    <Typography sx={
                      labelSx
                        ? labelSx(theme, isActive, isHovered)
                        : listItemTextStyles(theme, isActive, isHovered)
                    }>
                      {label}
                    </Typography>
                  }
                  sx={{ marginLeft: hasIcon ? 0 : theme.spacing(1) }}
                />
              </ListItemButton>
            )}
            {children && (
              <Collapse in={open[label]} timeout="auto" unmountOnExit>
                <NestedList
                  items={children}
                  level={level + 1}
                  labelSx={labelSx}
                  itemShift={baseShift}
                />
              </Collapse>
            )}
          </React.Fragment>
        )
      })}
    </List>
  )
}