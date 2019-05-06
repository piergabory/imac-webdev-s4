import { h } from 'hyperapp'
import { ChartJS } from 'chartjs'

export default ({parameters}) => {
  const canvas = <canvas></canvas>
  return <div className="chart">{canvas}{ChartJS(canvas.getContext('2d'), parameters)}</div>
}
