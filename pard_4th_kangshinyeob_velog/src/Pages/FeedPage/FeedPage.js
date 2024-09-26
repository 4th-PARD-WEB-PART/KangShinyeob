import styled from "styled-components";

import { BiTrendingUp, BiRss } from "react-icons/bi";
import { IoMdTime, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoNotificationsOutline, IoSearch, IoEllipsisVertical } from "react-icons/io5";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";

const BaseContainer = styled.div`
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 1050px;
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Header_logo = styled.h1`  // TODO: Header_logo img로 바꾸기
`;
// const Header_logo = styled.img`
//   /* src: {process.env.PUBLIC_URL + '/logo512.png' }; */
//   height: 23px;
//   width: 72px;
// `;

const Header_PagesBox = styled.div`
  width: 230px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 23px;
`;

const Header_PagesBox_btn = styled.button`
  width: 100px;
  height: 33px;

  font-size: 15px;
  font-weight: 700;

  border: 1px solid black;
  border-radius: 16.5px;
  background-color: #f1f3f5;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;

const Header_PagesBox_profile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 40px;

  background-color: #D9D9D9;

`;

const Nav = styled.nav`
  height: 45px;
  width: 1050px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* margin-bottom: 30px; */
`;

const Nav_TabList = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
`;

const Nav_TabList_TabDiv = styled.div`
  height: 100%;

  margin-right: 20px;
  
  display: flex;
  align-items: center;

  color: ${(props) => props.color? props.color: '#858E96'};  // 조건부 스타일링
  border-bottom: ${(props) => props.color? '2px solid #343A40' : '0'};

  &:hover {
    cursor: pointer;
  }
`;

const Nav_TabList_TabDiv_p = styled.p`
  margin: 0 4px 0 ${(props) => props.mg};

  font-size: 18px;
  font-weight: 700;
`;



const options = [
  '이번 주', '다음 주', '그 다음 주'
];
const defaultOption = options[0];



const PostSection = styled.section`
  width: 1050px;
  height: 100%;

  display: flex;
  flex-direction: column;
  
`;

const PostSection_Row = styled.div`
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: space-between;
`;

const PostDiv = styled.div`
  width: 327px;
  height: 386px;

  display: flex;
  flex-direction: column;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: white;
`;

const Post_Img = styled.img`
  width: 100%;
  height: 171px;

  background-color: green;
`;

const Post_TextDiv = styled.div`
  height: 140px;

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
  margin-right: auto;

  align-items: center;
`;

const Post_WrtierDiv_pic = styled.img`
  width: 22px;
  height: 22px;

  background-color: #D9D9D9;
  border-radius: 15px;

  margin-right: 10px;
  
`;

const Post_WriterDiv_name = styled.p`
  margin: 0;
  font-size: 12px;
`;

const Post_LikeNum = styled.p`
  font-size: 12px;

  margin: 0;
  margin-left: 5px;
`;


const Post = ( props ) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [num, setNum] = useState(0);
  const heart = ['#F1F3F5', 'black']

  return (
    <PostDiv>
      <Post_Img />
      <Post_TextDiv>
        <Post_TextDiv_h>{props.title}</Post_TextDiv_h>
        <Post_TextDiv_p>{props.content}</Post_TextDiv_p>
        <Post_TextDiv_PostInfoDiv>
          <Post_TextDiv_PostInfoDiv_p>{props.date}</Post_TextDiv_PostInfoDiv_p>
          <Post_TextDiv_PostInfoDiv_p>{props.commentNum}개의 댓글</Post_TextDiv_PostInfoDiv_p>
        </Post_TextDiv_PostInfoDiv>
      </Post_TextDiv>
      <Post_BottomDiv>
        <Post_WriterDiv>
          <Post_WrtierDiv_pic></Post_WrtierDiv_pic>
          <Post_WriterDiv_name>by {props.writer}</Post_WriterDiv_name>
        </Post_WriterDiv>
        <IoMdHeart
          onClick={() => {
            setIsClicked(!isClicked);
            setNum(Number(isClicked));
          }}
          color={heart[num]}
        />
        <Post_LikeNum>{Number(props.likeNum) + Number(num)}</Post_LikeNum>
      </Post_BottomDiv>
    </PostDiv>
  )
};

export const FeedPage = (
      <BaseContainer>
        <Header>
          <img src={require('../../img/velog-logo.png')} width='70px' />
          <Header_PagesBox>
            {/* TODO: Notification, Search, WritePost, MyProfile */}
            <IoNotificationsOutline size="20" />
            <IoSearch size="20" />
            <Header_PagesBox_btn>새 글 작성</Header_PagesBox_btn>
            <Header_PagesBox_profile />
          </Header_PagesBox>
        </Header>
        <Nav>
          <Nav_TabList> {/* TODO: Trending, Recent, Feed */}
            <Nav_TabList_TabDiv color="black">
              <BiTrendingUp size="24" />
              <Nav_TabList_TabDiv_p mg="4px" >트렌딩</Nav_TabList_TabDiv_p>
            </Nav_TabList_TabDiv>
            <Nav_TabList_TabDiv>
              <IoMdTime size="20" />
              <Nav_TabList_TabDiv_p mg="6px">최신</Nav_TabList_TabDiv_p>
            </Nav_TabList_TabDiv>
            <Nav_TabList_TabDiv>
              <BiRss size="20" />
              <Nav_TabList_TabDiv_p mg="6px">피드</Nav_TabList_TabDiv_p>
            </Nav_TabList_TabDiv>
            <img src={require('../../img/feed-dropdown.png')} width='100px' style={{marginLeft: 'auto'}} />
            <IoEllipsisVertical color='#858E96' style={{marginRight: '10px', marginLeft: '20px'}}/>
          </Nav_TabList>
          {/* TODO: Dropdown, Settings */}
        </Nav>
        <PostSection>
          <PostSection_Row>
            <Post 
              title="개"
              content="개"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살"
              likeNum="49"
            />
            <Post 
              title="개강"
              content="개처"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살로"
              likeNum="3"
            />
            <Post 
              title="개강은"
              content="개처럼"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살로몬"
              likeNum="6"
            />
          </PostSection_Row>
          <PostSection_Row>
          <Post 
              title="개강은 왜"
              content="개처럼 강"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살"
              likeNum="99"
            />
                        <Post 
              title="개강은 왜 하"
              content="개처럼 강해"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살로"
              likeNum="50"
            />
                        <Post 
              title="개강은 왜 하는"
              content="개처럼 강해지"
              date="2024년 8월 14일"
              commentNum="23"
              writer="살로몬"
              likeNum="1"
            />

          </PostSection_Row>

        </PostSection>

      </BaseContainer>

);