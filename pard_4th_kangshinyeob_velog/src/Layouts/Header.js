import styled from "styled-components";
import Buttons from "../Components/HeaderButtons";


// 반응형: 점점 넓어지다가 max 1006px;
const HeaderContainer = styled.div`
  width: 1006px;
  height: 40px;

  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = <a href="#"><img src='src/img/velog-logo-letter.png' width='70px' /></a>;

const Logo = () => (
  <a href="#">
    <img src={require("../img/velog-logo-letter.png")} width="70px" />
  </a>
);


function Header() {

  return (
    <HeaderContainer>
      <Logo />
      <Buttons />
    </HeaderContainer>
  );
}

export default Header;