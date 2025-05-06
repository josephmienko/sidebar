// Define proper types for navigation items

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactElement<any, React.FunctionComponent<any>> | null; // Allow null
  iconOutlined: React.ReactNode;
  iconFilled: React.ReactNode;
  children?: NavItem[];
}

export interface DesktopTopDrawerRailProps {
  onCategoryClick: (items: NavItem[] | null) => void;
  navItems: NavItem[];
  onClose: () => void;
  open: boolean; // Add the 'open' property to match the usage in NavLayout
}

export interface NavLayoutProps {
  title: string;
  children: React.ReactNode;
  navItems: NavItem[]; // Add navItems property
}

interface BaseDrawerProps {
  open: boolean;
  onClose: () => void;
}

export interface TopDrawerProps extends BaseDrawerProps {
  navItems: NavItem[];
  drawerWidth?: number; // Make optional if you want consistency
}

export interface MobileChildDrawerProps extends BaseDrawerProps {
  navItems: NavItem[];
  onBackToMainMenu: () => void;
}

export interface DesktopChildDrawerProps extends BaseDrawerProps {
  navItems: NavItem[];
  onBackToMainMenu: () => void;
  left: number;
  drawerWidth?: number;
}