import { NavItem } from './NavTypes';

interface BaseIconProps {
  iconOutlined: React.ReactNode;
  iconFilled: React.ReactNode;
  isHovered: boolean;
  isActive: boolean;
  size?: number;
  iconColor?: string;
}

export interface CommonIconProps extends BaseIconProps {}

export interface DesktopRailIconProps extends BaseIconProps {
  pillBg?: string;
}

// For buttons that pass children
export interface ChildrenButtonProps extends BaseIconProps {
  label: string;
  path: string;
  children?: NavItem[];
  active: boolean;
  railWidth?: number;
  onClick: (children?: NavItem[]) => void;
}

// For simple buttons like menu open
export interface SimpleButtonProps {
  onClick: () => void;
}

