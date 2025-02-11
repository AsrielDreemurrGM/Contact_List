import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle, { MainContainer } from './styles';

import store from './store';
import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContacts from './pages/EditContact';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'new-contact',
    element: <NewContact />
  },
  {
    path: 'edit-contact/:id',
    element: <EditContacts />
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <MainContainer>
          <RouterProvider router={routes} />
        </MainContainer>
      </Provider>
    </>
  );
}

export default App;
