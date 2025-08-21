import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage-educational-impact-foundation', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Info' },
    // { name: 'Programs', path: '/programs', icon: 'BookOpen' },
    { name: 'Impact', path: '/impact', icon: 'TrendingUp' },
    // { name: 'Get Involved', path: '/get-involved', icon: 'Users' }
  ];

  const moreMenuItems = [
    { name: 'About Us', path: '/about', icon: 'Info' },
    { name: 'Resources', path: '/resources', icon: 'FileText' },
    { name: 'Contact', path: '/contact', icon: 'Mail' },
    { name: 'Donate', path: '/donate', icon: 'Heart' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-brand brand-shadow-sm' : 'bg-background'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-educational-impact-foundation" 
            className="flex items-center space-x-3 hover-lift"
            onClick={closeMenu}
          >
            <img src="/assets/images/logo.png" alt="Sattvoday Foundation Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted ${
                  location?.pathname === item?.path
                    ? 'bg-primary/10 text-primary' :'text-foreground hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}

            <Button 
              variant="default" 
              size="sm"
              iconName="Heart"
              iconPosition="left"
            >
              Support Mission
            </Button>
            
            {/* More Menu */}
            {/* <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg brand-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.name}
                      to={item?.path}
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-colors duration-150"
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              iconName="Users"
              iconPosition="left"
            >
              Become a Mentor
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Heart"
              iconPosition="left"
            >
              Support Mission
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={20} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 bg-surface border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.name}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location?.pathname === item?.path
                      ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-2 mt-2">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.name}
                    to={item?.path}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-border">
              <Button 
                variant="outline" 
                size="sm"
                iconName="Users"
                iconPosition="left"
                fullWidth
                onClick={closeMenu}
              >
                Become a Mentor
              </Button>
              <Button 
                variant="default" 
                size="sm"
                iconName="Heart"
                iconPosition="left"
                fullWidth
                onClick={closeMenu}
              >
                Support Mission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;