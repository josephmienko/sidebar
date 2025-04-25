import React from 'react'
import Box from '@mui/material/Box'
import { miniRailPillStyles, miniRailIconContainerStyles } from '../../brand/sharedStyles'
import { DesktopRailIconProps } from '../../types/ButtTypes'

function injectSxOrStyle(
  icon: React.ReactElement,
  sx: Record<string, any>
): React.ReactElement {
  const el = icon as React.ReactElement<any, any>;
  if (el.props && 'sx' in el.props) {
    return React.cloneElement(el, { sx: { ...(el.props.sx || {}), ...sx } });
  }
  return React.cloneElement(el, { style: { ...(el.props?.style || {}), ...sx } });
}

export default function DesktopRailIcon({
  iconOutlined,
  iconFilled,
  isHovered,
  isActive = false,
  size = 24,
  pillBg = 'transparent',
  iconColor = 'inherit'
}: DesktopRailIconProps) {
  const grad = isHovered || isActive ? 600 : 0;
  const iconSx = {
    fontSize: size,
    color: iconColor,
    fontVariationSettings: `"GRAD" ${grad}, "opsz" ${size}`,
    transition: 'font-variation-settings 0.3s, color 0.3s, font-size 0.3s',
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box sx={miniRailIconContainerStyles}>
      <Box sx={{ ...miniRailPillStyles, background: pillBg }} />
      <Box
        sx={{
          position: 'absolute',
          left: 16,
          top: 4,
          zIndex: 1,
          opacity: isHovered || isActive ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        {React.isValidElement(iconOutlined)
          ? injectSxOrStyle(iconOutlined, iconSx)
          : <></>}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 16,
          top: 4,
          zIndex: 2,
          opacity: isHovered || isActive ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        {React.isValidElement(iconFilled)
          ? injectSxOrStyle(iconFilled, iconSx)
          : <></>}
      </Box>
    </Box>
  )
}