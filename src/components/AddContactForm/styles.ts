import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #f9f8fe;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: transparent;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-left: 50px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: 10px;
  }
`;
