import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { Hero, ScoreBar, Upcoming } from "../components";
import { formatDate } from "../utils";

const API_ENDPOINT =
  "https://api.collegefootballdata.com/games?year=2019&seasonType=regular&team=USC";

const getLastGame = data => {
  let lastGameIndex = -1;
  data.forEach(game => {
    if (game.home_points === null && game.away_points === null) {
      return;
    }

    lastGameIndex++;
  });

  return [data[lastGameIndex], data.slice(lastGameIndex + 1)];
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
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <meta
          name="description"
          content="Did USC win? USC football scores, delivered fresh to your browser."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap"
          rel="stylesheet"
        />

        <meta
          content="https://didusc.win/static/og_img.png"
          property="og:image"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-125571056-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-125571056-3');
          `
          }}
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
