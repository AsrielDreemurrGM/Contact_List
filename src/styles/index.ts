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

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const EditButton = styled(Button)`
  background-color: #007bff;
`;

export const RemoveButton = styled(Button)`
  background-color: #dc3545;
`;

export const SaveButton = styled(Button)`
  background-color: #28a745;
`;

export default GlobalStyle;
