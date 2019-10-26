import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 70px;
`;

const AddButton = ({ onClick }) => {
  return (
    <Container>
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <AddIcon />
      </Fab>
    </Container>
  );
};

AddButton.propTypes = { onClick: PropTypes.func.isRequired };

export default AddButton;
