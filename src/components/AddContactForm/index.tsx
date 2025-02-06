import { Container, Header, ImageUpload, Input, Title } from './styles';
import { HiddenInput } from '../../styles';
import { CancelButton, SaveButton } from '../../styles/buttons';

type Props = {
  onSave: () => void;
  onCancel: () => void;
};

const AddContactForm = ({ onSave, onCancel }: Props) => {
  return (
    <Container>
      <Header>
        <CancelButton onClick={onCancel}>✖️</CancelButton>
        <Title>Criar contato</Title>
        <SaveButton onClick={onSave}>Salvar</SaveButton>
      </Header>
      <ImageUpload />
      <HiddenInput />

      <Input type="text" placeholder="Nome" />
      <Input type="tel" placeholder="Telefone" />
    </Container>
  );
};

export default AddContactForm;
