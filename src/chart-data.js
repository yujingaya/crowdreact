export const emotionChartData = {
  type: 'line',
  data: {
    labels: ['6:30', '6:35', '6:40', '6:45', '6:50', '6:55', '7:00', '7:05'],
    datasets: [
      { // one line graph
        label: 'angry',
        data: [0, 0, 1, 2, 67, 62, 27, 14],
        backgroundColor: [
          'rgba(214,46,33,.7)'
        ],
        borderColor: [
          '#d62e21'
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'curious',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(175, 223,160,.7)' // Green
        ],
        borderColor: [
          '#afdfa0'
        ],
        borderWidth: 3
      },
      { 
        label: 'love',
        data: [34, 21.1, 52.7, 65.7, 109.8, 156.4, 150.7, 219.2],
        backgroundColor: [
          'rgba(255, 202,40,.7)' // Green
        ],
        borderColor: [
          '#ffca28'
        ],
        borderWidth: 3
      },
      { 
        label: 'boring',
        data: [134, 121.1, 152.7, 165.7, 19.8, 56.4, 50.7, 119.2],
        backgroundColor: [
          'rgba(140, 182,213,.7)' // Green
        ],
        borderColor: [
          '#8cb6d5'
        ],
        borderWidth: 3
      },
      { 
        label: 'like',
        data: [64, 51.1, 23.7, 111.7, 139.8, 86.4, 180.7, 219.2],
        backgroundColor: [
          'rgba(186, 104,200,.7)' // Green
        ],
        borderColor: [
          '#ba68c8'
        ],
        borderWidth: 3
      },
      { 
        label: 'surprise',
        data: [34, 151.1, 32.7, 55.7, 29.8, 36.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(255, 128, 0,.7)' // Green
        ],
        borderColor: [
          '#f39c12'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: false,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 90,
          beginAtZero: true,
          padding: 25
        }
      }]
    },
    legend: {
      display: false
    }
  }
}

export default emotionChartData
