import { h } from 'hyperapp'
import Card from '../card'
import Environment from '../environment'
import TeamPowerstats from '../charts/teamPowerstatsChart'

export default ({state, gatherTeamFromDeckAction, fightRoundAction}) => {
  const areTeamFormed = (state.leftTeam.length > 0 && state.rightTeam.length > 0)
  const cannotGatherTeam = state.isLastRound || areTeamFormed
  const cannotFight = state.isLastRound || !areTeamFormed

  return (
    <div className='roundwrapper'>

      <section className='versusleft'>
        { areTeamFormed && (
          <div className='opposingTeams'>
            <article className='deckcards'>{ state.leftTeam.map(hero => <Card hero={hero}/>) }</article>
            <h2>VS.</h2>
            <article className='deckcards'>{ state.rightTeam.map(hero => <Card hero={hero}/>) }</article>
            { state.environment && <Environment environment={state.environment} /> }
          </div>
        )}
        <button onclick={() => gatherTeamFromDeckAction()} disabled={cannotGatherTeam} >Next Round</button>
        <button onclick={() => fightRoundAction()} disabled={cannotFight} >Fight!</button>
      </section>

      { areTeamFormed && (
        <section className='versusright'>
          <p>here comes the radars</p>
          <TeamPowerstats teams={[state.leftTeam, state.rightTeam]}/>
        </section>
      )}

    </div>
  )
}
