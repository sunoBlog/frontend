import React from "react";
import styled from "styled-components";

const PostList = () => {
  return (
    <Content>
      <Post>
        <PostContentWrapper>
          <PostInfo>
            <PostHeader>
              <PostTitle>작성한 제목 입력</PostTitle>
              <PostMeta>
                <PostDate>2024.08.10</PostDate>
                <ActionButton>추가</ActionButton>
                <ActionButton>삭제</ActionButton>
                <HeartIcon>❤ 34</HeartIcon>
              </PostMeta>
            </PostHeader>
            <PostDescription>
              작성한 글이 여기에다가 나옵니다. 두줄 정도 글이 미리보기로
              나오는게 좋을것 같습니다...
            </PostDescription>
          </PostInfo>
          <PostImage src="path_to_image" alt="Post Visual" />
        </PostContentWrapper>
      </Post>
    </Content>
  );
};

export default PostList;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Post = styled.div`
  margin-left: 30px;
  margin-bottom: 20px;
  padding: 10px;
`;

const PostContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PostInfo = styled.div`
  flex: 2;
  padding-right: 15px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  margin-right: 10px;
  color: #ffffff;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #b5b5b5;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const PostDate = styled.span`
  font-size: 14px;
  color: #b5b5b5;
`;

const ActionButton = styled.button`
  font-size: 12px;
  color: #b5b5b5;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const HeartIcon = styled.span`
  font-size: 14px;
  color: #b5b5b5;
  margin-left: 10px;
`;

const PostDescription = styled.p`
  font-size: 14px;
  color: #b5b5b5;
  line-height: 1.5;
`;

const PostImage = styled.img`
  width: 240px;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
  background: white;
`;