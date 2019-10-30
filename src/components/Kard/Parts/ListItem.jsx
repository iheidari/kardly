import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiListItem from '@material-ui/core/ListItem';
import styled from '@emotion/styled';
import Tags from 'components/TagEditor/Tags';

const DeleteButton = ({ onClick }) => (
  <ListItemSecondaryAction>
    <IconButton edge="end" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  </ListItemSecondaryAction>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const StyledMuiListItem = styled(MuiListItem)`
  height: 70px;
`;

const GoldenStar = styled(StarIcon)`
  color: gold;
`;

const ListItem = ({ id, title, tags, star, onClick, onDelete, onStar }) => (
  <StyledMuiListItem button>
    <ListItemIcon onClick={onStar}>
      {star ? <GoldenStar /> : <StarBorderIcon />}
    </ListItemIcon>
    <ListItemText
      primary={title}
      secondary={<Tags tags={tags} size="small" />}
      onClick={onClick}
    />
    <DeleteButton onClick={onDelete} />
  </StyledMuiListItem>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  star: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
};

ListItem.defaultProps = { tags: [], star: false };

export default ListItem;
