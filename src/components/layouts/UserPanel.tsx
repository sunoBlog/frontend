import React from "react";
import { FaCog } from "react-icons/fa";
import * as S from "./Styles/UserPanel.style";
import { useNavigate } from "react-router-dom";

function UserPanel() {
  const navigate = useNavigate();

  const goToMyBlog = () => {
    navigate("/myblog");
  };

  const goToPlaylist = () => {
    navigate("/playlist");
  };

  return (
    <S.MypageContainer>
      <S.UserProfile>
        <S.UserInfo>
          <S.UserNameAndPlaylist>
            <S.UserName>닉네임</S.UserName>
            {/* onClick으로 /playlist 경로로 이동 */}
            <S.UserPlaylist onClick={goToPlaylist}>My Playlist</S.UserPlaylist>
          </S.UserNameAndPlaylist>
          <S.UserStats>
            <S.FollowStat>
              <S.StatLabel>follow</S.StatLabel>
              <S.StatNumber>0</S.StatNumber>
            </S.FollowStat>
            <S.FollowStat>
              <S.StatLabel>following</S.StatLabel>
              <S.StatNumber>0</S.StatNumber>
            </S.FollowStat>
          </S.UserStats>
        </S.UserInfo>
        <S.ProfileImageContainer>
          <S.ProfileImage />
          <S.SettingsIcon>
            <FaCog />
          </S.SettingsIcon>
        </S.ProfileImageContainer>
      </S.UserProfile>
      <S.Tabs>
        <S.TabItem onClick={goToMyBlog}>my blog</S.TabItem>
        <S.Divider />
        <S.TabItem>이웃</S.TabItem>
      </S.Tabs>
      {/* <S.NewPost>new post</S.NewPost>
      <S.PostList>
        <S.PostItem>
          <S.PostAvatar />
          <S.PostDetails>
            <S.PostName>이웃 닉네임</S.PostName>
            <S.PostTitle>포스트 제목</S.PostTitle>
          </S.PostDetails>
        </S.PostItem>
        <S.PostItem>
          <S.PostAvatar />
          <S.PostDetails>
            <S.PostName>이웃 닉네임</S.PostName>
            <S.PostTitle>포스트 제목</S.PostTitle>
          </S.PostDetails>
        </S.PostItem>
      </S.PostList> */}
    </S.MypageContainer>
  );
}

export default UserPanel;