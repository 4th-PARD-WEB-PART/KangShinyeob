import '../../App.css';

import styled from "styled-components";

export const BaseContainer = styled.div`
  font-family: "Inter", sans-serif;   // QUESTION: 폰트 추가 이렇게 맞나요? import는 주로 어디에 하나요?
  font-optical-sizing: auto;
  font-weight: 400, 700;
  font-style: normal;

  margin, padding: 0;
  font-size: 0;

  height: 100vh;   // QUESTION: flex 쓰면 가로로는 자동으로 자리 차지 되는데 새로는 항상 이렇게 써줘야하나요?

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`    // QUESTION: naming convention이 있나요? bootstrap 식의 class naming은 어떤가요?
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 51px;
  margin-bottom: 14px;
`;

export const Hp = styled.p`
  margin: 0;
  margin-bottom: 46px;

  font-weight: 400;
  font-size: 19px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;   // TextInput 안에 pseudo class로 ":focus + label" 사용하기 위해 Input, Label 순으로 배치, column-reverse 이용해 label이 위로 보이게 정렬
  justify-content: flex-start;

  margin-bottom: 23px;

  &:focus-within {
    color: #15B886;
  }
`;

export const TextLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: #ACB5BD;
  
`;

export const TextInput = styled.input`
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

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 84px;
`;

export const CheckBoxInput = styled.input`
  margin: 0;
  margin-right: 11px;

  width: 15px;
  height: 15px;
  color: #ACB5BD;
`;

export const CheckBoxLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
`;

export const Link = styled.a`
  color: #15B886;
  text-decoration: underline 1px #15B886;
`;

export const ButtonContainer = styled.div`    // QUESTION: styled components 사용하면 느린가요? 느리다면 이렇게 간단한 코드는 styled components가 아닌 코드로 하는게 좋을까요?
  display: flex;
`;

export const Button = styled.button`
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