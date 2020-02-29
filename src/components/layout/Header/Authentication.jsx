import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import Login from 'components/Login/Login';
import { getUserInfo } from 'util/Authentication';
import LoggedInUser from './LoggedInUser';

const onFailure = (error) => {
  console.log(error);
};

const onCurrentUserChange = (currentUser, { setProfile, setAuthResponse }) => (
  isUserSignedIn,
) => {
  if (isUserSignedIn) {
    const { profile, authResponse } = getUserInfo(currentUser);
    setProfile(profile);
    setAuthResponse(authResponse);
    console.log(authResponse);
  } else {
    setProfile(null);
    setAuthResponse(null);
  }
};

const checkUserAuthentication = ({ setProfile, setAuthResponse }) => () => {
  if (window && window.gapi) {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init();
      window.gapi.auth2.getAuthInstance().then((googleAuth) => {
        const currentUser = googleAuth.currentUser.get();
        onCurrentUserChange(currentUser, { setProfile, setAuthResponse })(
          currentUser.isSignedIn(),
        );
        googleAuth.isSignedIn.listen(
          onCurrentUserChange(currentUser, { setProfile, setAuthResponse }),
        );
      }, onFailure);
    });
  }
};

const onSignOut = (setProfile) => () => {
  if (window && window.gapi) {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut();
  }
};

const Authentication = () => {
  const [showLoginDialoge, setShowLoginDialoge] = useState(false);

  // const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState();
  const [authResponse, setAuthResponse] = useState();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    script.onload = checkUserAuthentication({ setProfile, setAuthResponse });

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loggedInButton = (
    <Button color="inherit" onClick={() => setShowLoginDialoge(true)}>
      Login
    </Button>
  );
  const account = profile ? (
    <LoggedInUser profile={profile} onSignOut={onSignOut(setProfile)} />
  ) : (
    loggedInButton
  );
  return (
    <>
      <Helmet>
        <meta name="google-signin-scope" content="profile email" />
        <meta
          name="google-signin-client_id"
          content="1016460627724-34kd80i09cgkf68276fqfmd0jedb69pc.apps.googleusercontent.com"
        />
      </Helmet>
      {account}
      <Dialog
        aria-labelledby="login-dialog"
        open={showLoginDialoge}
        fullWidth="true"
        maxWidth="sm"
        onClose={() => setShowLoginDialoge(false)}
      >
        <Login
          onSuccess={(googleUser) => {
            console.log(googleUser);
            setShowLoginDialoge(false);
            checkUserAuthentication({ setProfile, setAuthResponse });
          }}
          onFailure={onFailure}
        />
      </Dialog>
    </>
  );
};

export default Authentication;
