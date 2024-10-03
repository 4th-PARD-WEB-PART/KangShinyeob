import styled from "styled-components";
import Buttons from "../../Components/HeaderButtons";
import Header from "../../Layouts/Header";


const FeedInfo = {
	title : "PARD 4기 화이팅",
	content : "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
	author_name : "김광일",
	author_id : "oksk6681",
	author_image : "/Img/DetailPage/kwangil.png",
	author_info : "개발을 꿈꾸는 사람입니다.",
	date : "24.08.14",
	heart_count : "0",
}



const BaseContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;





export function DetailPage() {

  return (
    <BaseContainer>
      <Header />

      {/* <Main>
        <SideFloatingBar>

        </SideFloatingBar>
        <MainContent>
          <PostHeader>

            <PostTitle>파드 4기 화이팅</PostTitle>
            <PostInfoSection>
              <PostInfo> {/* PostAuthor, PostDate 

              </PostInfo>
              <PostButton>

              </PostButton>
            </PostInfoSection>

          </PostHeader>
          <PostMain>

          </PostMain>
          <PostFooter>
            <AuthorInfoSection>
              <ProfilePic>

              </ProfilePic>
              <AuthorInfo>
                <AuthorName></AuthorName>
                <AuthorIntroduce></AuthorIntroduce>
              </AuthorInfo>
            </AuthorInfoSection>
            
          </PostFooter>
        </MainContent>
      </Main> */}

    </BaseContainer>

  )
}