import styled from "styled-components";
import Buttons from "../Components/HeaderButtons";
import { Link, Outlet, useParams } from "react-router-dom";


// 반응형: 점점 넓어지다가 max 1006px;
const HeaderContainer = styled.div`
  width: 1006px;
  height: 40px;

  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = <a href="#"><img src='src/img/velog-logo-letter.png' width='70px' /></a>;
const HeaderLeftDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 30px;

`;

const AuthorId = styled.p`
  margin-left: 20px;

  font-size: 22px;
  font-weight: 700;

  align-self: center;
  
  background-color: white;
`;

const Img = styled.img`
  z-index: -1;

  align-self: center;
  position: relative;
  right: 25px;
  top: 3px;
`;

function HeaderLeft( props ) {
  const id = props.author_id;

  if (id !== 'undefined') {
    return (
      <HeaderLeftDiv>
        <Link to='/feed'>
          <img src={require("../img/velog-logo-image.png")} width="28px" />
        </Link>
        <AuthorId>{id}.</AuthorId>
        <Img src={require("../img/velog-logo-letter.png")} height="21px" />
      </HeaderLeftDiv>

    )

  } else {
    return (
      <Link to='/feed'>
        <img src={require("../img/velog-logo-letter.png")} width="70px" />
      </Link>
    )
  }
}


const Header = () => {
  const { author_id } = useParams(); // 비구조화 할당 { } 괄호 사용. author에 바로 값 들어감

  return (
    <div>
      <HeaderContainer>
        <HeaderLeft author_id={`${author_id}`} />
        <Buttons />
      </HeaderContainer>
      <Outlet />
    </div>
  );
}

export default Header;