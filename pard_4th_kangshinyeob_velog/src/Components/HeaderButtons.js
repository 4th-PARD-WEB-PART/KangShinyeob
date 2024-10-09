import styled from "styled-components";

import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


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

const Header_PagesBox_profile = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 40px;

  background-color: #D9D9D9;

`;


function Buttons() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/edit');
  };

  return (
    <Header_PagesBox>
      <IoNotificationsOutline size="20" />
      <IoSearch size="20" />
      <Header_PagesBox_btn>새 글 작성</Header_PagesBox_btn>
      <Header_PagesBox_profile onClick={handleProfileClick}/>
    </Header_PagesBox>
  )

}

export default Buttons;