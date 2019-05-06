import { h } from 'hyperapp'
import Card from '../card'
import Environment from '../environment'
import Chart from '../heroChart'

export default ({state, gatherTeamFromDeckAction, fightRoundAction}) => {
  const areTeamFormed = (state.leftTeam.length > 0 && state.rightTeam.length > 0)
  const cannotGatherTeam = state.isLastRound || areTeamFormed
  const cannotFight = state.isLastRound || !areTeamFormed

  return (
    <div className='wrapper'>
      <section className='Arena'>
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

      <section className='comparator'>
        <Chart type='radar' data={
          labels:['Team A', 'Team B']
          datasets: [
            leftTeam.
          ]
        }/>
      </section>
    </div>
  )
}
