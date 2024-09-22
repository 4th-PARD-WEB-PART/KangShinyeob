import styled from "styled-components";
import logo from "../../img/velog-logo.png";

export const Feed_BaseContainer = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feed_Header = styled.header`
  height: 90px;
  background-color: skyblue;

  display: flex;
  justify-content: space-between;
  width: 1050px;
`;

export const Feed_Header_logo = styled.img`
  src: {logo};
  height: 23px;
  width: 72px;
  background-color: white;
`;

export const Feed_Header_PagesBox = styled.div`
  width: 220px;
  background-color: blue;
`;

export const Feed_Nav = styled.nav`

`;

export const Feed_Main = styled.main`

`;

export const Feed_Post = styled.div`

`;