import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../axiosInterceptor";
import DotNav from "../../components/DotNav";
import MusicRecommend from "./MusicRecommend";
import NewPost from "./NewPost";
import * as S from "./Styles/Home.styles";

function Home() {
  // 각 섹션에 대한 참조 생성
  const homeRef = useRef<HTMLDivElement>(null);
  const musicRecommendRef = useRef<HTMLDivElement>(null);
  const newPostRef = useRef<HTMLDivElement>(null);

  // 현재 활성화된 섹션 상태
  const [activeSection, setActiveSection] = useState("home");

  // 인기 해시태그 상태
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    // 인기 해시태그 가져오기
    const fetchPopularHashtags = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/post/search/hashtags");
        setHashtags(response.data);
      } catch (error) {
        console.error("Failed to fetch popular hashtags:", error);
      }
    };

    fetchPopularHashtags();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% 이상 화면에 보여야 활성화로 처리
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === homeRef.current) {
            setActiveSection("home");
          } else if (entry.target === musicRecommendRef.current) {
            setActiveSection("musicRecommend");
          } else if (entry.target === newPostRef.current) {
            setActiveSection("newPost");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (homeRef.current) observer.observe(homeRef.current);
    if (musicRecommendRef.current) observer.observe(musicRecommendRef.current);
    if (newPostRef.current) observer.observe(newPostRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (musicRecommendRef.current)
        observer.unobserve(musicRecommendRef.current);
      if (newPostRef.current) observer.unobserve(newPostRef.current);
    };
  }, []);

  // 스크롤 이동을 처리하는 함수
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.PageContainer>
      <DotNav
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToMusicRecommend={() => scrollToSection(musicRecommendRef)}
        scrollToNewPost={() => scrollToSection(newPostRef)}
        activeSection={activeSection}
      />
      <S.Background ref={homeRef}>
        <S.CircleContainer>
          <S.Circle
            size="800px"
            top="70%"
            left="35%"
            translateX="-50%"
            translateY="-50%"
            gradient="linear-gradient(135deg, #F12FBB 0%, #B2EA6A 100%)"
          />
          <S.Circle
            size="800px"
            top="50%"
            left="80%"
            translateX="-50%"
            translateY="-50%"
            gradient="linear-gradient(135deg, #2B8DBE 0%, #C06AEA 100%)"
          />
        </S.CircleContainer>
        <S.HashtagContainer>
          <h2>Popular Hashtags</h2>
            {hashtags.length > 0 ? (
              hashtags
              .filter((hashtag) => hashtag.trim() !== "")
              .map((hashtag, index) => (
                <span key={index}>#{hashtag}</span>
              ))
            ) : (
              <p>No popular hashtags available</p>
            )}
        </S.HashtagContainer>
      </S.Background>

      <S.Section ref={musicRecommendRef}>
        <MusicRecommend />
      </S.Section>

      <S.Section ref={newPostRef}>
        <NewPost />
      </S.Section>
    </S.PageContainer>
  );
}

export default Home;
