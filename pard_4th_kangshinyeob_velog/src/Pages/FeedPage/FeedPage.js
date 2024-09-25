import styled from "styled-components";
import logo from "../../img/velog-logo.png";

const BaseContainer = styled.div`
  height: 100vh;
  background-color: #f1f3f5;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  height: 90px;
  background-color: skyblue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
`;

const Header_logo = styled.img`
  src: {logo};
  height: 23px;
  width: 72px;
  background-color: black;
`;

const Header_PagesBox = styled.div`
  width: 220px;
  height: 100%;
  background-color: blue;
`;

// const Feed_Header_PagesBox_

const Nav = styled.nav`
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav_TabList = styled.div`
  
`;

const Nav_TabList_TabDiv = styled.div`

`;

const PostSection = styled.section`

`;

const Post = styled.div`
  width: 327px;
  height: 386px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const Post_Img = styled.img`
  width: 100%;
  height: 171px;

  background-color: green;
`;

const Post_TextDiv = styled.div`
  height: 169px;

  padding: 20px;
  
  display: flex;
  flex-direction: column;

`;

const Post_TextDiv_h = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;

  font-size: 15px;
  font-weight: 700;
`;

const Post_TextDiv_p = styled.p`
  margin: 0;

  font-size: 13.5px;
  color: #495057;

`;

const Post_TextDiv_PostInfoDiv = styled.div`
  color: #858E96;

  margin-top: auto;
  display: flex;
  justify-self: flex-end;
`;

const Post_TextDiv_PostInfoDiv_p = styled.p`
  margin: 0;
  margin-right: 11px;

  font-size: 12px;
`;

const Post_BottomDiv = styled.div`
  height: 46.5px;
  border-top: 1px solid #f1f3f5;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Post_WriterDiv = styled.div`
  display: flex;

  align-items: center;
`;

const Post_WrtierDiv_pic = styled.img`
  width: 22px;
  height: 22px;

  background-color: red;
  border-radius: 15px;

  margin-right: 10px;
`;

const Post_WriterDiv_name = styled.p`
  margin: 0;
  font-size: 12px;
`;

const Post_LikeDiv = styled.div`
  margin-left: auto;

`;

const Post_LikeDiv_LikeIcon = styled.img`

`;

const Post_LikeDiv_LikeNum = styled.p`
  font-size: 12px;
`;


export const FeedPage = (
      <BaseContainer>
        <Header>
          <Header_logo />
          <Header_PagesBox>
            {/* TODO: Notification, Search, WritePost, MyProfile */}
          </Header_PagesBox>
        </Header>
        <Nav>
          <Nav_TabList> {/* TODO: Trending, Recent, Feed */}
            <Nav_TabList_TabDiv>

            </Nav_TabList_TabDiv>
            <Nav_TabList_TabDiv>
              
            </Nav_TabList_TabDiv>
            <Nav_TabList_TabDiv>
              
            </Nav_TabList_TabDiv>
          </Nav_TabList>
          {/* TODO: Dropdown, Settings */}
        </Nav>
        <PostSection>
          <Post>
            <Post_Img />
            <Post_TextDiv>
              <Post_TextDiv_h>개강은 왜 하는걸까</Post_TextDiv_h>
              <Post_TextDiv_p>개처럼 강해지기</Post_TextDiv_p>
              <Post_TextDiv_PostInfoDiv>
                <Post_TextDiv_PostInfoDiv_p>2024년 8월 14일</Post_TextDiv_PostInfoDiv_p>
                <Post_TextDiv_PostInfoDiv_p>23개의 댓글</Post_TextDiv_PostInfoDiv_p>
              </Post_TextDiv_PostInfoDiv>
            </Post_TextDiv>
            <Post_BottomDiv>
              <Post_WriterDiv>
                <Post_WrtierDiv_pic></Post_WrtierDiv_pic>
                <Post_WriterDiv_name>by 살몬</Post_WriterDiv_name>
              </Post_WriterDiv>
              <Post_LikeDiv>
                <Post_LikeDiv_LikeNum>47</Post_LikeDiv_LikeNum>
              </Post_LikeDiv>
            </Post_BottomDiv>
          </Post>
        </PostSection>

      </BaseContainer>

);