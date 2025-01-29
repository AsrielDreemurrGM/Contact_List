import GlobalStyle, { MainContainer } from './styles';
import SearchBar from './components/SearchBar';
import ContactList from './containers/ContactList';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <SearchBar />
        <ContactList />
      </MainContainer>
    </>
  );
}

export default App;
