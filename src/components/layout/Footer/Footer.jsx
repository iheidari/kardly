import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NoteIcon from '@material-ui/icons/Note';
import ListIcon from '@material-ui/icons/List';
import { useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const BottomNavigationStyled = styled(BottomNavigation)`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

const Footer = () => {
  const [value, setValue] = React.useState('/');
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== value) setValue(location.pathname);
  }, [location.pathname, value]);

  return (
    <BottomNavigationStyled
      value={value}
      onChange={(event, newValue) => {
        if (value !== newValue) history.push(newValue);
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Kard" value="/" icon={<NoteIcon />} />
      <BottomNavigationAction label="List" value="/list" icon={<ListIcon />} />
    </BottomNavigationStyled>
  );
};

export default Footer;
