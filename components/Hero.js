import styled from "styled-components";

import Container from "./Container";

const Hero = ({ didWin }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Column>
            <Question>Did USC win?</Question>
            <Answer>{didWin ? "Yes" : "No"}</Answer>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-image: linear-gradient(52deg, #3e0c0c 0%, #e73b61 100%);
  padding-top: 80px;
  padding-bottom: 80px;

  ${({ theme }) => theme.media.tablet`
    padding-top: 60px;
    padding-bottom:  60px;
    text-align: center;
  `};
`;

const Column = styled.div`
  width: 50%;
  text-align: center;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

const Question = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header};
  font-weight: 700;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.media.tablet`
    font-size: 32px;
  `};
`;

const Answer = styled.h2`
  color: ${({ theme }) => theme.color.gold};
  font-size: ${({ theme }) => theme.fontSize.max};
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 16px;
  width: auto;

  &:before {
    display: block;
    content: "";
    height: 2px;
    margin: 0 auto 8px;
    width: 80px;
    background-color: ${({ theme }) => theme.color.gold};
  }

  &:after {
    display: block;
    content: "";
    height: 2px;
    margin: 8px auto 0;
    width: 80px;
    background-color: ${({ theme }) => theme.color.gold};
  }

  ${({ theme }) => theme.media.tablet`
    font-size: 60px;
  `};
`;

export default Hero;
