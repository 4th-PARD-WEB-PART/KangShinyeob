import styled from "styled-components";

import { BiTrendingUp, BiRss } from "react-icons/bi";   // 이미지 대신 react-icon 라이브러리 사용
import { IoMdTime, IoMdHeart } from "react-icons/io";
import { IoNotificationsOutline, IoSearch, IoEllipsisVertical } from "react-icons/io5";

import Dropdown from 'react-dropdown';    // 못해봄
import 'react-dropdown/style.css';
import { useState } from "react";
import Header from '../../Layouts/Header.js';
import { Link, Outlet } from "react-router-dom";

const BaseContainer = styled.div`
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  height: 45px;
  width: 1050px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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

  color: ${(props) => props.color? props.color: '#858E96'};
  border-bottom: ${(props) => (props.color)? '2px solid #343A40' : '0'};

  &:hover {
    cursor: pointer;    // 호버
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
  color: black;
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

  margin-top: auto;   // flex만 사용하다가 margin: auto 섞어쓰기 시작
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
  const [isClicked, setIsClicked] = useState(false);    // useState 이용, isClicked에 T/F 줘서 num 숫자 및 heart icon color 연동
  const [num, setNum] = useState(0);
  const heart = ['#F1F3F5', '#FF4516']

  return (
    <Link to={`/detail/${props.author_id}`} style={{textDecoration: 'none'}}>
      <PostDiv>
        <Post_Img />
        <Post_TextDiv>
          <Post_TextDiv_h>{props.title}</Post_TextDiv_h>  {/* props 이용해 데이터 받음 */}
          <Post_TextDiv_p>{props.content}</Post_TextDiv_p>
          <Post_TextDiv_PostInfoDiv>
            <Post_TextDiv_PostInfoDiv_p>{props.date}</Post_TextDiv_PostInfoDiv_p>
            <Post_TextDiv_PostInfoDiv_p>{props.commentNum}개의 댓글</Post_TextDiv_PostInfoDiv_p>
          </Post_TextDiv_PostInfoDiv>
        </Post_TextDiv>
        <Post_BottomDiv>
          <Post_WriterDiv>
            <Post_WrtierDiv_pic></Post_WrtierDiv_pic>
            <Post_WriterDiv_name>by {props.author_name}</Post_WriterDiv_name>
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
    </Link>
  )
};


const postData = [
  { 
    title: "개",
    content: "개",
    date: "2024년 8월 14일",
    commentNum: "24",
    author_id: "oksk6681",
    author_name: "살",
    likeNum: "49"
  }, 
  {
    title:"개강",
    content:"개처",
    date:"2024년 8월 14일",
    commentNum:"23",
    author_id: "oksk6682",
    author_name:"살로",
    likeNum:"3"
  },
  {
    title:"개강은",
    content:"개처럼",
    date:"2024년 8월 14일",
    commentNum:"23",
    author_id: "oksk6683",
    author_name:"살로몬",
    likeNum:"6"
  },
  {
    title:"개강은 왜",
    content:"개처럼 강",
    date:"2024년 8월 14일",
    commentNum:"23",
    author_id: "oksk6684",
    author_name:"살",
    likeNum:"99"
  },
  {
    title:"개강은 왜 하",
    content:"개처럼 강해",
    date:"2024년 8월 14일",
    commentNum:"23",
    author_id: "oksk6685",
    author_name:"살로",
    likeNum:"50"
  },
  {
    title:"개강은 왜 하는",
    content:"개처럼 강해지",
    date:"2024년 8월 14일",
    commentNum:"23",
    author_id: "oksk6686",
    author_name:"살로몬",
    likeNum:"1"
  }

]


export function FeedPage() {

  return (
      <BaseContainer>

        <Nav>
          <Nav_TabList>   {/* TODO: Header, Nav도 컴포넌트화 하면 더 간결한 코드 될지도? */}
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
        </Nav>

        <PostSection>
          <PostSection_Row>
            <Post {...postData[0]} /> {/* 배열 전개 연산자 ... 사용 */}
            <Post {...postData[1]} />
            <Post {...postData[2]} />
          </PostSection_Row>
          <PostSection_Row>
            <Post {...postData[3]} />
            <Post {...postData[4]} />
            <Post {...postData[5]} />
          </PostSection_Row>

        </PostSection>

      </BaseContainer>
  );

}