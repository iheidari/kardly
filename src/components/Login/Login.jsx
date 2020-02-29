import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const Container = styled.div`
  width: 200px;
  margin: 100px auto;
`;

const Login = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    if (window && window.gapi) {
      window.gapi.signin2.render('google-signin2', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onSuccess,
        onfailure: onFailure,
      });
    }
  });
  return (
    <Container>
      <div id="google-signin2" />
    </Container>
  );
};

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default Login;
