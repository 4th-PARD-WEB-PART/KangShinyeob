import styled from "styled-components";
import Buttons from "../Components/HeaderButtons";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { postList } from "../Atom";
import { useRecoilState } from "recoil";


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
  const path = props.path;

  const [posts, setPostList] = useRecoilState(postList);
  const id = posts[1].author_id;

  console.log(path);

  switch(path) {
    case '/detail':
      return (
        <HeaderLeftDiv>
          <Link to='/feed'>
            <img src={require("../img/velog-logo-image.png")} alt='벨로그 로고' width="28px" />
          </Link>
          <AuthorId>{id}.</AuthorId>
          <Img src={require("../img/velog-logo-letter.png")} height="21px" />
        </HeaderLeftDiv>
      );
    
    default:
      return (
        <Link to='/feed'>
          <img src={require("../img/velog-logo-letter.png")} alt='벨로그 로고' width="70px" />
        </Link>
      );

  }

  /*
  if (id !== 'undefined') {
    return (
      <HeaderLeftDiv>
        <Link to='/feed'>
          <img src={require("../img/velog-logo-image.png")} alt='벨로그 로고' width="28px" />
        </Link>
        <AuthorId>{id}.</AuthorId>
        <Img src={require("../img/velog-logo-letter.png")} height="21px" />
      </HeaderLeftDiv>

    )

  } else {
    return (
      <Link to='/feed'>
        <img src={require("../img/velog-logo-letter.png")} alt='벨로그 로고' width="70px" />
      </Link>
    )
  }
    */
}


const Header = () => {
  // const { author_id } = useParams(); // 비구조화 할당 { } 괄호 사용. author에 바로 값 들어감
  const location = useLocation(); // location.pathname 에 경로 들어감.


  return (
    <div>
      <HeaderContainer>
        <HeaderLeft path={`${location.pathname}`} />
        <Buttons />
      </HeaderContainer>
      <Outlet />
    </div>
  );
}

export default Header;