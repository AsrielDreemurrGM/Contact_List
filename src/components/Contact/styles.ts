import styled from 'styled-components';

export const ContactContent = styled.li`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: lightgray;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContactName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Actions = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 767px) {
    margin-left: 10px;
  }
`;
