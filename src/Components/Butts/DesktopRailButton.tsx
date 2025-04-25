import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { miniRailLabelStyles } from '../../brand/sharedStyles';
import MiniIcon from './DesktopRailIcon';
import Typography from '@mui/material/Typography';
import { ChildrenButtonProps } from '../../types/ButtTypes';


export default function DesktopRailButton(props: ChildrenButtonProps) {
  const {
    label,
    path,
    iconOutlined,
    iconFilled,
    children,
    active,
    onClick,
  } = props;
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const pillBg = active
    ? 'var(--mio-theme-color-secondary-container, #dcdaf5)'
    : hovered
      ? 'var(--mio-theme-color-utility-list-hover, rgb(31 25 35 / 8%))'
      : 'transparent';
  const iconColor = active || hovered
    ? 'var(--mio-theme-color-on-secondary-container, #21182b)'
    : 'var(--mio-theme-color-on-surface-variant, #4d4256)';
  const gradWeight = active || hovered ? 600 : 400;

  return (
    <Link
      to={children ? '#' : path}
      onClick={e => {
        if (children) {
          e.preventDefault();
          onClick(children);
        }
      }}
      aria-label={label}
      aria-current={active ? 'true' : undefined}
      role="button"
      tabIndex={0}
      className={`section-link section-menu${active ? ' active' : ''}`}
      style={{
        width: 80,
        padding: 0,
        margin: 0,
        display: 'block',
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.navLabel.fontSize,
        fontWeight: theme.typography.navLabel.fontWeight,
        letterSpacing: theme.typography.navLabel.letterSpacing,
        lineHeight: theme.typography.navLabel.lineHeight,
        fontVariationSettings: `"GRAD" ${gradWeight}, "opsz" var(--mio-theme-v2-title-m-font-variation-opsz)`,
        background: 'none',
        transition: 'background 0.2s cubic-bezier(.2,0,0,1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
      }}>
        <MiniIcon
          iconOutlined={React.isValidElement(iconOutlined) ? iconOutlined : <></>}
          iconFilled={React.isValidElement(iconFilled) ? iconFilled : <></>}
          isHovered={hovered}
          isActive={active}
          pillBg={pillBg}
          iconColor={iconColor}
          size={24}
        />
        <Typography
          className="label"
          sx={{ ...miniRailLabelStyles(theme, active, hovered) }}
        >
          {label}
        </Typography>
      </div>
    </Link>
  );
}