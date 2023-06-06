(function($) {
  'use strict';
  $(function() {
    if ($("#account-retension").length) {
      var graphGradient = document.getElementById("account-retension").getContext('2d');;
      var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 170);
      saleGradientBg.addColorStop(0, 'rgba(30, 226, 209, 1)');
      saleGradientBg.addColorStop(1, 'rgba(222, 255, 251, 0.05)');
      var accountRetensionData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: '# of Votes',
              data: [30, 37, 40, 35, 35, 45, 45, 40],
              backgroundColor: saleGradientBg,
              borderColor: [
                  '#1bcbbc',
              ],
              borderWidth: 3,
              fill: true, // 3: no fill
              pointBorderWidth: 3,
              pointRadius: [0, 0, 0, 7, 0, 0, 0, 0,],
              pointHoverRadius: [0, 0, 0, 7, 0, 0, 0, 0,],
              pointBackgroundColor: ['rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)'],
              pointBorderColor: ['#1bcbbc', '#1bcbbc', '#1bcbbc', '#1bcbbc','#1bcbbc', '#1bcbbc', '#1bcbbc', '#1bcbbc'],
          }]
      };
  
      var accountRetensionOptions = {
          scales: {
              yAxes: [{
                display: true,
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      maxLines: 2,
                      color:'rgba(90, 113, 208, 0.11)',
                      zeroLineColor:'rgba(90, 113, 208, 0.11)',
                      drawTicks: false
                  },
                  ticks: {
                    display: false,
                      beginAtZero: true,
                      min: 0,
                      max: 50,
                      stepSize: 25
                  }
              }],
              xAxes: [{
                display: true,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                  },
                  ticks: {
                      beginAtZero: false,
                      fontColor: "#001737",
                      fontSize: 10,
                      precision: 0
                  }
              }],
          },
          legend: {
              display: false
          },
          elements: {
              line: {
                  tension: 0.4,
              }
          },
          tooltips: {
              backgroundColor: 'rgba(31, 59, 179, 1)',
              enabled: false,
          }
      }
      var accountRetensionTop = new Chart(graphGradient, {
          type: 'line',
          data: accountRetensionData,
          options: accountRetensionOptions
      });
    }
    if ($("#account-retension-dark").length) {
      var graphGradient = document.getElementById("account-retension-dark").getContext('2d');;
      var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 170);
      saleGradientBg.addColorStop(0, 'rgba(30, 226, 209, 1)');
      saleGradientBg.addColorStop(1, 'rgba(0, 0, 0, .1)');
      var accountRetensionDarkData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: '# of Votes',
              data: [30, 37, 40, 35, 35, 45, 45, 40],
              backgroundColor: saleGradientBg,
              borderColor: [
                  '#12e2d0',
              ],
              borderWidth: 3,
              fill: true, // 3: no fill
              pointBorderWidth: 3,
              pointRadius: [0, 0, 0, 7, 0, 0, 0, 0,],
              pointHoverRadius: [0, 0, 0, 7, 0, 0, 0, 0,],
              pointBackgroundColor: ['rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)'],
              pointBorderColor: ['#1bcbbc', '#1bcbbc', '#1bcbbc', '#1bcbbc','#1bcbbc', '#1bcbbc', '#1bcbbc', '#1bcbbc'],
          }]
      };
  
      var accountRetensionDarkOptions = {
          scales: {
              yAxes: [{
                display: true,
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      maxLines: 2,
                      color:'rgba(90, 113, 208, 0.11)',
                      zeroLineColor:'rgba(90, 113, 208, 0.11)',
                      drawTicks: false
                  },
                  ticks: {
                    display: false,
                      beginAtZero: true,
                      min: 0,
                      max: 50,
                      stepSize: 25
                  }
              }],
              xAxes: [{
                display: true,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                  },
                  ticks: {
                      beginAtZero: false,
                      fontColor: "#a7afb7",
                      fontSize: 10,
                      precision: 0
                  }
              }],
          },
          legend: {
              display: false
          },
          elements: {
              line: {
                  tension: 0.4,
              }
          },
          tooltips: {
              backgroundColor: 'rgba(31, 59, 179, 1)',
              enabled: false,
          }
      }
      var accountRetensionDarkTop = new Chart(graphGradient, {
          type: 'line',
          data: accountRetensionDarkData,
          options: accountRetensionDarkOptions
      });
    }
    if ($("#earnings").length) {
      var graphGradient = document.getElementById("earnings").getContext('2d');
      var earningsData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [{
              label: '# of Votes',
              data: [15, 41, 34, 69, 39, 36, 54],
              backgroundColor: [
                '#c8f0ec', '#c8f0ec',  '#c8f0ec', '#c8f0ec', '#c8f0ec', '#c8f0ec', '#26cebf',
            ],
              borderColor: [
                '#c8f0ec', '#c8f0ec',  '#c8f0ec', '#c8f0ec', '#c8f0ec', '#c8f0ec', '#26cebf',
              ]
          }]
      };
  
      var earningsOptions = {
          scales: {
              yAxes: [{
                display: false,
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      maxLines: 4
                  },
                  ticks: {
                    display: false,
                    beginAtZero: false,
                  }
              }],
              xAxes: [{
                display: false,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                  },
                  ticks: {
                      beginAtZero: false,
                  }
              }],
          },
          legend: {
              display: false
          },
          elements: {
              line: {
                  tension: 0.4,
              }
          },
          tooltips: {
              backgroundColor: 'rgba(31, 59, 179, 1)',
              enabled: false
          }
      }
      var earningschart = new Chart(graphGradient, {
          type: 'bar',
          data: earningsData,
          options: earningsOptions
      });
    }
    if ($("#revenue-statistics").length) {
      var graphGradient = document.getElementById("revenue-statistics").getContext('2d');;
      var saleGradientBg = graphGradient.createLinearGradient(15, 0, 15, 150);
      saleGradientBg.addColorStop(0, 'rgba(181,181,251, 1)');
      saleGradientBg.addColorStop(1, 'rgba(222, 255, 251, 0.05)');
      var saleGradientBg1 = graphGradient.createLinearGradient(25, 0, 25, 150);
      saleGradientBg1.addColorStop(0, 'rgb(255,194,183,1)');
      saleGradientBg1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      var revenueStatisticsData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
          {
              label: 'Gross Earnings',
              borderDash: [2, 2],
              data: [2000,3200, 3100, 4400, 2500, 3000, 2300, 3500, 2500, 2900, 3200, 2200],
              backgroundColor: saleGradientBg,
              borderColor: [
                  '#0d0d56',
              ],
              borderWidth: 2,
              fill: true, // 3: no fill
          },
      {
              label: 'Tax with Held',
              borderDash: [2, 2],
              data: [2000,3900, 3100, 2700, 2400, 3500, 4000, 2700, 4000, 2000, 2500, 2900],
              backgroundColor: saleGradientBg1,
              borderColor: [
                  '#ff7635',
              ],
              borderWidth: 2,
              fill: true, // 3: no fill
          },]
      };
  
      var revenueStatisticsOptions = {
        maintainAspectRatio: false,
          scales: {
              yAxes: [{
                display: true,
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      maxLines: 4,
                      color:'rgba(90, 113, 208, 0.11)',
                      zeroLineColor: '#e5e9f2',
                      color: '#eef3f6',
                  },
                  ticks: {
                    display: true,
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    stepSize: 1500
                  }
              }],
              xAxes: [{
                display: false,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                  },
                  ticks: {
                      display:'false',
                      beginAtZero: false,
                      fontColor: "#001737",
                      fontSize: 10,
                      precision: 0
                  }
              }],
          },
          legend: {
              display: false
          },
          elements: {
            point:{
              radius: 0
            },
              line: {
                tension: 0,
              }
          },
          tooltips: {
              backgroundColor: '#410060',
          }
      }
      var revenueStatistics = new Chart(graphGradient, {
          type: 'line',
          data: revenueStatisticsData,
          options: revenueStatisticsOptions,
      });
      // var ctx = document.getElementById("revenue-statistics");
      // ctx.height = 120;
        
    }
    if ($("#revenue-statistics-dark").length) {
      var graphGradient = document.getElementById("revenue-statistics-dark").getContext('2d');;
      var saleGradientBg = graphGradient.createLinearGradient(15, 0, 15, 150);
      saleGradientBg.addColorStop(0, 'rgba(181,181,251, 1)');
      saleGradientBg.addColorStop(1, 'rgba(0, 0, 0, .1)');
      var saleGradientBg1 = graphGradient.createLinearGradient(25, 0, 25, 150);
      saleGradientBg1.addColorStop(0, 'rgb(255,194,183,1)');
      saleGradientBg1.addColorStop(1, 'rgba(0, 0, 0, .1)');
      var revenueStatisticsDarkData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
          {
              label: 'Gross Earnings',
              borderDash: [2, 2],
              data: [2000,3200, 3100, 4400, 2500, 3000, 2300, 3500, 2500, 2900, 3200, 2200],
              backgroundColor: saleGradientBg,
              borderColor: [
                  '#0d0d56',
              ],
              borderWidth: 2,
              fill: true, // 3: no fill
          },
      {
              label: 'Tax with Held',
              borderDash: [2, 2],
              data: [2000,3900, 3100, 2700, 2400, 3500, 4000, 2700, 4000, 2000, 2500, 2900],
              backgroundColor: saleGradientBg1,
              borderColor: [
                  '#ff7635',
              ],
              borderWidth: 2,
              fill: true, // 3: no fill
          },]
      };
  
      var revenueStatisticsDarkOptions = {
        maintainAspectRatio: false,
          scales: {
              yAxes: [{
                display: true,
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      maxLines: 4,
                      zeroLineColor: 'rgba(90, 113, 208, 0.11)',
                      color: 'rgba(90, 113, 208, 0.11)',
                  },
                  ticks: {
                    display: true,
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    stepSize: 1500,
                    color: '#a7afb7',
                  }
              }],
              xAxes: [{
                display: false,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                  },
                  ticks: {
                      display:'false',
                      beginAtZero: false,
                      fontColor: "#001737",
                      fontSize: 10,
                      precision: 0
                  }
              }],
          },
          legend: {
              display: false
          },
          elements: {
            point:{
              radius: 0
            },
              line: {
                tension: 0,
              }
          },
          tooltips: {
              backgroundColor: '#410060',
          }
      }
      var revenueStatisticsDark = new Chart(graphGradient, {
          type: 'line',
          data: revenueStatisticsDarkData,
          options: revenueStatisticsDarkOptions,
      });
      // var ctx = document.getElementById("revenue-statistics");
      // ctx.height = 120;
        
    }
      var totalconversiondataBar = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'Customers',
          data: [15, 25, 35, 25, 17, 13],
          backgroundColor: [
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
          ],
          borderColor: [
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
            '#dc3545',
          ],
          borderWidth: 1,
          fill: false
        }]
      };
      var totalconversionoptionsBar = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
              
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          enabled: false,
        }
    
      };
      if ($("#total-conversion").length) {
        var barChartCanvas = $("#total-conversion").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var barChart = new Chart(barChartCanvas, {
          type: 'bar',
          data: totalconversiondataBar,
          options: totalconversionoptionsBar
        });
      }
      var avgorderdataBar = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'Customers',
          data: [15, 25, 45, 35, 47, 13],
          backgroundColor: [
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
          ],
          borderColor: [
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
          ],
          borderWidth: 1,
          fill: false
        }]
      };
      var avgorderoptionsBar = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
              
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          enabled: false,
        }
    
      };
      if ($("#avrg-order-quantity").length) {
        var barChartCanvas = $("#avrg-order-quantity").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var barChart = new Chart(barChartCanvas, {
          type: 'bar',
          data: avgorderdataBar,
          options: avgorderoptionsBar
        });
      }
      var percentagedataBar = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'Customers',
          data: [15, 45, 35, 25, 37, 23],
          backgroundColor: [
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
          ],
          borderColor: [
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
            '#0ddbb9',
          ],
          borderWidth: 1,
          fill: false
        }]
      };
      var percentageoptionsBar = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
              
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          enabled: false,
        }
    
      };
      if ($("#percentage").length) {
        var barChartCanvas = $("#percentage").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var barChart = new Chart(barChartCanvas, {
          type: 'bar',
          data: percentagedataBar,
          options: percentageoptionsBar
        });
      }
      $("#skip-mesages").click(function() { 
        $(".welcome-message").fadeOut();
      })
      
  });
})(jQuery);