import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'api/axios';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MessageBar from 'components/basic/MessageBar/MessageBar';

import DeleteConfirmationModal from './Parts/DeleteConfirmationModal';
import AddButton from './Parts/AddButton';
import ListItem from './Parts/ListItem';

const List = () => {
  const [kards, setKards] = useState([]);
  const [message, setMessage] = useState('');
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [kardToDeleteId, setKardToDeleteId] = useState('');

  const history = useHistory();

  useEffect(() => {
    const retrieveKardsAsync = async () => {
      try {
        const kardList = await axios.get('/kard');
        if (kardList && kardList.data) setKards(kardList.data);
      } catch (error) {
        setMessage(error.message);
      }
    };
    retrieveKardsAsync();
  }, []);

  const deleteKard = (id) => {
    const deleteKardAsync = async () => {
      try {
        await axios.delete(`/kard/${id}`);
        setKards(kards.filter(({ _id }) => _id !== id));
        setMessage('Kard deleted successfully!');
      } catch (error) {
        setMessage(error.message);
      }
    };
    deleteKardAsync();
    setOpenConfirmation(false);
  };

  const handleSelect = (id) => () => history.push(`/${id}`);
  const handleDeleteClick = (id) => () => {
    setKardToDeleteId(id);
    setOpenConfirmation(true);
  };
  const handleDelete = () => deleteKard(kardToDeleteId);
  const handleConfirmationClose = () => setOpenConfirmation(false);
  const handleAddButtonClicked = () => history.push('/');
  const kardComponents = kards.map(({ _id, title, tags }) => (
    <MuiListItem key={_id} button>
      <ListItem
        title={title}
        tags={tags}
        onClick={handleSelect(_id)}
        onDelete={handleDeleteClick(_id)}
      />
    </MuiListItem>
  ));
  return (
    <>
      <MuiList component="nav">{kardComponents}</MuiList>
      <MessageBar message={message} onClose={() => setMessage('')} />
      <DeleteConfirmationModal
        open={openConfirmation}
        onClose={handleConfirmationClose}
        onConfirm={handleDelete}
      />
      <AddButton onClick={handleAddButtonClicked} />
    </>
  );
};

export default List;
