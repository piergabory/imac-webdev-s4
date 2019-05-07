import { h } from 'hyperapp'

export default ({hero, decking = false, deckingLabel = false, discard = false, discardLabel = false, onclick = false}) =>
  <article className='cardwrapper'>
    <div className='card' onclick={onclick || console.log}>
      <div className='basics'>
        <h3 className='name'>{hero.name}</h3>
        <img src={hero.image.url} alt={hero.name} className='image'/>
        <p className='bio'>{'This ' + hero.work.occupation + ' will kick your ass'}</p>
        <div class='statchart'>
          <p>here comes the cart</p>
        </div>
      </div>
    </div>
    { discardLabel && discard && <button onclick={() => discard(hero)} className='discard'> {discardLabel} </button> }
    { deckingLabel && decking && <button onclick={() => decking(hero)} className='decking'> {deckingLabel} </button> }
  </article>
