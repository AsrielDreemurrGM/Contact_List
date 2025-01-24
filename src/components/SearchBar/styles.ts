import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding: 10px;
  border-radius: 24px;
  position: relative;
  max-width: 360px;
  width: 100%;
  background-color: #e7e7f3;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
  padding-left: 40px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: background-color 0.5s ease, padding 0.3s ease;

  &:hover {
    background-color: rgb(196, 196, 196);
    padding: 6px;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
