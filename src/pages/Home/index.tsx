import { useState } from 'react';
import AddButton from '../../components/AddButton';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../containers/ContactList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <ContactList searchQuery={searchQuery} />
      <AddButton />
    </>
  );
};

export default Home;
