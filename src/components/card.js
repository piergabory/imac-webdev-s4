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
        <img className='glyph' src='../../styles/img/Button Destructive.png'></img>
      </button> }
      { deckingLabel && decking && <button onclick={() => decking(hero)} className='cardButton decking additive' title={deckingLabel}>
        <img className='glyph' src='../../styles/img/Button Additive.png'></img>
      </button> }
    </nav>
  </article>
}
