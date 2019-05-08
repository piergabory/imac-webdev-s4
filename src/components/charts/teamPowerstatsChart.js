import { h } from 'hyperapp'
import Chart from './chart'

export default ({teams}) => {
  const backgroundColors = [
    'rgba(255,0,0,0.2)',
    'rgba(0,0,255,0.2)',
    'rgba(0,255,0,0.2)',
    'rgba(0,255,255,0.2)',
    'rgba(255,255,0,0.2)'
  ]

  const names = [
    'team A', 'team B', 'team C', 'team D', 'team E'
  ]

  const getTeamPowerstats = team => {
    const powerstats = team.map(hero => Object.values(hero.powerstats).map(s => parseInt(s)))
    const globalstats = powerstats.reduce((globalstats, herostats) => {
      return herostats.map((heroStat, statIndex) => {
        const globalStat = globalstats[statIndex] ? globalstats[statIndex] : 0
        return globalStat + heroStat
      })
    }, [])
    return globalstats
  }

  const radarData = {
    labels: [ 'Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat' ],
    datasets: teams.map((team, index) => ({
      data: getTeamPowerstats(team),
      backgroundColor: backgroundColors[index],
      label: names[index]
    }))
  }

  const radarOptions = {
    animation: {
      duration: 1000,
      easing: 'easeOutSine'
    }
  }

  return <Chart type='radar' data={radarData} options={radarOptions}/>
}
