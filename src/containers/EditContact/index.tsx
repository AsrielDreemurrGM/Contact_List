import { useNavigate, useParams } from 'react-router-dom';
import AddContactForm from '../../components/AddContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { useEffect, useState } from 'react';
import { DEFAULT_IMAGE } from '../../containers/AddContact';
import { editContact } from '../../store/reducers/contacts';

const EditContact = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector((state: RootReducer) =>
    state.contacts.contacts.find((c) => c.id === Number(id))
  );

  const [avatar, setAvatar] = useState(contact?.avatarImg || DEFAULT_IMAGE);
  const [contactPhone, setContactPhone] = useState(contact?.phone || '');

  useEffect(() => {
    if (!contact) {
      navigate('/');
    } else {
      setAvatar(contact.avatarImg);
      setContactPhone(contact.phone);
    }
  }, [contact, navigate]);

  const handleSave = (contactData: {
    name: string;
    phone: string;
    avatarImg: string;
  }) => {
    if (!contactData.name.trim() || !contactData.phone.trim()) {
      alert('Nome e Telefone são obrigatórios.');
      return;
    }

    dispatch(
      editContact({
        id: Number(id),
        favorite: contact?.favorite || 0,
        ...contactData
      })
    );
    navigate('/');
  };
  return contact ? (
    <AddContactForm
      id={contact.id}
      title="Editar contato"
      onCancel={() => navigate('/')}
      onSave={handleSave}
      avatar={avatar}
      onAvatarChange={setAvatar}
      name={contact.name}
      phone={contactPhone}
      favorite={contact.favorite}
    />
  ) : null;
};

export default EditContact;
