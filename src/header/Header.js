import styled, { keyframes } from 'styled-components/macro';

const photoKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HeaderOuterWrapper = styled.div`
  min-width: 320px;
  position: fixed;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bbbfbb;
  background-color: #598987;
  height: 160px;
  width: 100%;
  top: 0px;
  @media only screen and (min-width: 1200px) {
    /* width: 1200px; */
    /* padding: 0px calc(100wh - 1200px) */
  }
`

const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`

const TitlePhoto = styled.div`
  height: 120px;
  width: 120px;
  min-height: 80px;
  min-width: 80px;
  border-radius: 50%;
  margin: ${p => p.margin};
  background-image: url(${p => p.image});
  background-size: cover;
  animation: ${photoKeyFrames} infinite 70s linear;
`;

const WordsWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  @media only screen and (max-width: 1200px) {
    display: flex;

  }
`;

const LinkImage = styled.div`
  height: 60px;
  width: 60px;
  min-height: 60px;
  min-width: 60px;
  margin: 10px;
  background-image: url(${p => p.image});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`

const Header = () => {
    return (
      <HeaderOuterWrapper>
        <HeaderInnerWrapper>
          <TitlePhoto image="/logo.jpeg" margin="20px"/>
          <WordsWrapper>
            KO-ING's BLOG
            <LinkImage image="/github.svg" onClick={() => {window.location.assign("https://github.com/ko-ing")}}/>
          </WordsWrapper>
        </HeaderInnerWrapper>
      </HeaderOuterWrapper>
    );
}

export default Header