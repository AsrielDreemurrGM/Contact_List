import AddButton from '../../components/AddButton';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../containers/ContactList';

const Home = () => (
  <>
    <SearchBar />
    <ContactList />
    <AddButton />
  </>
);

export default Home;
