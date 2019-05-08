import { h } from 'hyperapp'
import Powerstats from './charts/heroPowerstatsChart'

export default ({hero, decking = false, deckingLabel = false, discard = false, discardLabel = false, onclick = false}) => {
  return <article className='cardwrapper'>
    <div className='card' onclick={onclick || console.log}>
      <div className='basics'>
        <h3 className='name'>{hero.name}</h3>
        <img src={hero.image.url} alt={hero.name} className='image'/>
        <p className='bio'>{'This ' + hero.work.occupation + ' will kick your ass'}</p>
        <div class='statchart'>
          <p>here comes the cart</p>
          <Powerstats hero={hero}/>
        </div>
      </div>
    </div>
    <nav className='cardButtons'>
      { discardLabel && discard && <button onclick={() => discard(hero)} className='cardButton discard destructive' title={discardLabel}>
        <svg className='glyph' viewbox="0 0 128 128"><path d="M79.627 57l33.942 33.941L90.94 113.57 57 79.627 23.059 113.57.43 90.94 34.373 57 .43 23.059 23.06.43 57 34.373 90.941.43 113.57 23.06 79.627 57z" fill-rule="evenodd"/></svg>
      </button> }
      { deckingLabel && decking && <button onclick={() => decking(hero)} className='cardButton decking additive' title={deckingLabel}>
        <svg className='glyph' viewbox="0 0 128 128"><path fill-rule="evenodd" d="M80.51 48h48v32h-48v48h-32V80h-48V48h48V0h32v48z"/></svg>
      </button> }
    </nav>
  </article>
}
