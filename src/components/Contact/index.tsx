import { useDispatch } from 'react-redux';

import { changeAvatar, remove } from '../../store/reducers/contacts';

import AvatarUpload from '../AvatarUpload';
import { ContactContent, ContactName, ContactInfo, Actions } from './styles';
import { EditButton, RemoveButton } from '../../styles/buttons';
import { useNavigate } from 'react-router-dom';

type ContactProps = {
  id: number;
  name: string;
  avatarImg: string;
};

const Contact = ({ id, name, avatarImg }: ContactProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAvatarChange = (newAvatar: string) => {
    dispatch(changeAvatar({ id, avatarImg: newAvatar }));
  };

  const handleEditButtonClick = () => {
    navigate(`/edit-contact/${id}`);
  };

  return (
    <>
      <ContactContent>
        <ContactInfo>
          <AvatarUpload
            onAvatarChange={handleAvatarChange}
            avatarImg={avatarImg}
          />
          <ContactName>{name}</ContactName>
        </ContactInfo>
        <Actions>
          <EditButton onClick={handleEditButtonClick}>Editar</EditButton>
          <RemoveButton onClick={() => dispatch(remove(id))}>
            Remover
          </RemoveButton>
        </Actions>
      </ContactContent>
    </>
  );
};

export default Contact;
