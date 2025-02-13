import styled from 'styled-components';

export const ContactContent = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
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
