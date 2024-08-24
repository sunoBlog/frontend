import React from "react";
import styled from "styled-components";
import Sidebar from "./SlideBar";
import PostList from "./PostList";

const MyBlog = () => {
  return (
    <Container>
      <Sidebar />
      <PostList />
    </Container>
  );
};

export default MyBlog;

const Container = styled.div`
  display: flex;
  background: #0d0d0e;
  color: #ffffff;
  height: 100vh;
  font-family: Arial, sans-serif;
  padding: 20px;
`;