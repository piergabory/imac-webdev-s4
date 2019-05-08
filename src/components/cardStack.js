import { h } from 'hyperapp'
export default ({cards}) => <div className='cardStack'>
  { cards.map(card => <div class='stackedCardWrapper'>{card}</div>) }
</div>
