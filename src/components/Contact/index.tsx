import { useRef, useState } from 'react';
import {
  ContactContent,
  ContactName,
  Picture,
  HiddenInput,
  ContactInfo,
  Actions,
  Button
} from './styles';

type ContactInfo = {
  name: string;
  avatarImg?: string;
};

const Contact = ({ name }: ContactInfo) => {
  const [avatar, setAvatar] = useState<string>(
    'https://static.thenounproject.com/png/693320-512.png'
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const imageClick = () => {
    inputRef.current?.click();
  };

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setAvatar(newImage);
    }
  };
  return (
    <>
      <ContactContent>
        <ContactInfo>
          <Picture src={avatar} alt="Avatar" onClick={imageClick} />
          <ContactName>{name}</ContactName>
        </ContactInfo>
        <HiddenInput type="file" ref={inputRef} onChange={changeImage} />
        <Actions>
          <Button variant="edit">Editar</Button>
          <Button variant="remove">Remover</Button>
        </Actions>
      </ContactContent>
    </>
  );
};

export default Contact;
