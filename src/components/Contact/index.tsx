import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { changeAvatar, remove } from '../../store/reducers/contacts';

import {
  ContactContent,
  ContactName,
  Picture,
  ContactInfo,
  Actions
} from './styles';
import { HiddenInput } from '../../styles';
import { EditButton, RemoveButton } from '../../styles/buttons';

type ContactProps = {
  id: number;
  name: string;
  avatarImg: string;
};

const Contact = ({ id, name, avatarImg }: ContactProps) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const imageClick = () => {
    inputRef.current?.click();
  };

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      dispatch(changeAvatar({ id, avatarImg: newImage }));
    }
  };
  return (
    <>
      <ContactContent>
        <ContactInfo>
          <Picture src={avatarImg} alt="Avatar" onClick={imageClick} />
          <ContactName>{name}</ContactName>
        </ContactInfo>
        <HiddenInput type="file" ref={inputRef} onChange={changeImage} />
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
