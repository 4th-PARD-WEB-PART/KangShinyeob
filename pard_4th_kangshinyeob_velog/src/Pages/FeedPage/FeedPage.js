import styled from "styled-components";
import logo from "../../img/velog-logo.png";

export const Feed_BaseContainer = styled.div`
  height: 100vh;
  background-color: #f1f3f5;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feed_Header = styled.header`
  height: 90px;
  background-color: skyblue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
`;

export const Feed_Header_logo = styled.img`
  src: {logo};
  height: 23px;
  width: 72px;
  background-color: black;
`;

export const Feed_Header_PagesBox = styled.div`
  width: 220px;
  height: 100%;
  background-color: blue;
`;

// export const Feed_Header_PagesBox_

export const Feed_Nav = styled.nav`
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Feed_Nav_TabList = styled.div`
  
`;

export const Feed_Nav_TabList_TabDiv = styled.div`

`;

export const Feed_PostSection = styled.section`

`;

export const Feed_Post = styled.div`
  width: 327px;
  height: 386px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

export const Feed_Post_Img = styled.img`
  width: 100%;
  height: 171px;

  background-color: green;
`;

export const Feed_Post_TextDiv = styled.div`
  height: 169px;

  padding: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-bewteen;
`;

export const Feed_Post_TextDiv_h = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;

  font-size: 15px;
  font-weight: 700;
`;

export const Feed_Post_TextDiv_p = styled.p`
  margin: 0;

  font-size: 13.5px;
  color: grey;

`;

export const Feed_Post_TextDiv_PostInfoDiv = styled.div`
  color: lightgrey;
  
  display: flex;
  justify-self: flex-end;
`;

export const Feed_Post_TextDiv_PostInfoDiv_p = styled.p`
  margin-right: 11px;

  font-size: 12px;
`;

export const Feed_Post_BottomDiv = styled.div`
  height: 46.5px;
  border-top: 1px solid #f1f3f5;
`