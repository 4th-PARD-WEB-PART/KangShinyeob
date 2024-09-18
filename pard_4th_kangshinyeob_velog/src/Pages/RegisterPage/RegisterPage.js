import '../../App.css';

import styled from "styled-components";

export const BaseContainer = styled.div`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

  margin, padding: 0;
  font-size: 0;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
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
  flex-direction: column-reverse;
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
  width: ${(props) => props.width};
  placeholder: ${(props) => props.placeholder};

  height: 50px;
  font-size: 19px;
  border: 0;
  border-bottom: 1px solid #ACB5BD;

  // pseudo class (:focus)
  &:focus {
    outline: none;
    
    border-bottom: 1px solid #15B886;

    &::placeholder {
      color: #15B886;
    }
  }

  &:focus + label {
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

export const ButtonContainer = styled.div`
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