import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  margin-right: 20px;
`;

const DeleteConfirmationModal = ({ open, onConfirm, onClose }) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <StyledButton variant="contained" color="primary" onClick={onConfirm}>
          Yes
        </StyledButton>
        <StyledButton color="secondary" onClick={onClose}>
          Cancel
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

DeleteConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
