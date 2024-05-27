$(window).on("load",function(){

    var ctx = document.getElementById("donutchart1").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Connected", "Disconnected"],
            datasets: [{
                data: [12, 11],
                backgroundColor: [
                    '#afd6fa',
                    '#82b1dd'
                ]
            }]
        },
        options: {
            title: {
              display: false,
            },
            tooltips: {
              mode: 'nearest',
              intersect: false,
              position: 'nearest',
              xPadding: 10,
              yPadding: 10,
              caretPadding: 10
            },
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month'
                  }
                }],
                yAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Value'
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
            }
        }
    });
    var ctx = document.getElementById("donutchart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Solar", "Solar Hybrid", "Battery"],
            datasets: [{
                label: 'Running On',
                data: [25, 5, 1],
                backgroundColor: [
                    '#afd6fa',
                    '#82b1dd',
                    '#6ea1cf'
                ]
            }]
        },
        options: {
            title: {
              display: false,
            },
            tooltips: {
              mode: 'nearest',
              intersect: false,
              position: 'nearest',
              xPadding: 10,
              yPadding: 10,
              caretPadding: 10
            },
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month'
                  }
                }],
                yAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Value'
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
            }
        }
    });
//     var ctx = document.getElementById("donutchart3").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
//         datasets: [{
//             label: '# of Sales',
//             data: [12, 11, 15, 19, 7, 10, 6],
//             backgroundColor: [
//                 'rgba(130, 191, 255, 0.6)', // Light blue
//                 'rgba(83, 143, 204, 0.6)',  // Medium blue
//                 'rgba(66, 122, 183, 0.6)',  // Medium blue
//                 'rgba(52, 99, 154, 0.6)',   // Medium blue
//                 'rgba(20, 69, 135, 0.6)',   // Dark blue
//                 'rgba(36, 56, 89, 0.6)',    // Dark blue
//                 'rgba(15, 38, 68, 0.6)'     // Darkest blue
//             ],
//             borderColor: [
//                 '#82bfff', // Light blue
//                 '#538fcc', // Medium blue
//                 '#427ab7', // Medium blue
//                 '#346399', // Medium blue
//                 '#144587', // Dark blue
//                 '#243859', // Dark blue
//                 '#0f2644'  // Darkest blue
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//           display: false,
//         },
//         tooltips: {
//           mode: 'nearest',
//           intersect: false,
//           position: 'nearest',
//           xPadding: 10,
//           yPadding: 10,
//           caretPadding: 10
//         },
//         legend: {
//           display: false
//         },
//         responsive: true,
//         maintainAspectRatio: true,
//         scales: {
//             xAxes: [{
//               display: false,
//               gridLines: false,
//               scaleLabel: {
//                 display: true,
//                 labelString: 'Month'
//               }
//             }],
//             yAxes: [{
//               display: false,
//               gridLines: false,
//               scaleLabel: {
//                 display: true,
//                 labelString: 'Value'
//               },
//               ticks: {
//                 beginAtZero: true
//               }
//             }]
//         }
//     }
// });

});
