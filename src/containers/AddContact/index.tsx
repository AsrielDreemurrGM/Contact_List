import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AddContactForm from '../../components/AddContactForm';
import { addContact } from '../../store/reducers/contacts';

export const DEFAULT_IMAGE =
  'https://static.thenounproject.com/png/693320-512.png';

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(DEFAULT_IMAGE);

  const handleSave = (contactData: {
    name: string;
    phone: string;
    email: string;
    avatarImg: string;
  }) => {
    if (!contactData.name.trim() || !contactData.phone.trim()) {
      alert('Nome e Telefone são obrigatórios.');
      return;
    }

    const emailMustHave = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (contactData.email && !emailMustHave.test(contactData.email)) {
      alert('Por favor, insira um e-mail válido (ex: email@exemplo.com).');
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
      title="Criar contato"
      onCancel={handleCancel}
      onSave={handleSave}
      avatar={avatar}
      onAvatarChange={setAvatar}
    />
  );
};

export default AddContact;
