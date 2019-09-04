import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { Hero, ScoreBar } from "../components";

const API_ENDPOINT =
  "https://api.collegefootballdata.com/games?year=2019&seasonType=regular&team=USC";

const didUSCWin = (away, home) => {
  if (away.team === "USC") {
    return away.points > home.points;
  }

  return home.points > away.points;
};

const Home = ({ data }) => {
  const games = data.map(game => (
    <div key={game.id}>
      <b>Home:</b> {game.home_team}
      <br />
      <b>Away:</b> {game.away_team}
      <br />
      {game.home_points && game.away_points ? (
        <>
          <b>{game.home_team}: </b> {game.home_points}
          <br />
          <b>{game.away_team}: </b> {game.away_points}
          <br />
          <br />
          {didUSCWin(
            {
              team: game.away_team,
              points: game.away_points
            },
            {
              team: game.home_team,
              points: game.home_points
            }
          ) ? (
            <b>Yes, USC won.</b>
          ) : (
            <b>No, USC lost.</b>
          )}
        </>
      ) : null}
      <hr />
    </div>
  ));

  return (
    <>
      <Head>
        <title>Did USC Win?</title>
      </Head>
      <Hero />
      <ScoreBar />
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();

  return { data };
};

export default Home;
