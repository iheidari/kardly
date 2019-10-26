import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Chip } from '@material-ui/core';
import styled from '@emotion/styled';
import { removeMember } from 'util/array';

const ChipsContainer = styled.div`
  margin: 10px 0;
`;
const StyledChips = styled(Chip)`
  margin: 5px;
`;

const Tag = ({ className, tags, onChange }) => {
  const [tag, setTag] = useState('');
  const [lastTag, setLastTag] = useState('');

  const handleDelete = (t) => onChange(removeMember(tags, t));

  const addTag = () => {
    if (tag) {
      let newTag = tag;

      if (tag[tag.length - 1] === ',')
        newTag = tag.substring(0, tag.length - 1);
      setLastTag(newTag);
      if (tags.indexOf(newTag) === -1) onChange([...tags, newTag]);
      setTag('');
    }
  };

  const handleBlur = (e) => {
    addTag();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      addTag();
    }
    if (e.key === 'Escape') setTag('');
  };

  const tagChips = tags.map((t) => (
    <StyledChips
      key={t}
      varient={t === lastTag ? 'outlined' : null}
      label={t}
      onDelete={() => handleDelete(t)}
      color="primary"
    />
  ));

  return (
    <div className={className}>
      <TextField
        fullWidth
        placeholder="Tags"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
      />
      <ChipsContainer>{tagChips}</ChipsContainer>
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

Tag.defaultProps = {
  className: '',
};

export default Tag;
