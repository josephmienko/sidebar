import React from 'react'
import Box from '@mui/material/Box'
import { CommonIconProps } from '../../types/ButtTypes';


function injectSxOrStyle(
  icon: React.ReactElement,
  sx: Record<string, any>
): React.ReactElement {
  const el = icon as React.ReactElement<any, any>;
  // If it's a MUI icon, it will accept sx
  if (el.props && 'sx' in el.props) {
    return React.cloneElement(el, { sx: { ...(el.props.sx || {}), ...sx } });
  }
  // Otherwise, fallback to style
  return React.cloneElement(el, { style: { ...(el.props?.style || {}), ...sx } });
}

export default function CommonIcon({
  iconOutlined,
  iconFilled,
  isHovered,
  isActive = false,
  size = 24,
  iconColor = 'inherit'
}: CommonIconProps) {
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
    <Box
      sx={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: isHovered || isActive ? 0 : 1,
          transition: 'opacity 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {React.isValidElement(iconOutlined)
          ? injectSxOrStyle(iconOutlined, iconSx)
          : <></>}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: isHovered || isActive ? 1 : 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {React.isValidElement(iconFilled)
          ? injectSxOrStyle(iconFilled, iconSx)
          : <></>}
      </Box>
    </Box>
  )
}