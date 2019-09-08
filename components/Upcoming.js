import styled from "styled-components";

import Container from "./Container";

import { formatDate, getOpponent } from "../utils";

const calculateOpacity = index => {
  if (index >= 4) {
    return 0.25;
  }

  return 1 - 0.25 * index;
};

const Upcoming = ({ remainingGames }) => {
  const games = remainingGames.map((game, index) => (
    <Game key={game.id} opacity={calculateOpacity(index)}>
      <GameOpponent>{getOpponent(game)}</GameOpponent>
      <GameDate>{formatDate(game.start_date)}</GameDate>
    </Game>
  ));

  return (
    <Wrapper>
      <Heading>Upcoming</Heading>

      <Games>{games}</Games>
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

const Games = styled.div`
  flex-direction: column;
`;

const Game = styled.div`
  background-image: url("/static/game_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  margin: 80px auto 0;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ opacity }) => opacity};
`;

const GameOpponent = styled.h4`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gold};
  font-size: ${({ theme }) => theme.fontSize.header};
  margin-bottom: 12px;
  font-weight: 800;

  ${({ theme }) => theme.media.tablet`
    font-size: 40px;
  `};
`;

const GameDate = styled.h5`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.subheading};
  font-weight: 100;
`;

export default Upcoming;
