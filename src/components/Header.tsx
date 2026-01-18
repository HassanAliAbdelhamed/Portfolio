import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import {
  DarkMode,
  LightMode,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

interface Props {
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <div />}
    </Slide>
  );
}

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: isDarkMode 
            ? 'rgba(18, 18, 18, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            YourName.dev
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('about')}
              sx={{ fontSize: '1rem' }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('skills')}
              sx={{ fontSize: '1rem' }}
            >
              Skills
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('projects')}
              sx={{ fontSize: '1rem' }}
            >
              Projects
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('contact')}
              sx={{ fontSize: '1rem' }}
            >
              Contact
            </Button>
          </Box>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{ ml: 2 }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          
          <IconButton
            color="inherit"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;