import { h } from 'hyperapp'

const weapons = [
  'his bare hands',
  'a frying pan',
  'his feelings',
  'garbage lid',
  'your mom',
  'his will to live',
  'an abondance of kittens',
  'salt',
  'Aids',
  'depression',
  'falcon punch',
  'memes',
  'politics',
  'twitter outrage',
  'shia laboeuf',
  'trigonometry',
  'a segfault exception',
  'anime chicks',
  'kindness and love',
  'a dab',
  'a fidget spinner',
  'outdated 2016 trends',
  'Airpods',
  'tidepods',
  'climate change',
  'Jean Luc Mélanchon',
  'slience',
  'his right thumb',
  'a spoon',
  'a mechanical keyboard',
  'his shrek fanfictions',
  'edgy humor',
  'linkin park covers'
]

const randomWeapon = hash => {
  const index = hash % weapons.length
  return weapons[index]
}

export default ({killer, killed}) => {
  const hash = parseInt(killer.id) * parseInt(killed.id)
  return <span className='killMessage'>
    {killer.name} killed {killed.name} with {randomWeapon(hash)}.
  </span>
}
