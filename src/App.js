import './App.css';
import Header from './components/Header';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./redux/postsAction";
import { createPromiseThunk } from './utils/asyncUtils';
import { useEffect } from 'react';
import Post from './components/Post';

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
  width: calc(100% - 100px);
  padding: 50px;
`
  
const markdownFiles = require.context('../public/writings', false, /\.md$/)
.keys()
.map(a => a.substring(1))
.map(file => "/writings" + file);

function App() {
  const dispatch = useDispatch();
  const postsReducer = useSelector(state => state.postsReducer);

  useEffect(() => {
    // Promise.all(markdownFiles.map(file => 
    //   fetch("/writings" + file)
    //     .then((res) => {
    //       return {
    //        title: file,
    //        text: res.text()
    //     }})
    //   )
    // )
    //   .then((posts) => dispatch(setPosts(posts)))
    //   .catch((err) => console.error(err));
    console.log("markdownfiles",markdownFiles)

    dispatch(setPosts(markdownFiles));
  }, [])

  useEffect(() => {
    async function fetchAndDispatchPost() {
      console.log("posts", postsReducer.posts)
      const post = await fetch(postsReducer.posts[0])
      const text = await post.text()
      return {
        title: markdownFiles[0],
        text: text
      }
    }
    // fetch(postsReducer.posts[0])
    //   .then(res => res.text())
    //   .then(text => {
    //     console.log("skfjflsk", text)
    //     dispatch(setPost({
    //     title: markdownFiles[0],
    //     text: text
    //   }))}
    //   )
    dispatch(createPromiseThunk(fetchAndDispatchPost()))
  }, [postsReducer])

  return (
    <WholeWrapper>
      <MainWrapper>
        <Header />
        <ContentWrapper>
          <Post />
        </ContentWrapper>
      </MainWrapper>
    </WholeWrapper>
  );
}

export default App;
