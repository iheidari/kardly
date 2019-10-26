/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import styled from '@emotion/styled';

const SimpleMessage = styled.span`
  width: 100%;
  text-align: center;
`;

const MessageBar = ({ message, onClose, children }) => {
  const open = !!message;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      onClose={handleClose}
      message={<SimpleMessage id="message-id">{message}</SimpleMessage>}
    />
  );
};

MessageBar.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MessageBar;
