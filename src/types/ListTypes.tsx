import { Theme } from '@mui/material/styles'
import { NavItem } from './NavTypes'

interface BaseListProps {
  labelSx?: (theme: Theme, isActive: boolean, isHovered?: boolean) => Record<string, any>;
}

export interface NestedListProps extends BaseListProps {
  items: NavItem[];
  level?: number;
  itemShift?: string | number;
}

export interface SimpleListProps extends BaseListProps {
  navItems: NavItem[];
  onParentClick: (children: NavItem[]) => void;
}
