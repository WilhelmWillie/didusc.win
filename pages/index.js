import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { Hero, ScoreBar, Upcoming } from "../components";
import { formatDate } from "../utils";

const API_ENDPOINT =
  "https://api.collegefootballdata.com/games?year=2019&seasonType=regular&team=USC";

const getLastGame = data => {
  let lastGameIndex = 0;
  data.forEach(game => {
    if (Date.now > Date(game.start_date)) {
      return;
    }

    lastGameIndex++;
  });

  return [data[lastGameIndex], data.slice(lastGameIndex)];
};

const didUSCWin = (away, home) => {
  if (away.team === "USC") {
    return away.points > home.points;
  }

  return home.points > away.points;
};

const Home = ({ data }) => {
  const [lastGame, remainingGames] = getLastGame(data);

  const away = {
    team: lastGame.away_team,
    points: lastGame.away_points
  };

  const home = {
    team: lastGame.home_team,
    points: lastGame.home_points
  };

  const lastGameDate = formatDate(lastGame.start_date);

  return (
    <>
      <Head>
        <title>Did USC Win?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero didWin={didUSCWin(away, home)} />
      <ScoreBar away={away} home={home} date={lastGameDate} />
      <Upcoming remainingGames={remainingGames} />
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();

  return { data };
};

export default Home;
