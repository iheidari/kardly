import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

const tagToString = (tags) => tags.slice(0, 2).join(',');

const ListItem = ({ title, tags, onClick, onDelete }) => (
  <>
    <ListItemText
      primary={title}
      secondary={tagToString(tags)}
      onClick={onClick}
    />
    <DeleteButton onClick={onDelete} />
  </>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ListItem.defaultProps = { tags: [] };

export default ListItem;
