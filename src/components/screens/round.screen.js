import { h } from 'hyperapp'
import Card from '../card'
import CardStack from '../cardStack'
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
            <CardStack cards={state.leftTeam.map(hero => <Card hero={hero}/>)}/>
            <h2>VS.</h2>
            <CardStack cards={state.rightTeam.map(hero => <Card hero={hero}/>)}/>
            { state.environment && <Environment environment={state.environment} /> }
          </div>
        )}
        <button onclick={() => gatherTeamFromDeckAction()} disabled={cannotGatherTeam} >Next Round</button>
        <button onclick={() => fightRoundAction()} disabled={cannotFight} >Fight!</button>
      </section>

      { areTeamFormed && (
        <section className='versusright'>
          <TeamPowerstats teams={[state.leftTeam, state.rightTeam]}/>
        </section>
      )}

    </div>
  )
}
