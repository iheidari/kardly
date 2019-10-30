import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import { removeMember } from 'util/array';
import Tags from './Tags';

const ChipsContainer = styled.div`
  margin: 10px 0;
`;

const TagEditor = ({ className, tags, onChange }) => {
  const [tag, setTag] = useState('');

  const [activeTag, setActiveTag] = useState('');

  const handleDelete = (t) => onChange(removeMember(tags, t));

  const addTag = () => {
    if (tag) {
      let newTag = tag;

      if (tag[tag.length - 1] === ',')
        newTag = tag.substring(0, tag.length - 1);
      setActiveTag(newTag);
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
      <ChipsContainer>
        <Tags tags={tags} activeTag={activeTag} onDelete={handleDelete} />
      </ChipsContainer>
    </div>
  );
};

TagEditor.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

TagEditor.defaultProps = {
  className: '',
};

export default TagEditor;
