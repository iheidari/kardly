import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import styled from '@emotion/styled';

const StyledChips = styled(Chip)`
  margin-right: 5px;
  margin-top: 5px;
`;

const Tags = ({ tags, activeTag, color, size, onClick, onDelete }) => {
  return tags.map((t) => (
    <StyledChips
      key={t}
      variant={t === activeTag ? 'outlined' : null}
      label={t}
      onClick={onClick && (() => onClick(t))}
      onDelete={onDelete && (() => onDelete(t))}
      color={color}
      size={size}
    />
  ));
};

Tags.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTag: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

Tags.defaultProps = {
  color: 'primary',
  size: 'medium',
};

export default Tags;
