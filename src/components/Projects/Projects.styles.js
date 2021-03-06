import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";

export const Container = styled.div`
  position: relative;
  min-height: 700px;
  width: 85%;
  background-color: black;
  margin: 0 auto;
  transition: 1s all;
  border-radius: 10px;
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  @media (max-width: 1020px) {
    width: 85%;
  }
  z-index: 2;
`;

export const BackgroundDiv = styled.div`
  position: absolute;
  width: 85%;
  background: linear-gradient(180deg, #ff5858, #c058ff);
  transform: matrix(1, 0.04, -0.07, 1, 0, 0) scale(1);
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  transition: 1s all;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  @media (max-width: 1020px) {
    transform: matrix(1, 0.05, -0.02, 1, 0, 0) scale(1);
    width: 75%;
  }

  @media (max-width: 1020px) {
    width: 85%;
  }
  @media (max-width: 426px) {
    width: 85%;
    transform: matrix(1, 0.05, -0.01, 1, 0, 0) scale(1.003);
  }
    
`;

export const Grid = styled.div`
  display: grid;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  grid-template-columns: 1fr 1fr;
  gap: 3em;
 

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;
export const Content = styled.div`
  padding: 3em 5em;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  column-gap: 2em;
  row-gap: 3em;
  @media (max-width: 600px) {
    padding: 1.5em 2em;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  img {
    height: auto;
    width: 100%;
    place-self: center;
  }
  a{
    height: fit-content;
    width: 100%;
    display:grid;
  }

  @media (max-width: 1025px) {
    align-items: center;
    img {
      max-width: 331px;
      max-height: 196px;
    }
    a{
      max-width: 90%
    }
  }

  @media (max-width: 1020px) {
    img {
      max-width: 443px;
      max-height: 263px;
    }
  }

  @media (max-width: 737px) {
    img {
      max-width: 419px;
      max-height: 248px;
    }
  }

  @media (max-width: 685px) {
    img {
      max-width: 379px;
      max-height: 225px;
    }
  }

  @media (max-width: 415px) {
    img {
      max-width: 259px;
      max-height: 154px;
    }
  }

  @media (max-width: 376px) {
    img {
      max-width: 229px;
      max-height: 136px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0 3em;
  h3 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 18px;
    color: rgba(107, 114, 128);
    line-height: 1.4;
    text-align: center;
  }
  
  @media (max-width: 1020px) {
    padding: 0 2em;
  }
  @media (max-width: 400px) {
    padding: 0 1em;
  }
`;

export const SeeMoreBtn = styled.button`
  height: fit-content;
  color: black;
  background-color: white;
  padding: 8px 24px;
  font-size: 16px;
  border-radius: 100px;
  outline: none;
  border: none;
  font-weight: bold;
  width: fit-content;
  place-self: center;
  display: flex;
  gap: 0.5em;
  place-content: center;
  cursor: pointer;
`;

export const TriangleBtn = styled(BsTriangleFill)`
  color: black;
  transform: rotate(180deg);
  align-self: center;
  width: 12px;
`;
