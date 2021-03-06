import { h } from 'hyperapp'
import FightHistory from '../charts/fightHistoryChart'

export default ({history}) =>
  <div className='victorywrapper'>
    <p>And the winners are...</p>
    <div className='winnerschart'>
      <FightHistory startingDeck={history[0]} history={history}/>
    </div>
  </div>
