/* eslint-disable import/prefer-default-export */
export const getProfile = (googleUser) => {
  if (googleUser) {
    const profile = googleUser.getBasicProfile();
    return {
      id: profile.getId(),
      name: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail(),
    };
  }
  return null;
};

export const getUserInfo = (googleUser) => {
  if (googleUser) {
    const profile = getProfile(googleUser);
    const authResponse = googleUser.getAuthResponse();
    return { profile, authResponse };
  }
  return null;
};
