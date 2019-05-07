import { h } from 'hyperapp'
import Card from '../card'
import Environment from '../environment'
import Chart from '../heroChart'

export default ({state, gatherTeamFromDeckAction, fightRoundAction}) => {
  const areTeamFormed = (state.leftTeam.length > 0 && state.rightTeam.length > 0)
  const cannotGatherTeam = state.isLastRound || areTeamFormed
  const cannotFight = state.isLastRound || !areTeamFormed

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

  const radarData = areTeamFormed && {
    labels: [ 'Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat' ],
    datasets: [
      {data: getTeamPowerstats(state.leftTeam), backgroundColor: 'rgba(255,0,0,0.3)', label: 'Team A'},
      {data: getTeamPowerstats(state.rightTeam), backgroundColor: 'rgba(0,0,255,0.3)', label: 'Team B'}
    ]
  }

  return (
    <div className='roundwrapper'>
      <section className='versusleft'>
        { areTeamFormed && (
          <div className='opposingTeams'>
            <article className='cards'>{ state.leftTeam.map(hero => <Card hero={hero}/>) }</article>
            <h2>VS.</h2>
            <article className='cards'>{ state.rightTeam.map(hero => <Card hero={hero}/>) }</article>
            { state.environment && <Environment environment={state.environment} /> }
          </div>
        )}
        <button onclick={() => gatherTeamFromDeckAction()} disabled={cannotGatherTeam} >Next Round</button>
        <button onclick={() => fightRoundAction()} disabled={cannotFight} >Fight!</button>
      </section>
      { areTeamFormed && (
        <section className='versusright'>
          <p>here comes the radars</p>
          <Chart type='radar' data={radarData}/>
        </section>
      )}
    </div>
  )
}
