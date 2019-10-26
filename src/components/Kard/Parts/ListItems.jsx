import React from 'react';
import PropTypes from 'prop-types';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import ListItem from './ListItem';

const ListItems = ({ kards, onClick, onDelete }) => {
  const kardComponents = kards.map(({ _id, title, tags }) => (
    <MuiListItem key={_id} button>
      <ListItem
        title={title}
        tags={tags}
        onClick={onClick(_id)}
        onDelete={onDelete(_id)}
      />
    </MuiListItem>
  ));

  return <MuiList component="nav">{kardComponents}</MuiList>;
};

ListItems.propTypes = {
  kards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListItems;
