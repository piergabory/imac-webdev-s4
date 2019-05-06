import { h } from 'hyperapp'
import Chart from './heroChart'

export default ({hero, decking = false, deckingLabel = false, discard = false, discardLabel = false, onclick = false}) =>
  <article>
    <div className='card' onclick={onclick || console.log}>
      <div className='basics'>
        <h3>{hero.name}</h3>
        <p>#{hero.id}</p>
        <img src={hero.image.url} alt={hero.name} className='image'/>
        <p className='bio'>{'This ' + hero.work.occupation + ' will kick your ass'}</p>
      </div>
      <div className='stats'>
        <p className='int'>{hero.powerstats.intelligence}</p>
        <p className='str'>{hero.powerstats.strength}</p>
        <p className='spd'>{hero.powerstats.speed}</p>
        <p className='dur'>{hero.powerstats.durability}</p>
        <p className='pow'>{hero.powerstats.power}</p>
        <p className='cbt'>{hero.powerstats.combat}</p>
      </div>
      {/* <Chart type='bar' data={Object.values(hero.powerstats)}/> */}
    </div>
    { discardLabel && discard && <button onclick={() => discard(hero)} className='discard'> {discardLabel} </button> }
    { deckingLabel && decking && <button onclick={() => decking(hero)} className='decking'> {deckingLabel} </button> }
  </article>
