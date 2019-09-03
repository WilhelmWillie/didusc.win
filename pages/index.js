import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  const games = data.map(game => (
    <div key={game.id}>
      <b>Home:</b> {game.home_team}
      <br/>
      <b>Away:</b> {game.away_team}
      <br/>

      {game.home_points && game.away_points ? (
        <>
          <b>{game.home_team}: </b> {game.home_points}
          <br/>
          <b>{game.away_team}: </b> {game.away_points}
        </>
      ) : null}

      <hr/>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Did USC Win?</title>
      </Head>

      Did USC win?

      <hr/>

      {games}
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.collegefootballdata.com/games?year=2019&seasonType=regular&team=USC')
  const data = await res.json();

  return { data };
}

export default Home;