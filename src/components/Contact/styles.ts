import styled from 'styled-components';

export const ContactContent = styled.li`
  display: flex;
  padding: 20px;
  align-items: center;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: lightgray;
  margin-right: 20px;
  cursor: pointer;
  position: relative;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const ContactName = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const HiddenInput = styled.input`
  display: none;
`;
