import React from 'react';
import { styled } from 'src/themes';
import TextField from '@material-ui/core/TextField';
import Tag from '../basic/Tag';

interface Props {}

const Container = styled.div`
  padding: 20px;
`;

const StyledTag = styled(Tag)`
  margin-top: 20px;
`;

const Add: React.FC<Props> = () => {
  return (
    <Container>
      <TextField fullWidth placeholder="Title" />
      <StyledTag />
    </Container>
  );
};

export default Add;
