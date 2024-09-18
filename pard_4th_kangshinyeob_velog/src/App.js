import './App.css';
import styled from "styled-components";
import { BaseContainer, H1, Hp, TextInput, InputContainer, TextLabel, Section, CheckBoxInput, Link, CheckBoxLabel, CheckBoxContainer } from './Pages/RegisterPage/RegisterPage';

function App() {
  return (
    <BaseContainer>
      <Section>
        <Section id="text-section">
          <H1>환영합니다!</H1>
          <Hp>기본 회원 정보를 등록해주세요</Hp>

        </Section> {/* End of #text-section */}

        <Section id="input-section">
          <form>
            <InputContainer>
              <TextInput id="input-name" type="text" width="249px" placeholder="이름을 입력해주세요." />
              <TextLabel for="input-name">이름</TextLabel>
            </InputContainer>
            <InputContainer>
              <TextInput id="input-email" type="text" width="333px" placeholder="이메일을 입력해주세요." />
              <TextLabel for="input-email">이메일</TextLabel>
            </InputContainer>
            <InputContainer>
              <TextInput id="input-pw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." />
              <TextLabel for="input-pw">비밀번호</TextLabel>
            </InputContainer>
            <InputContainer>
              <TextInput id="input-introduce" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" />
              <TextLabel for="input-introduce">한 줄 소개</TextLabel>
            </InputContainer>

            <CheckBoxContainer>
              <CheckBoxInput id="input-agreement" type="checkbox"/>
              <CheckBoxLabel for="input-agreement"><Link href="#">이용약관</Link>과 <Link href="#">개인정보취급방침</Link>에 동의합니다.</CheckBoxLabel>
            </CheckBoxContainer>

            
          </form>
        </Section> {/* End of #input-section */}
      </Section>
    </BaseContainer>
  );
}

export default App;
