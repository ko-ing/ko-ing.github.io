import logo from './logo.jpg';
import './App.css';
import Header from './header/Header';
import styled from 'styled-components';

const WholeWrapper = styled.div`
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b0c0c0;
  color: white;
  font-size: 34px;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  /* border: 0.5px solid #ccccff; */
  
  /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */
`

const ContentWrapper = styled.div`

`

function App() {
  return (
    <WholeWrapper>
      <MainWrapper>
        <Header />
        <ContentWrapper>
          {[...Array(10000)].map((e, i) => (
            <>
              <br/>
              COMMING SOON
              <br/>
              TO THE NEXT LEVEL
            </>
          ))}
        </ContentWrapper>
      </MainWrapper>
    </WholeWrapper>
  );
}

export default App;
