import styled from 'styled-components';

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

export const CancelButton = styled(Button)`
  background-color: transparent;
  color: black;
  font-size: 18px;
`;
