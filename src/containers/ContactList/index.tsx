import { useSelector } from 'react-redux';

import { ContactsContainer, ListOfContacts } from './styles';
import Category from '../../components/Category';
import Contact from '../../components/Contact';

import { RootReducer } from '../../store';

const StarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
  </svg>
);

const ContactsIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 640 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m192 256c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3c-63.6 0-115.2 51.6-115.2 115.2v28.8c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm211.2-32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8h-3.8c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4h176.6c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
  </svg>
);

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts);

  const favoriteContacts = contacts.filter((contact) => contact.favorite === 1);
  const allContacts = contacts.filter((contact) => contact.favorite === 0);

  return (
    <ContactsContainer>
      <ListOfContacts>
        <Category icon={StarIcon} title={'Favoritos'} />
        {favoriteContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.name}
            name={contact.name}
            avatarImg={contact.avatarImg}
          />
        ))}
        <Category icon={ContactsIcon} title={'Todos os Contatos'} />
        {allContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.name}
            name={contact.name}
            avatarImg={contact.avatarImg}
          />
        ))}
      </ListOfContacts>
    </ContactsContainer>
  );
};

export default ContactList;
