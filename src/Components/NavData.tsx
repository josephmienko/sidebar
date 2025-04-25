import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeIcon from '@mui/icons-material/Home'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { NavItem } from '../types/NavTypes'

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    iconOutlined: <HomeOutlinedIcon />,
    iconFilled: <HomeIcon />,
  },
  {
    label: 'About',
    path: '/about',
    icon: <InfoOutlinedIcon />,
    iconOutlined: <InfoOutlinedIcon />,
    iconFilled: <InfoIcon />,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <ContactMailOutlinedIcon />,
    iconOutlined: <ContactMailOutlinedIcon />,
    iconFilled: <ContactMailIcon />,
  },
  {
    label: 'Parent 1',
    path: '/parent-1',
    icon: <FolderOutlinedIcon />,
    iconOutlined: <FolderOutlinedIcon />,
    iconFilled: <FolderIcon />,
    children: [
      {
        label: 'Child 1a',
        path: '/parent-1/child-1a',
        icon: <FolderOutlinedIcon />,
        iconOutlined: <FolderOutlinedIcon />,
        iconFilled: <FolderIcon />,
        children: [
          {
            label: 'Grandchild 1a1',
            path: '/parent-1/child-1a/grandchild-1a1',
            icon: <InsertDriveFileOutlinedIcon />,
            iconOutlined: <InsertDriveFileOutlinedIcon />,
            iconFilled: <InsertDriveFileIcon />,
          },
          {
            label: 'Grandchild 1a2',
            path: '/parent-1/child-1a/grandchild-1a2',
            icon: <InsertDriveFileOutlinedIcon />,
            iconOutlined: <InsertDriveFileOutlinedIcon />,
            iconFilled: <InsertDriveFileIcon />,
          },
        ],
      },
      {
        label: 'Child 1b',
        path: '/parent-1/child-1b',
        icon: <FolderOutlinedIcon />,
        iconOutlined: <FolderOutlinedIcon />,
        iconFilled: <FolderIcon />,
      },
    ],
  },
  {
    label: 'Parent 2',
    path: '/parent-2',
    icon: <FolderOutlinedIcon />,
    iconOutlined: <FolderOutlinedIcon />,
    iconFilled: <FolderIcon />,
    children: [
      {
        label: 'Child 2a',
        path: '/parent-2/child-2a',
        icon: <FolderOutlinedIcon />,
        iconOutlined: <FolderOutlinedIcon />,
        iconFilled: <FolderIcon />,
        children: [
          {
            label: 'Grandchild 2a1',
            path: '/parent-2/child-2a/grandchild-2a1',
            icon: <InsertDriveFileOutlinedIcon />,
            iconOutlined: <InsertDriveFileOutlinedIcon />,
            iconFilled: <InsertDriveFileIcon />,
          },
        ],
      },
    ],
  },
  {
    label: 'Parent 3',
    path: '/parent-3',
    icon: <FolderOutlinedIcon />,
    iconOutlined: <FolderOutlinedIcon />,
    iconFilled: <FolderIcon />,
    children: [
      {
        label: 'Child 3a',
        path: '/parent-3/child-3a',
        icon: null,
        iconOutlined: null,
        iconFilled: null,
        children: [
          {
            label: 'Grandchild 3a1',
            path: '/parent-3/child-3a/grandchild-3a1',
            icon: null,
            iconOutlined: null,
            iconFilled: null,
          },
        ],
      },
      {
        label: 'Child 3b',
        path: '/parent-3/child-3b',
        icon: null,
        iconOutlined: null,
        iconFilled: null,
      },
    ],
  },
]

export const drawerWidth = 319
export const logoSrc = '../assets/logo.svg'
export const title = 'MUI'
