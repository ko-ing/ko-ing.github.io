import styled from 'styled-components/macro';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPost } from "../redux/postAction";
import { setPosts } from "../redux/postsAction";
import ReactMarkdown from 'react-markdown';

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`

const Post = () =>  {
  const dispatch = useDispatch();
  const postReducer = useSelector(state => state.postReducer);

  return (
    <>
      <Title>{postReducer.post.title}</Title>
      <ReactMarkdown children={postReducer.post.text} />
    </>
  );
}

export default Post;