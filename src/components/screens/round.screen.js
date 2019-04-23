import { h } from 'hyperapp'
import Card from '../card'

export default ({state, gatherTeamFromDeckAction, fightRoundAction, isLastRound}) =>
  <div class='wrapper'>
    <section>
      <div>
        <article>{ state.leftTeam.map(h => <Card hero={h}/>) }</article>
        <article>{ state.rightTeam.map(h => <Card hero={h}/>) }</article>
      </div>
      <button onclick={() => {
        (state.leftTeam.length !== 0 && state.rightTeam.length !== 0) && fightRoundAction()
        isLastRound && gatherTeamFromDeckAction()
      }}>
      Next Round
      </button>
    </section>
  </div>
