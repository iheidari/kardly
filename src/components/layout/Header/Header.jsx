import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';
import HamburerMenuIcon from './HamburerMenuIcon';
import Authentication from './Authentication';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      position: 'fixed',
      top: '0px',
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
  }),
);

const Header = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HamburerMenuIcon
            className={classes.menuButton}
            setDrawerIsVisible={setDrawerIsVisible}
          />
          <Typography variant="h6" className={classes.title}>
            Kards
          </Typography>
          <Authentication className={classes.container} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.list}
        drawerIsVisible={drawerIsVisible}
        setDrawerIsVisible={setDrawerIsVisible}
      />
    </div>
  );
};

export default Header;
