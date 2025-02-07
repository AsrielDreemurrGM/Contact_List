import { useRef } from 'react';
import { Container, Header, Input, Title } from './styles';
import { HiddenInput } from '../../styles';
import { CancelButton, SaveButton } from '../../styles/buttons';
import AvatarUpload from '../AvatarUpload';

type Props = {
  avatar: string;
  onAvatarChange: (img: string) => void;
  onSave: (contactData: {
    name: string;
    phone: string;
    avatarImg: string;
  }) => void;
  onCancel: () => void;
};

const AddContactForm = ({
  avatar,
  onAvatarChange,
  onSave,
  onCancel
}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Header>
        <CancelButton onClick={onCancel}>✖️</CancelButton>
        <Title>Criar contato</Title>
        <SaveButton
          onClick={() => {
            onSave({
              name: nameRef.current?.value.trim() || '',
              phone: phoneRef.current?.value.trim() || '',
              avatarImg: avatar
            });
          }}
        >
          Salvar
        </SaveButton>
      </Header>
      <AvatarUpload avatarImg={avatar} onAvatarChange={onAvatarChange} />
      <HiddenInput />

      <Input ref={nameRef} type="text" placeholder="Nome" />
      <Input ref={phoneRef} type="tel" placeholder="Telefone" />
    </Container>
  );
};

export default AddContactForm;
