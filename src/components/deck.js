import { h } from 'hyperapp'

export default props =>
  <section className='deck cards'>
    {props.deck.map(hero => ({hero, ...props.actions, selected: props.selected === hero.id, inDeck: true}))}
  </section>
