import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 200px;
  text-align: center;
`;

const LoggedInUserMenu = ({ onSignOut }) => {
  return (
    <Container>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={onSignOut}>
          Log out
        </ListItem>
      </List>
    </Container>
  );
};

export default LoggedInUserMenu;
