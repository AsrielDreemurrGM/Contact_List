import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle, { MainContainer } from './styles';

import store from './store';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'new-contact',
    element: <NewContact />
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
