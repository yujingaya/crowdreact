<template>
  <div class="chart-field scrollbar1" id="style-2" >
        <canvas class="height-fix" id="emotion-chart"></canvas>
  </div>

</template>

<script>
import Chart from 'chart.js'
import emotionChartData from '../chart-data.js'

export default {
  data () {
    return {
      emotionChartData: emotionChartData
    }
  },
  methods: {
    createChart (chartId, chartData) {
      const ctx = document.getElementById(chartId)
      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  },
  mounted () {
    this.createChart('emotion-chart', this.emotionChartData)
  }
}
</script>

<style scoped>
.height-fix{
  position: relative;
  height: 65%; 
  padding-right : 10rem;
}
.chart-field{
  margin-top:1rem;
  align-items: center;  
  padding-left : 10rem;
  
  padding-top : 2rem;
  
}
.scrollbar1
{
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  height: 30rem;
  background: white;
  overflow-x: scroll;
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
  background-color: grey;
}

</style>
