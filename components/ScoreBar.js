import styled from "styled-components";

import Container from "./Container";
import FlexContainer from "./FlexContainer";

const ScoreBar = ({ away, home }) => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <GameDetails>
            <GameParticipants>
              {away.team} @ {home.team}
            </GameParticipants>
            <GameDate>Aug 31, 2019</GameDate>
          </GameDetails>
          <GameScore>
            <Score winner={away.points > home.points}>{away.points}</Score>
            <Score winner={away.points < home.points}>{home.points}</Score>
          </GameScore>
        </FlexContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.bg};
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.76);
`;

const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const GameParticipants = styled.h3`
  color: ${({ theme }) => theme.color.red};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.heading};
  text-transform: uppercase;
`;

const GameDate = styled.h4`
  color: ${({ theme }) => theme.color.darkText};
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.subheading};
  text-transform: uppercase;
  margin-top: 12px;
`;

const GameScore = styled(FlexContainer)`
  align-self: stretch;
`;

const Score = styled.div`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.red};
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.header};
  padding: 0 24px;
  ${({ theme, winner }) =>
    winner
      ? `
      border-bottom: 6px solid ${theme.color.gold};
    `
      : `
      border-bottom: 6px solid transparent;
      opacity: 0.6;
    `}
`;

export default ScoreBar;