import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import Tag from 'components/basic/Tag';
import Button from '@material-ui/core/Button';
import axios from 'api/axios';
import MessageBar from 'components/basic/MessageBar/MessageBar';

const Container = styled.div`
  padding: 20px;
`;

const StyledTag = styled(Tag)`
  margin-top: 20px;
`;

const CommandRow = styled.div`
  margin-top: 40px;
  margin-bottom: 0px;
`;

const StyledButton = styled(Button)`
  margin-right: 20px;
`;

const Add = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');

  const [message, setMessage] = useState('');

  const { kardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const retrieveKards = async () => {
      try {
        if (kardId) {
          const kard = await axios.get(`/kard/${kardId}`);
          if (kard && kard.data) {
            setId(kard.data._id);
            setTitle(kard.data.title);
            setTags(kard.data.tags);
            setDescription(kard.data.description);
          }
        }
      } catch (error) {
        setMessage(error.message);
      }
    };
    retrieveKards();
  }, [kardId]);

  const onSubmit = async () => {
    const form = { title, tags, description };
    try {
      if (id) {
        await axios.put(`/kard/${id}`, form);
      } else {
        await axios.post('/kard', form);
      }
      setMessage('Kart Saved');
      clearForm();
    } catch (exception) {
      setMessage(exception.message);
    }
  };
  const onCancel = () => {
    // TODO: Check if any data changed, confirm
    history.push('/list');
  };

  const clearForm = () => {
    if (id) {
      setId('');
      history.push(`/`);
    }
    setTitle('');
    setTags([]);
    setDescription('');
  };

  return (
    <Container>
      <TextField
        fullWidth
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <StyledTag tags={tags} onChange={(newTags) => setTags(newTags)} />
      <TextField
        fullWidth
        placeholder="Description"
        multiline
        rows="4"
        rowsMax="4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <CommandRow>
        <StyledButton variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </StyledButton>
        <StyledButton color="secondary" onClick={onCancel}>
          Cancel
        </StyledButton>
      </CommandRow>
      <MessageBar message={message} onClose={() => setMessage('')} />
    </Container>
  );
};

export default Add;
