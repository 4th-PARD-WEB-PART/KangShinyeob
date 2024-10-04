import '../../App.css';
import styled from "styled-components";


import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Register_BaseContainer = styled.div`
  font-family: "Inter", sans-serif;   // QUESTION: 폰트 추가 이렇게 맞나요? import는 주로 어디에 하나요?
  font-optical-sizing: auto;
  font-weight: 400, 700;
  font-style: normal;

  margin: 0;
  padding: 0;
  font-size: 0;

  height: 100vh;   // QUESTION: flex 쓰면 가로로는 자동으로 자리 차지 되는데 새로는 항상 이렇게 써줘야하나요?

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`    // QUESTION: naming convention이 있나요? bootstrap 식의 class naming은 어떤가요?
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
  placeholder: ${(props) => props.placeholder};

  height: 50px;
  font-size: 19px;
  border: 0;
  border-bottom: 1px solid #ACB5BD;

  &:focus {   // pseudo class (:focus)
    outline: none;
    
    border-bottom: 1px solid #15B886;

    &::placeholder {
      color: #15B886;
    }
  }

  &:focus + label {   // label 자체는 form이 아니므로 ':focus' pseudo class 사용 불가. '+' 선택자(next sibling combinator) 이용
    color: #15B886;
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

const ButtonContainer = styled.div`    // QUESTION: styled components 사용하면 느린가요? 느리다면 이렇게 간단한 코드는 styled components가 아닌 코드로 하는게 좋을까요?
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

  const [name, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target[0].value);
    console.log(name);
  }

  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target[1].value);
    console.log(email);
  }

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target[2].value);
    console.log(password);
  }

  const [introduce, setIntroduce] = useState('');
  const handleIntroduceChange = (e) => {
    setIntroduce(e.target[3].value);
    console.log(introduce);
  }

  const [isAgreed, setIsAgreed] = useState(false);
  const handleisAgreedChange = (e) => {
    setIsAgreed(e.target[4].value);
    console.log(isAgreed);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    handleNameChange(e);
    handleEmailChange(e);
    handlePasswordChange(e);
    handleIntroduceChange(e);
    handleisAgreedChange(e);


    if(name!=='' && email!=='' && password!=='' && introduce!=='' && isAgreed==='on') navigate('/feed');
    else if(isAgreed!=='on') alert('체크박스를 확인해주세요');
    else alert('모든 정보를 입력해주세요!');
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
          <TextInput id="inputName" name="inputName" type="text" width="249px" placeholder="이름을 입력해주세요." />
          <TextLabel htmlFor="inputName">이름</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="inputEmail" name="inputEmail" type="text" width="333px" placeholder="이메일을 입력해주세요." />
          <TextLabel htmlFor="inputEmail">이메일</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="inputPw" name="inputPw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." />
          <TextLabel htmlFor="inputPw">비밀번호</TextLabel>
        </InputContainer>
        <InputContainer>
          <TextInput id="inputIntroduce" name="inputIntroduce" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" />
          <TextLabel htmlFor="inputIntroduce">한 줄 소개</TextLabel>
        </InputContainer>

        <CheckBoxContainer>
          <CheckBoxInput id="agreement" name="agreement" type="checkbox"/>
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