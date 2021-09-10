import styled from 'styled-components';

export const LegalWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 40px 20px 40px 20px;

  font-weight: normal;
  -webkit-text-stroke-width: 0px;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  word-spacing: 0px;
  letter-spacing: normal;
  text-indent: 0px;
  white-space: normal;
  text-transform: none;

  > h2 {
    margin: 0px;
    line-height: 1.3em;
    font-size: 2em;
    color: rgb(51, 51, 51);
    display: table-cell;
    background-color: rgb(255, 255, 255);
  }

  > h1 {
    margin: 0.571429em 0px 0px;
    line-height: 1.3em;
    font-size: 2em;
    color: rgb(84, 84, 84);
  }

  > p {
    margin: 0px;
    line-height: 1.5em;
    color: rgb(84, 84, 84);
    font-size: 16px;
    font-weight: 400;
  }

  > strong {
    font-weight: 500;
  }

  > ul {
    margin: 0.571429em 0px 0px;
    padding: 0px 0px 0px 1.5em;
    list-style: outside disc;
    line-height: 1.5em;
    color: rgb(84, 84, 84);
    font-size: 16px;
    font-weight: 400;
  }

  > li {
    margin-top: 0.5em;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0px;
    font-size: 16px;
    width: 100%
    margin-top: 0.571429em;
    color: rgb(84, 84, 84);
    font-weight: 400;
  }

  > th {
    padding: 0.571429em;
    text-align: left;
  }

  > tr {
    padding: 0.571429em;
    font-weight: normal;
    text-align: left;
  }

  > table,
  th,
  td {
    border: 1px solid black;
  }
`;