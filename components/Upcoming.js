import styled from "styled-components";

import Container from "./Container";

const Upcoming = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Upcoming</Heading>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 60px 0;
`;

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.heading};
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  &:after {
    display: block;
    content: "";
    height: 3px;
    margin: 12px auto;
    width: 120px;
    background-color: ${({ theme }) => theme.color.gold};
  }
`;

export default Upcoming;
