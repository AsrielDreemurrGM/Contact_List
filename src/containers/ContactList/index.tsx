import Category from '../../components/Category';
import Contact from '../../components/Contact';
import { ContactsContainer, ListOfContacts } from './styles';

const ContactList = () => (
  <ContactsContainer>
    <ListOfContacts>
      <Category />
      <Contact />
    </ListOfContacts>
  </ContactsContainer>
);

export default ContactList;
