import styled from "styled-components";

import Container from "./Container";
import FlexContainer from "./FlexContainer";

const ScoreBar = ({ away, home, date }) => {
  return (
    <Wrapper>
      <Container>
        <ScoreFlexContainer justify="space-between" align="center">
          <GameDetails>
            <GameParticipants>
              {away.team} @ {home.team}
            </GameParticipants>
            <GameDate>{date}</GameDate>
          </GameDetails>
          <GameScore>
            <Score winner={away.points > home.points}>{away.points}</Score>
            <Score winner={away.points < home.points}>{home.points}</Score>
          </GameScore>
        </ScoreFlexContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.bg};
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.76);
`;

const ScoreFlexContainer = styled(FlexContainer)`
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `};
`;

const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  ${({ theme }) => theme.media.tablet`
    text-align: center;
  `};
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

  ${({ theme }) => theme.media.tablet`
    justify-content: center;
    margin-top: 16px;
  `};
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
