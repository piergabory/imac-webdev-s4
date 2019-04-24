const environments = [
  {name: 'city', statisticsWeights: { intelligence: 100, strength: 10, speed: 10, durability: 50, power: 30, combat: 60 }},
  {name: 'desert', statisticsWeights: { intelligence: 10, strength: 90, speed: 30, durability: 90, power: 20, combat: 20 }},
  {name: 'jungle', statisticsWeights: { intelligence: 50, strength: 30, speed: 5, durability: 80, power: 10, combat: 100 }},
  {name: 'mountain', statisticsWeights: { intelligence: 5, strength: 100, speed: 30, durability: 90, power: 80, combat: 50 }},
  {name: 'sea', statisticsWeights: { intelligence: 5, strength: 50, speed: 90, durability: 10, power: 80, combat: 5 }}
]

const score = (team, weight) => {
  return team.reduce((acc, hero) => {
    const heroScore = Object.entries(hero.powerstats).reduce((acc, valueKeyPair) => {
      const powerStatKey = valueKeyPair[0]
      const powerStatValue = parseFloat(valueKeyPair[1])
      return acc + powerStatValue * weight[powerStatKey]
    }, 0)
    return acc + heroScore
  }, 0)
}

export const defineEnvironment = () => {
  const randomIndex = Math.floor(Math.random() * environments.length)
  return environments[randomIndex]
}

export const fight = (leftTeam, rightTeam, environment) => {
  const leftTeamScore = score(leftTeam, environment.statisticsWeights)
  const rightTeamScore = score(rightTeam, environment.statisticsWeights)
  return leftTeamScore > rightTeamScore ? leftTeam : rightTeam
}
