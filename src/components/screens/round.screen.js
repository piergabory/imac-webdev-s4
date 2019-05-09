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
    <div className='roundWrapper'>
      <section>
        <div>
          { (areTeamFormed && !state.survivors) && (
            <div className='splitView'>
              <div className='master'>
                <div className='opposingTeams'>
                  <CardStack cards={state.leftTeam.map(hero => <Card hero={hero}/>)}/>
                  <h2 className='versus'>VS.</h2>
                  <CardStack cards={state.rightTeam.map(hero => <Card hero={hero}/>)}/>
                </div>
                <h2 className='info'>Shall fight in the {state.environment.name}</h2>
              </div>
              <aside className='detail'>
                <TeamPowerstats teams={[state.leftTeam, state.rightTeam]}/>
                { state.environment && <Environment environment={state.environment} /> }
              </aside>
            </div>
          )}
        </div>
        <div>
          { state.survivors && (
            <div className='splitView'>
              <h2 className='info'>The winning team is...</h2>
              <CardStack cards={state.survivors.map(hero => <Card hero={hero}/>)}/>
            </div>
          )}
        </div>
      </section>
      <button className='navbutton mainAction' onclick={() => gatherTeamFromDeckAction()} disabled={cannotGatherTeam} >Next Round</button>
      <button className='navbutton mainAction' onclick={() => fightRoundAction()} disabled={cannotFight} >Fight!</button>
    </div>
  )
}
