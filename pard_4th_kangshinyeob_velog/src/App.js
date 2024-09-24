import './App.css';
import styled from "styled-components";

import { H1, Hp, TextInput, InputContainer, TextLabel, Section, CheckBoxInput, Link, CheckBoxLabel, CheckBoxContainer, ButtonContainer, Button, Register_BaseContainer } from './Pages/RegisterPage/RegisterPage';
import { Feed_BaseContainer, Feed_Header, Feed_Header_logo, Feed_Header_PagesBox, Feed_Nav, Feed_Nav_TabList, Feed_Nav_TabList_TabDiv, Feed_Post, Feed_Post_BottomDiv, Feed_Post_Img, Feed_Post_LikeDiv, Feed_Post_LikeDiv_LikeNum, Feed_Post_TextDiv, Feed_Post_TextDiv_h, Feed_Post_TextDiv_p, Feed_Post_TextDiv_PostInfoDiv, Feed_Post_TextDiv_PostInfoDiv_p, Feed_Post_WriterDiv, Feed_Post_WriterDiv_name, Feed_Post_WrtierDiv_pic, Feed_PostSection } from './Pages/FeedPage/FeedPage';

function App() {
  return (
    <Feed_BaseContainer>
      <Feed_Header>
        <Feed_Header_logo />
        <Feed_Header_PagesBox>
          {/* TODO: Notification, Search, WritePost, MyProfile */}
        </Feed_Header_PagesBox>
      </Feed_Header>
      <Feed_Nav>
        <Feed_Nav_TabList> {/* TODO: Trending, Recent, Feed */}
          <Feed_Nav_TabList_TabDiv>

          </Feed_Nav_TabList_TabDiv>
          <Feed_Nav_TabList_TabDiv>
            
          </Feed_Nav_TabList_TabDiv>
          <Feed_Nav_TabList_TabDiv>
            
          </Feed_Nav_TabList_TabDiv>
        </Feed_Nav_TabList>
        {/* TODO: Dropdown, Settings */}
      </Feed_Nav>
      <Feed_PostSection>
        <Feed_Post>
          <Feed_Post_Img />
          <Feed_Post_TextDiv>
            <Feed_Post_TextDiv_h>개강은 왜 하는걸까</Feed_Post_TextDiv_h>
            <Feed_Post_TextDiv_p>개처럼 강해지기</Feed_Post_TextDiv_p>
            <Feed_Post_TextDiv_PostInfoDiv>
              <Feed_Post_TextDiv_PostInfoDiv_p>2024년 8월 14일</Feed_Post_TextDiv_PostInfoDiv_p>
              <Feed_Post_TextDiv_PostInfoDiv_p>23개의 댓글</Feed_Post_TextDiv_PostInfoDiv_p>
            </Feed_Post_TextDiv_PostInfoDiv>
          </Feed_Post_TextDiv>
          <Feed_Post_BottomDiv>
            <Feed_Post_WriterDiv>
              <Feed_Post_WrtierDiv_pic></Feed_Post_WrtierDiv_pic>
              <Feed_Post_WriterDiv_name>by 살몬</Feed_Post_WriterDiv_name>
            </Feed_Post_WriterDiv>
            <Feed_Post_LikeDiv>
              <Feed_Post_LikeDiv_LikeNum>47</Feed_Post_LikeDiv_LikeNum>
            </Feed_Post_LikeDiv>
          </Feed_Post_BottomDiv>
        </Feed_Post>
      </Feed_PostSection>

    </Feed_BaseContainer>
  );
}

export default App;

const registerPage = (
  <Register_BaseContainer>
  <Section>
    <Section id="text-section">
      <H1>환영합니다!</H1>
      <Hp>기본 회원 정보를 등록해주세요</Hp>

    </Section> {/* End of #text-section */}

    <Section id="input-section">
      <form>
        <InputContainer>
          <TextInput id="input-name" name="input-name" type="text" width="249px" placeholder="이름을 입력해주세요." />
          <TextLabel for="input-name">이름</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="input-email" name="input-email" type="text" width="333px" placeholder="이메일을 입력해주세요." />
          <TextLabel for="input-email">이메일</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="input-pw" name="input-pw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." />
          <TextLabel for="input-pw">비밀번호</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="input-introduce" name="input-introduce" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" />
          <TextLabel for="input-introduce">한 줄 소개</TextLabel>
        </InputContainer>

        <CheckBoxContainer>
          <CheckBoxInput id="input-agreement" name="input-agreement" type="checkbox"/>
          <CheckBoxLabel for="input-agreement"><Link href="#">이용약관</Link>과 <Link href="#">개인정보취급방침</Link>에 동의합니다.</CheckBoxLabel>
        </CheckBoxContainer>

        <ButtonContainer>
          <Button type="reset" bg_color="#DEE2E6" t_color="#000000">취소</Button>
          <Button type="submit" bg_color="#15B886" t_color="#FFFFFF">가입</Button>
        </ButtonContainer>
      </form>
    </Section> {/* End of #input-section */}
  </Section>
  </Register_BaseContainer>
)
