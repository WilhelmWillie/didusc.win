import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { Hero, ScoreBar } from "../components";

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

  return data[lastGameIndex];
};

const didUSCWin = (away, home) => {
  if (away.team === "USC") {
    return away.points > home.points;
  }

  return home.points > away.points;
};

const Home = ({ data }) => {
  const lastGame = getLastGame(data);

  const away = {
    team: lastGame.away_team,
    points: lastGame.away_points
  };

  const home = {
    team: lastGame.home_team,
    points: lastGame.home_points
  };

  return (
    <>
      <Head>
        <title>Did USC Win?</title>
      </Head>
      <Hero didWin={didUSCWin(away, home)} />
      <ScoreBar away={away} home={home} />
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();

  return { data };
};

export default Home;
