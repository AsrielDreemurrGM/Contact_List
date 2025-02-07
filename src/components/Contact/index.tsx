import { useDispatch } from 'react-redux';

import { changeAvatar, remove } from '../../store/reducers/contacts';

import AvatarUpload from '../AvatarUpload';
import { ContactContent, ContactName, ContactInfo, Actions } from './styles';
import { EditButton, RemoveButton } from '../../styles/buttons';

type ContactProps = {
  id: number;
  name: string;
  avatarImg: string;
};

const Contact = ({ id, name, avatarImg }: ContactProps) => {
  const dispatch = useDispatch();

  const handleAvatarChange = (newAvatar: string) => {
    dispatch(changeAvatar({ id, avatarImg: newAvatar }));
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
          <EditButton>Editar</EditButton>
          <RemoveButton onClick={() => dispatch(remove(id))}>
            Remover
          </RemoveButton>
        </Actions>
      </ContactContent>
    </>
  );
};

export default Contact;
