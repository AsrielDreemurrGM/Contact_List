import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Circle = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: rgb(217, 226, 255);
  color: black;
  position: fixed;
  bottom: 30px;
  right: 40px;
  border-radius: 30%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
`;
