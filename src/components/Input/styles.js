import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 0;
  padding: 5px 15px;
  height: 44px;
  box-sizing: border-box;
  min-width: 0;
  &:focus{
    border-color: black:
  }

  @media(max-width: 385px) {
    width: 160px;
  }

  @media(max-width: 320px) {
    width: 120px;
  }
`;