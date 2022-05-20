import styled from "styled-components";

const HeaderTitle = styled.h1`
  color: #fff;
  padding: 16px;
  font-size: 80px;
`;

const HeaderContainer = styled.header`
  background-color: #f00;
`;

export default function Entry(props) {
  return (
    <HeaderContainer>
      <HeaderTitle>Portfolio</HeaderTitle>
    </HeaderContainer>
  );
}
