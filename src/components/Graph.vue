<template>
  <div class="graph scrollbar1" id="style-2">
    <div class="force-overflow">
      <canvas id="chart" width="400" height="400"></canvas>
    </div>
  </div>

</template>

<script>
import Chart from 'chart.js'
import { emotionsRef } from '@/firebase/emotion.js'

// const period = 5 * 60 * 1000
const period = 60 * 1000

export default {
  data () {
    return {
      chart: null,
      callback: null,
      start: null
    }
  },
  methods: {
    createChart () {
      this.chart = new Chart('chart', {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
              label: 'angry',
              borderColor: 'rgb(255, 154, 162)',
              backgroundColor: 'rgba(255, 154, 162, 0.3)',
              data: []
            },
            {
              label: 'bored',
              borderColor: 'rgb(178, 220, 247)',
              backgroundColor: 'rgba(178, 220, 247, 0.3)',
              data: []
            },
            {
              label: 'curious',
              borderColor: 'rgb(181, 234, 215)',
              backgroundColor: 'rgba(181, 234, 215, 0.3)',
              data: []
            },
            {
              label: 'like',
              borderColor: 'rgb(199, 206, 234)',
              backgroundColor: 'rgba(199, 206, 234, 0.3)',
              data: []
            },
            {
              label: 'love',
              borderColor: 'rgb(251, 226, 142)',
              backgroundColor: 'rgba(251, 226, 142, 0.3)',
              data: []
            },
            {
              label: 'surprised',
              borderColor: 'rgb(255, 218, 193)',
              backgroundColor: 'rgba(255, 218, 193, 0.3)',
              data: []
            }
          ]
        }
      })
    }
  },
  mounted () {
    this.createChart()
    this.callback = emotionsRef.on('child_added', emotion => {
      const { timestamp, type, sender } = emotion.val()
      const bucket = Math.floor((timestamp + period / 2) / period) * period
      if (this.start === null) {
        this.start = bucket
      }

      const currentLength = this.chart.data.labels.length
      const bucketPosition = (bucket - this.start) / period
      console.log(currentLength, bucketPosition)
      for (let i = currentLength; i <= bucketPosition; i++) {
        const labelMoment = new Date(this.start + (currentLength + i) * period)
        const label = `${labelMoment.getHours()}:${(labelMoment.getMinutes() < 10 ? '0' : '') + labelMoment.getMinutes()}`
        this.chart.data.labels.push(label)
        this.chart.data.datasets.forEach(dataset => {
          dataset.data.push(0)
        })
      }

      this.chart.data.datasets.forEach(dataset => {
        if (dataset.label === type) {
          dataset.data[dataset.data.length - 1] += 1
        }
      })
      this.chart.update()
      console.log(this.chart.data)
    })
  },
  unmount () {
    emotionsRef.off('child_added', this.callback)
  }
}
</script>

<style scoped>
/* .scrollbar1
{
  margin-left: 30px;
  float: left;
  height: 450px;
  width: 300px;
  background: whitesmoke;
  overflow-x: scroll;
  margin-bottom: 25px;
}
.force-overflow
{
  min-width: 300px;
}

#style-2::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: pink;
} */
</style>
