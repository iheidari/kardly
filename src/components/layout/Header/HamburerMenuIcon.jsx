import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const HamburerMenuIcon = ({ className, setDrawerIsVisible }) => {
  return (
    <IconButton
      edge="start"
      className={className}
      color="inherit"
      aria-label="menu"
      onClick={() => setDrawerIsVisible(true)}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default HamburerMenuIcon;
