import React from 'react';
import PropTypes from 'prop-types';
import MuiList from '@material-ui/core/List';
import ListItem from './ListItem';

const ListItems = ({ kards, onClick, onDelete, onStar }) => {
  const kardComponents = kards.map(({ _id, title, star, tags }) => (
    <ListItem
      key={_id}
      id={_id}
      title={title}
      tags={tags}
      star={star}
      onClick={onClick(_id)}
      onDelete={onDelete(_id)}
      onStar={onStar(_id, star)}
    />
  ));

  return <MuiList component="nav">{kardComponents}</MuiList>;
};

ListItems.propTypes = {
  kards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
};

export default ListItems;
