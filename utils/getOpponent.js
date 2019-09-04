function getOpponent(game) {
  return game.home_team === "USC" ? game.away_team : game.home_team;
}

export default getOpponent;
