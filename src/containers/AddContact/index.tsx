import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AddContactForm from '../../components/AddContactForm';
import { addContact } from '../../store/reducers/contacts';

const DEFAULT_IMAGE = 'https://static.thenounproject.com/png/693320-512.png';

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(DEFAULT_IMAGE);

  const handleSave = (contactData: {
    name: string;
    phone: string;
    avatarImg: string;
  }) => {
    if (!contactData.name.trim() || !contactData.phone.trim()) {
      alert('Nome e Telefone são obrigatórios.');
      return;
    }

    dispatch(addContact({ id: Date.now(), favorite: 0, ...contactData }));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <AddContactForm
      onCancel={handleCancel}
      onSave={handleSave}
      avatar={avatar}
      onAvatarChange={setAvatar}
    />
  );
};

export default AddContact;
