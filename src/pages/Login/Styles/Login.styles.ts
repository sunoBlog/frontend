import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #0d0d0e;
`;

export const LeftPanel = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  position: relative;
  overflow: hidden;
`;

export const RightPanel = styled.div`
  flex: 4;
  background: #0e0e0e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
`;

interface CircleProps {
  size: string;
  bottom?: string;
  left?: string;
  translateX?: string;
  translateY?: string;
  gradient: string;
}

export const Circle = styled.div<CircleProps>`
  position: absolute;
  background: ${(props) => props.gradient};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: translateX(${(props) => props.translateX || "0"})
    translateY(${(props) => props.translateY || "0"});
  filter: blur(100px);
`;

export const SignInBox = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: left;
  color: white;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  margin-bottom: 40px;
  color: #aaaaaa;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #333;
  color: white;
  border: 1px solid #444;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #444;
  }
`;

export const Footer = styled.p`
  margin-top: 140px;
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`;