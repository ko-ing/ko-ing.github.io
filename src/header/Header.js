import styled, { keyframes } from 'styled-components/macro';

const photoKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bbbfbb;
  background-color: #598987;
  height: 160px;
  width: 100%;
  top: 0px;
  @media only screen and (min-width: 1200px) {
    /* width: 1200px; */
    padding: 0px calc(100wh - 1200px)
  }
`

const TitlePhoto = styled.div`
  height: 120px;
  width: 120px;
  min-height: 64px;
  min-width: 64px;
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
`;

const LinkImage = styled.div`
  height: 60px;
  width: 60px;
  min-height: 20px;
  min-width: 20px;
  margin: 10px;
  background-image: url(${p => p.image});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`

const Header = () => {
    return (
      <HeaderWrapper>
        <TitlePhoto image="/logo.jpeg" margin="20px"/>
        <WordsWrapper>
          KO-ING's BLOG
          <LinkImage image="/github.svg" onClick={() => {window.location.assign("https://github.com/ko-ing")}}/>
        </WordsWrapper>
      </HeaderWrapper>
    );
}

export default Header