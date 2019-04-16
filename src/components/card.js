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
        <div className='int'>{props.hero.powerstats.intelligence}</div>
        <div className='str'>{props.hero.powerstats.strength}</div>
        <div className='spd'>{props.hero.powerstats.speed}</div>
        <div className='dur'>{props.hero.powerstats.durability}</div>
        <div className='pow'>{props.hero.powerstats.power}</div>
        <div className='cbt'>{props.hero.powerstats.combat}</div>
      </div>
    </div>
    <button onclick={() => props.decking(props.hero)}> {props.deckingLabel} </button>
  </article>
