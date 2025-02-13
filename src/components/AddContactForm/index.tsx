import { useState } from 'react';
import { Container, Header, Input, Title, Wrapper } from './styles';
import { HiddenInput } from '../../styles';
import { CancelButton, SaveButton } from '../../styles/buttons';
import AvatarUpload from '../AvatarUpload';
import { useDispatch } from 'react-redux';
import { favoriteContact } from '../../store/reducers/contacts';

type Props = {
  id?: number;
  avatar: string;
  name?: string;
  phone?: string;
  email?: string;
  title: string;
  favorite?: number;
  onAvatarChange: (img: string) => void;
  onSave: (contactData: {
    name: string;
    phone: string;
    email: string;
    avatarImg: string;
    favorite: number;
  }) => void;
  onCancel: () => void;
};

const AddContactForm = ({
  id,
  avatar,
  title = '',
  name = '',
  phone = '',
  email = '',
  favorite = 0,
  onAvatarChange,
  onSave,
  onCancel
}: Props) => {
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [contactEmail, setContactEmail] = useState(email);
  const [isFavorite, setIsFavorite] = useState(favorite === 1);

  const favoriteClick = () => {
    if (id !== undefined) {
      dispatch(favoriteContact(id));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <Header>
        <CancelButton onClick={onCancel}>✖️</CancelButton>
        <Title>{title}</Title>
        <Wrapper>
          <svg
            onClick={favoriteClick}
            fill={isFavorite ? 'gold' : 'none'}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01z" />
          </svg>
          <SaveButton
            onClick={() => {
              onSave({
                name: contactName.trim() || '',
                phone: contactPhone.trim() || '',
                email: contactEmail,
                avatarImg: avatar,
                favorite: isFavorite ? 1 : 0
              });
            }}
          >
            Salvar
          </SaveButton>
        </Wrapper>
      </Header>
      <AvatarUpload avatarImg={avatar} onAvatarChange={onAvatarChange} />
      <HiddenInput />

      <Input
        value={contactName}
        type="text"
        onChange={(e) => setContactName(e.target.value)}
        placeholder="Nome"
        required
      />
      <Input
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ''))}
        type="tel"
        placeholder="Telefone"
        required
      />
      <Input
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
      />
    </Container>
  );
};

export default AddContactForm;
