import styled from 'styled-components';

export const ImageUpload = styled.img`
  margin-top: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightgray;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
