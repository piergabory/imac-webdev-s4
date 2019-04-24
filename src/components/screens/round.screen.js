import { h } from 'hyperapp'
import Card from '../card'

export default ({state, gatherTeamFromDeckAction, fightRoundAction}) => {
  const cannotGatherTeam = state.isLastRound || (state.leftTeam.length > 0 || state.rightTeam.length > 0)
  const cannotFight = state.isLastRound || (state.leftTeam.length === 0 || state.rightTeam.length === 0)

  return (
    <div class='wrapper'>
      <section>
        <div className='opposingTeams'>
          <article className='cards'>{ state.leftTeam.map(hero => <Card hero={hero}/>) }</article>
          <article className='cards'>{ state.rightTeam.map(hero => <Card hero={hero}/>) }</article>
        </div>
        <button onclick={() => gatherTeamFromDeckAction()} disabled={cannotGatherTeam} >Next Round</button>
        <button onclick={() => fightRoundAction()} disabled={cannotFight} >Fight!</button>
      </section>
    </div>
  )
}
