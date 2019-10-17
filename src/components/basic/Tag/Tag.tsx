import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Chip } from '@material-ui/core';
import { removeMember } from 'src/util/array';
import { styled } from 'src/themes';

interface Props {
  className?: string;
}

const ChipsContainer = styled.div`
  margin: 10px 0;
`;
const StyledChips = styled(Chip)`
  margin: 5px;
`;

const Tag: React.FC<Props> = ({ className }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>('');

  const handleDelete = (tag: string) => setTags(removeMember(tags, tag));
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && tag) {
      if (tags.indexOf(tag) === -1) setTags([...tags, tag]);
      setTag('');
    }
    if (e.key === 'Escape') setTag('');
  };

  const tagChips = tags.map((tag: string) => (
    <StyledChips
      label={tag}
      onDelete={() => handleDelete(tag)}
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
      />
      <ChipsContainer>{tagChips}</ChipsContainer>
    </div>
  );
};

export default Tag;
