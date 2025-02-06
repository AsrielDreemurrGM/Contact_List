import { useNavigate } from 'react-router-dom';
import AddContactForm from '../../components/AddContactForm';

const AddContact = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Salvando');
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return <AddContactForm onCancel={handleCancel} onSave={handleSave} />;
};

export default AddContact;
