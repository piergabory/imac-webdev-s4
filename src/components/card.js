import { h } from 'hyperapp'

export default ({hero, decking, deckingLabel, discard, discardLabel, onclick}) =>
  <article>
    <div className='card' onclick={onclick}>
      <h3>{hero.name}</h3>
      <p>#{hero.id}</p>
      <img src={hero.image.url} alt={hero.name} className='image'/>
    </div>
    { discardLabel && <button onclick={() => discard(hero)} className='discard'> {discardLabel} </button> }
    { deckingLabel && <button onclick={() => decking(hero)} className='decking'> {deckingLabel} </button> }
  </article>
