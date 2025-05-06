import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './brand/theme';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Parent3 from './Pages/Parent3';
import Child3A from './Pages/Child3A';
import Child3B from './Pages/Child3B';
import Grandchild3A1 from './Pages/Grandchild3A1';
import NavLayout from './Layouts/NavLayout';

function App() {
  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon />, iconOutlined: <HomeIcon />, iconFilled: <HomeIcon /> },
    { label: 'About', path: '/about', icon: <InfoIcon />, iconOutlined: <InfoIcon />, iconFilled: <InfoIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactMailIcon />, iconOutlined: <ContactMailIcon />, iconFilled: <ContactMailIcon /> },
    {
      label: 'Parent 3',
      path: '/parent-3',
      icon: <FolderIcon />,
      iconOutlined: <FolderIcon />,
      iconFilled: <FolderOpenIcon />,
      children: [
        {
          label: 'Child 3a',
          path: '/parent-3/child-3a',
          icon: <FolderIcon />,
          iconOutlined: <FolderIcon />,
          iconFilled: <FolderOpenIcon />,
          children: [
            {
              label: 'Grandchild 3a1',
              path: '/parent-3/child-3a/grandchild-3a1',
              icon: <InsertDriveFileIcon />,
              iconOutlined: <InsertDriveFileIcon />,
              iconFilled: <InsertDriveFileIcon />,
            },
          ],
        },
        {
          label: 'Child 3b',
          path: '/parent-3/child-3b',
          icon: <FolderIcon />,
          iconOutlined: <FolderIcon />,
          iconFilled: <FolderOpenIcon />,
        },
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <NavLayout title="My App" navItems={navItems}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/parent-3" element={<Parent3 />} />
            <Route path="/parent-3/child-3a" element={<Child3A />} />
            <Route path="/parent-3/child-3a/grandchild-3a1" element={<Grandchild3A1 />} />
            <Route path="/parent-3/child-3b" element={<Child3B />} />
          </Routes>
        </NavLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
