import { ContactContent, ContactName, Picture } from './styles';

const Contact = () => (
  <>
    <ContactContent>
      <Picture
        src="https://placehold.co/600x600?text=Hello\nWorld!"
        alt="Avatar"
      />
      <ContactName>Nome Sobrenome</ContactName>
    </ContactContent>
  </>
);

export default Contact;
