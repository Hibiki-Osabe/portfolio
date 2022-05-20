import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 16px;
  background: #000;
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export default function Entry(props) {
  return (
    <FooterContainer>
      <Copyright>
        <small>&copy; osabe</small>
      </Copyright>
    </FooterContainer>
  );
}
