import { useDispatch } from 'react-redux';

import { changeAvatar, remove } from '../../store/reducers/contacts';

import AvatarUpload from '../AvatarUpload';
import { ContactContent, ContactName, ContactInfo, Actions } from './styles';
import { RemoveButton } from '../../styles/buttons';
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

  const handleClick = () => {
    navigate(`/edit-contact/${id}`);
  };

  return (
    <>
      <ContactContent onClick={handleClick}>
        <ContactInfo>
          <AvatarUpload
            onAvatarChange={handleAvatarChange}
            avatarImg={avatarImg}
          />
          <ContactName>{name}</ContactName>
        </ContactInfo>
        <Actions>
          <RemoveButton onClick={() => dispatch(remove(id))}>
            Remover
          </RemoveButton>
        </Actions>
      </ContactContent>
    </>
  );
};

export default Contact;
