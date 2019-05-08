import { h } from 'hyperapp'
import Chart from './chart'

export default ({history}) => {
  const backgroundColors = [
    '#F0757D',
    '#8D96F0',
    '#FFDD4F',
    '#49EB73',
    '#38FF90',
    '#3AE1F0',
    '#C63DEB',
    '#FF8C75',
    '#E0FFA0'
  ]

  const getHeroLineGraph = hero => history.map(survivors => survivors.map(s => s.id).includes(hero.id) ? 1 : 0)

  const data = {
    datasets: history[0].map((hero, index) => ({data: getHeroLineGraph(hero), label: hero.name, cubicInterpolationMode: 'monotone', lineTension: 0.5, fill: 'origin', backgroundColor: backgroundColors[index]}))
  }

  const options = {
    animation: {
      duration: 1000,
      easing: 'easeInOutElastic'
    },
    scales: {
      yAxes: [{ stacked: true }],
      xAxes: [{
        type: 'category',
        labels: ['Start', ...Array(history.length - 2).fill(0).map((_, index) => `Fight #${index + 1}`), 'End']
      }]
    }
  }

  return <Chart type='line' data={data} options={options}/>
}
