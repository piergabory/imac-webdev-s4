import { h } from 'hyperapp'

export default props =>
  <article onclick={() => props.select(props.hero)}>
    <div className='card'>
      <div className='basics'>
        <h3>{props.hero.name}</h3>
        <p>#{props.hero.id}</p>
        <img src={props.hero.image.url} alt={props.hero.name} className='image'/>
      </div>
      <div className='stats'>
        <p className='int'>{props.hero.powerstats.intelligence}</p>
        <p className='str'>{props.hero.powerstats.strength}</p>
        <p className='spd'>{props.hero.powerstats.speed}</p>
        <p className='dur'>{props.hero.powerstats.durability}</p>
        <p className='pow'>{props.hero.powerstats.power}</p>
        <p className='cbt'>{props.hero.powerstats.combat}</p>
      </div>
    </div>
    <button onclick={() => props.decking(props.hero)}> {props.deckingLabel} </button>
  </article>
