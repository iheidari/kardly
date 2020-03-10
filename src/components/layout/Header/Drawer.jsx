import React from 'react';
import MuiDrawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const MenuItems = [
  { name: 'Inbox', icon: <InboxIcon /> },
  { name: 'Starred', icon: <MailIcon /> },
  { name: 'Send email', icon: <InboxIcon /> },
  { name: 'Drafts', icon: <MailIcon /> },
];

const Drawer = ({ className, drawerIsVisible, setDrawerIsVisible }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerIsVisible(open);
  };
  return (
    <MuiDrawer open={drawerIsVisible} onClose={toggleDrawer(false)}>
      <div
        className={className}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {MenuItems.map((item) => (
            <ListItem button key={item.name}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
