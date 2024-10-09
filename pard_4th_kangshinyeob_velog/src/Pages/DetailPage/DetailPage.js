import styled from "styled-components";

import { RiShareFill } from "react-icons/ri";
import { IoLogoGithub, IoMdHome,  } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";

const FeedInfo = {
	title : "PARD 4기 화이팅",
	content : "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
	author_name : "김광일",
	author_id : "oksk6681",
	author_image : "/Img/DetailPage/kwangil.png",
	author_info : "개발을 꿈꾸는 사람입니다.",
	date : "24.08.14",
	heart_count : "0",
};



const BaseContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;

`;

const SideFloatingBar = styled.div`
  width: 64px;
  height: 149px;

  background-color: #F7F8F9;
  border-radius: 32px;
  
  position: sticky;   /* floating bar 구현: sticky */
  top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CircledButton = styled.button`
  width: 46px;
  height: 46px;

  border: 1px solid #DEE2E6;
  border-radius: 50%;

  background-color: #F8F9FA;

  margin: auto 0;
`;

const MainContent = styled.div`
  width: 800px;
  margin-left: 50px;

  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h1`
  font-size: 46px;
  font-weight: 700;
`;

const PostInfoDiv = styled.div`
  margin-bottom: 99px;

  display: flex;

  align-items: baseline;
`;

const PostAuthor = styled.a`
  margin-right: 20px;

  font-size: 15px;
  font-weight: 700;
`;

const PostingDate = styled.p`
  margin: 0 auto 0 0;

  font-size: 15px;
  font-weight: 400;
`;

const PostButtons = styled.div`

`;

const PostButton = styled.a`
  margin-right: 10px;
  color: #858E96;
`;


const PostContent = styled.div`
  min-height: 350px;
`;


const AuthorInfoDiv = styled.div`
  display: flex;
  padding-bottom: 31px;
  border-bottom: 1px solid #EAECEF;
  margin-bottom: 22px;
`;

const AuthorPic = styled.img`
  width: 132px;
  height: 132px;
  background-color: #D9D9D9;
  border-radius: 70px;

  margin-right: 16px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;

`;

const AuthorName = styled.a`
  font-size: 23px;
  font-weight: 700;

  margin-bottom: 10px;
`;

const AuthorIntro = styled.p`
  margin: 0;
`;

const AuthorPages = styled.div`
  width: 130px;

  display: flex;
  justify-content: space-between;
`;


export function DetailPage() {

  return (
    <BaseContainer>
      {/* <Header image="velog-logo-image" author_id={FeedInfo.author_id} /> */} {/* 중첩라우터 배워서 써봤지만 헤더가 변경되는 부분이 있어서 당장은 이게 편할 것 같음 */}

      <Main>
        <SideFloatingBar>
          <CircledButton type="button" onClick={() => alert('clicked')}>
          <img src={require('../../img/detailedHeart.png')} alt='like 아이콘'  width='22px'/>

          </CircledButton>
          <b>0</b>
          <CircledButton type="button" onClick={() => alert('clicked')}>
            <RiShareFill color="#858E96" size={24} />

          </CircledButton>
        </SideFloatingBar>
        <MainContent> {/* 일단 더미 데이터 다 넣어놨는데, 상태 관리 라이브러리 쓰면 클릭한 포스트마다 다른 내용 보여줄 수 있을 것 같음 */}
          <PostTitle>파드 4기 화이팅</PostTitle>
          <PostInfoDiv>
            <PostAuthor>{FeedInfo.author_name}</PostAuthor>
            <PostingDate>{FeedInfo.date}</PostingDate>
            <PostButtons>
              <PostButton>통계</PostButton>
              <PostButton>수정</PostButton>
              <PostButton>삭제</PostButton>
            </PostButtons>
          </PostInfoDiv>

          <PostContent>{FeedInfo.content}</PostContent>

          <AuthorInfoDiv>
            <AuthorPic></AuthorPic>
            <AuthorInfo>
              <AuthorName>{FeedInfo.author_name}</AuthorName>
              <AuthorIntro>{FeedInfo.author_info}</AuthorIntro>
            </AuthorInfo>
 
          </AuthorInfoDiv>

          <AuthorPages>
              <IoLogoGithub size={35} color="#858E96" />
              <IoMdHome size={35} color="#858E96" />
              <TbMailFilled size={35} color="#858E96" />

            </AuthorPages>
        </MainContent>
      </Main>

    </BaseContainer>

  )
}