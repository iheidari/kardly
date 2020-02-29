import React from 'react';
import AvatarMui from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import styled from '@emotion/styled';
import LoggedInUserMenu from './LoggedInUserMenu';

const Avatar = styled(AvatarMui)`
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: rgba(60, 64, 67, 0.08);
`;

const LoggedInUser = ({ profile, onSignOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Avatar
        src={profile.imageUrl}
        alt={profile.name}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      />
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <LoggedInUserMenu onSignOut={onSignOut} />
      </Popover>
    </>
  );
};

export default LoggedInUser;
