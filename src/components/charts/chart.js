import { h } from 'hyperapp'
import ChartJS from 'chart.js'

export default ({type, data, options = {}, width = 200, height = 100}) =>
  <canvas
    width={width} height={height}
    oncreate={ element => {
      const ctx = element.getContext('2d')
      const chart = new ChartJS(ctx, {type, data, options})
    }}>
  </canvas>
