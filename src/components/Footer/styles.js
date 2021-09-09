import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  postion: absolute;
  bottom: 0;
  width: 100%;
  height: 1.5em;
  color: black;
  text-align: center;
  font-size: 30px;

  /* Communication: Socials and Email */
  >div:nth-child(1) {
    >a {
      text-decoration: none;
      color: black;
      padding-right: 5px;
    }
  }
  /* Legal: Privacy/TOS/Refunds */
  >div:nth-child(2) {
    font-size: 12px;
    padding-bottom: 5px;
    color: #9A9A9A;
    text-decoration: underline;

    >a {
      padding: 5px;
    }

    >a:hover {
      color: black;
    }
  }
  /* Developer: copyright */
  >div:last-child {
    font-size: 12px;
    padding-bottom: 5px;

    >a {
      text-decoration: none;
      color: #9A9A9A;
    }
    >a:hover {
      color: black;
    }
  }
`;