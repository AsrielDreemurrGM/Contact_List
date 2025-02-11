import { useState } from 'react';
import { Container, Header, Input, Title } from './styles';
import { HiddenInput } from '../../styles';
import { CancelButton, SaveButton } from '../../styles/buttons';
import AvatarUpload from '../AvatarUpload';

type Props = {
  avatar: string;
  name?: string;
  phone?: string;
  title: string;
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
  title = '',
  name = '',
  phone = '',
  onAvatarChange,
  onSave,
  onCancel
}: Props) => {
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  return (
    <Container>
      <Header>
        <CancelButton onClick={onCancel}>✖️</CancelButton>
        <Title>{title}</Title>
        <SaveButton
          onClick={() => {
            onSave({
              name: contactName.trim() || '',
              phone: contactPhone.trim() || '',
              avatarImg: avatar
            });
          }}
        >
          Salvar
        </SaveButton>
      </Header>
      <AvatarUpload avatarImg={avatar} onAvatarChange={onAvatarChange} />
      <HiddenInput />

      <Input
        value={contactName}
        type="text"
        onChange={(e) => setContactName(e.target.value)}
        placeholder="Nome"
      />
      <Input
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ''))}
        type="tel"
        placeholder="Telefone"
      />
    </Container>
  );
};

export default AddContactForm;
