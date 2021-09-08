import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  color: black;
  text-decoration: none;
  padding-left: 16px;

  >svg {
    margin: auto 0;
  }

  >div:last-child {
    padding-left: 8px;
    margin: auto 0;
  }

  &:hover{
    text-decoration: underline;
  }

  @media(max-width: 768px) {
    >div:last-child {
      display: none;
    }
  }

  @media(min-width: 768px) {
    >div:nth-last-child(2) {
      display: none;
    }
  }
`;
