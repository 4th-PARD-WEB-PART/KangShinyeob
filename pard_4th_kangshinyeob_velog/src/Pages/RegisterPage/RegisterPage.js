import '../../App.css';
import styled from "styled-components";


import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../Atom';


const Register_BaseContainer = styled.div`
  background-color: white;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400, 700;
  font-style: normal;

  margin: 0;
  padding: 0;
  font-size: 0;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 51px;
  margin-bottom: 14px;
`;

const Hp = styled.p`
  margin: 0;
  margin-bottom: 46px;

  font-weight: 400;
  font-size: 19px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;   // TextInput 안에 pseudo class로 ":focus + label" 사용하기 위해 Input, Label 순으로 배치, column-reverse 이용해 label이 위로 보이게 정렬
  justify-content: flex-start;

  margin-bottom: 23px;

  &:focus-within {
    color: #15B886;
  }
`;

const TextLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: #ACB5BD;
  
`;

const TextInput = styled.input`
  width: ${(props) => props.width};   // input들의 placeholder와 width만 다르고 나머지 스타일은 동일함. props 이용해 코드 중복 방지!

  height: 50px;
  font-size: 19px;
  border: 0;
  border-bottom: 1px solid #ACB5BD;

  &:focus {   // pseudo class (:focus)
    outline: none;
    
    border-bottom: 1px solid ${(props) => props.color};

    &::placeholder {
      color: ${(props) => props.color};
    }
  }

  &:focus + label {   // label 자체는 form이 아니므로 ':focus' pseudo class 사용 불가. '+' 선택자(next sibling combinator) 이용
    color: ${(props) => props.color};
  }


`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 84px;
`;

const CheckBoxInput = styled.input`
  margin: 0;
  margin-right: 11px;

  width: 15px;
  height: 15px;
  color: #ACB5BD;
`;

const CheckBoxLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
`;

const A = styled.a`
  color: #15B886;
  text-decoration: underline 1px #15B886;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 93px;
  height: 41px;
  border: 0;
  border-radius: 20.5px;

  margin-right: 10px;

  font-size: 20px;
  font-weight: 700;

  background-color: ${(props) => props.bg_color};
  color: ${(props) => props.t_color};
`;





export function RegisterPage() {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newIntro, setNewIntro] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const [isNameWrong, setIsNameWrong] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isIntroWrong, setIsIntroWrong] = useState(false);
  const [isNotAgreed, setIsNotAgreed] = useState(false);

  /* onChange가 이미 값 변경함. -> Not needed? X */
  const handleUserInfoChange = () => {
    setUser(() => ({
      name: newName,
      email: newEmail,
      password: newPassword,
      intro: newIntro,

    }))
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newName !== '' && newEmail !== '' && newPassword !== '' && newIntro !== '' && isAgreed) {
      handleUserInfoChange();

      navigate('/feed');
    } else if (newName === '' && newEmail === '' && newPassword === '' && newIntro === '') {
      setIsNameWrong((newName === '')? true: false);
      setIsEmailWrong((newEmail === '')? true: false);
      setIsPasswordWrong((newPassword === '')? true: false);
      setIsIntroWrong((newIntro === '')? true: false);


      alert('모든 정보를 입력해주세요!');
    } else {
      alert('이용약관에 동의해주세요');
    }
  };

  return (

  <Register_BaseContainer>
  <Section>
    <Section id="text-section">
      <H1>환영합니다!</H1>
      <Hp>기본 회원 정보를 등록해주세요</Hp>

    </Section> {/* End of #text-section */}

    <Section id="input-section">
      <form onSubmit={ handleSubmit } >

        <InputContainer>
          <TextInput id="NameInput" type="text" width="249px" placeholder="이름을 입력해주세요." value={newName} onChange={(e) => setNewName(e.target.value)} color={(isNameWrong)? '#FF1C1C': '#15B886'} />
          <TextLabel htmlFor="NameInput">이름</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="EmailInput" name="newEmail" type="text" width="333px" placeholder="이메일을 입력해주세요." value={newEmail} onChange={(e) => setNewEmail(e.target.value)} color={(isNameWrong)? '#FF1C1C': '#15B886'} />
          <TextLabel htmlFor="EmailInput">이메일</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="PwInput" name="newPw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." value={newPassword} onChange={(e) => setNewPassword(e.target.value)} color={(isNameWrong)? '#FF1C1C': '#15B886'} />
          <TextLabel htmlFor="PwInput">비밀번호</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="IntroInput" name="newIntro" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" value={newIntro} onChange={(e) => setNewIntro(e.target.value)} color={(isNameWrong)? '#FF1C1C': '#15B886'} />
          <TextLabel htmlFor="IntroInput">한 줄 소개</TextLabel>
        </InputContainer>

        <CheckBoxContainer>
          <CheckBoxInput id="agreement" name="agreement" type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(!isAgreed)} />
          <CheckBoxLabel htmlFor="agreement"><A href="#">이용약관</A>과 <A href="#">개인정보취급방침</A>에 동의합니다.</CheckBoxLabel>
        </CheckBoxContainer>

        <ButtonContainer>
          <Button type="reset" bg_color="#DEE2E6" t_color="#000000">취소</Button>
          <Button type="submit" bg_color="#15B886" t_color="#FFFFFF">가입</Button>
        </ButtonContainer>
      </form>
    </Section> {/* End of #input-section */}
  </Section>
  </Register_BaseContainer>
);
}