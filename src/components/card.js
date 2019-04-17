import { h } from 'hyperapp'

export default ({hero, decking, deckingLabel}) =>
  <article>
    <div className='card'>
      <h3>{hero.name}</h3>
      <p>#{hero.id}</p>
      <img src={hero.image.url} alt={hero.name} className='image'/>
    </div>
    <button onclick={() => decking(hero)}> {deckingLabel} </button>
  </article>
