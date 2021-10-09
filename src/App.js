import logo from './logo.jpg';
import './App.css';
import Header from './header/Header';
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


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
  width: 100%;
`


const markdownFiles = require.context('./writings', false, /\.md$/)
  .keys()
  .map(a => "./writings" + a.substring(1))
  

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Promise.all(markdownFiles.map((file) => fetch(file)
      .then((res) => res.text())))
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err));
  }, [])

  return (
    <WholeWrapper>
      <MainWrapper>
        <Header />
        <ContentWrapper>
          {posts.map((post) => (
            <>
              <ReactMarkdown children={post} />
            </>)
          )}
        </ContentWrapper>
      </MainWrapper>
    </WholeWrapper>
  );
}

export default App;
