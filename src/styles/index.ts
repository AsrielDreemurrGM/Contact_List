import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10px;
  background-color: #f9f8fe;
  overflow-y: auto;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export default GlobalStyle;
