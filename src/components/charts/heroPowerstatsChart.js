import { h } from 'hyperapp'
import Chart from './chart'

export default ({hero}) => {
  const powerstats = hero.powerstats

  const chartData = {
    labels: [ 'Int', 'Str', 'Spd', 'Dur', 'Pow', 'Cbt' ], // get the powerstats labels,
    datasets: [{
      data: Object.values(powerstats).map(stat => parseInt(stat) || 0), // get the powerstats as integer values,
      backgroundColor: ['#5DC2E8', '#E8542E', '#EBD550', '#E88348', '#A663EB', '#4DEB9D']
    }]
  }

  const chartOptions = {
    legend: {display: false},
    animation: {
      duration: 800,
      easing: 'easeOutBounce'
    },
    scales: {yAxes: [{display: false}]}
  }

  return <Chart type='bar' data={chartData} options={chartOptions}/>
}
