import styled from "styled-components";

import Container from "./Container";

const Hero = ({ didWin }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Question>Did USC win?</Question>
          <Answer>{didWin ? "Yes" : "No"}</Answer>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-image: linear-gradient(52deg, #3e0c0c 0%, #e73b61 100%);
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Question = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header};
  font-weight: 700;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.white};
`;

const Answer = styled.h2`
  color: ${({ theme }) => theme.color.gold};
  font-size: ${({ theme }) => theme.fontSize.max};
  font-weight: 800;
  text-transform: uppercase;
`;

export default Hero;
