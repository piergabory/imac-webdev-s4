import { h } from 'hyperapp'

export default ({hero, decking = false, deckingLabel = false, discard = false, discardLabel = false, onclick = false}) =>
  <article>
    <div className='card' onclick={onclick || console.log}>
      <h3>{hero.name}</h3>
      <p>#{hero.id}</p>
      <img src={hero.image.url} alt={hero.name} className='image'/>
    </div>
    { discardLabel && discard && <button onclick={() => discard(hero)} className='discard'> {discardLabel} </button> }
    { deckingLabel && decking && <button onclick={() => decking(hero)} className='decking'> {deckingLabel} </button> }
  </article>
