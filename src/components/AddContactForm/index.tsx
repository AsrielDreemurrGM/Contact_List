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
  title: string;
  favorite?: number;
  onAvatarChange: (img: string) => void;
  onSave: (contactData: {
    name: string;
    phone: string;
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
  favorite = 0,
  onAvatarChange,
  onSave,
  onCancel
}: Props) => {
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [isFavorite, setIsFavorite] = useState(favorite === 1); // Estado para controle local de favorito

  // Função para alternar o status de favorito
  const favoriteClick = () => {
    // Se o id existir, atualiza o estado global (Redux) e local (isFavorite)
    if (id !== undefined) {
      dispatch(favoriteContact(id)); // Dispara a ação no Redux
    }
    setIsFavorite(!isFavorite); // Alterna o estado local
  };

  return (
    <Container>
      <Header>
        <CancelButton onClick={onCancel}>✖️</CancelButton>
        <Title>{title}</Title>
        <Wrapper>
          <svg
            onClick={favoriteClick}
            fill={isFavorite ? 'gold' : 'none'} // Aplica a cor dourada se for favorito
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
                avatarImg: avatar,
                favorite: isFavorite ? 1 : 0 // Passa o estado de favorito ao salvar
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
