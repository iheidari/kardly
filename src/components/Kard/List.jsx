import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'api/axios';
import MessageBar from 'components/MessageBar';
import DeleteConfirmationModal from './Parts/DeleteConfirmationModal';
import AddButton from './Parts/AddButton';
import ListItems from './Parts/ListItems';

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
  const handleStar = (id, star) => async () => {
    if (id) {
      try {
        let result;
        if (star) result = await axios.post(`/kard/remove-star/${id}`);
        else result = await axios.post(`/kard/add-star/${id}`);

        setKards(kards.map((kard) => (kard._id === id ? result.data : kard)));
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <>
      <ListItems
        kards={kards}
        onClick={handleSelect}
        onDelete={handleDeleteClick}
        onStar={handleStar}
      />
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
