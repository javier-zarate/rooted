import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;

  > ${StyledLink} {
    border: 1px solid black;
    text-decoration: none;
    display: block;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: black;

    &:hover {
      color: white;
      background: black;
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  font-style: italic;
  font-weight: bold;
  padding: 20px;
  margin-top: auto;
`;
