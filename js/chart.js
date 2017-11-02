$(function () { 
  Highcharts.setOptions({
    chart: {
        backgroundColor: {
            linearGradient: [300, 300, 400, 600],
            stops: [
                [0, 'rgb(0,0,0)'],
                [1, 'rgb(0, 0, 0)']
                ]
        },
        borderWidth: 5,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
    }
    
    
});  
  var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column',
        },
        title: {
            text: 'MLS Eastern Conference',
            style: {
            color: 'red',
            fontWeight: 'bold'
        }
            
        },
        xAxis: {
          labels: {
            style: {
                color: 'red'
            }
        },
            categories: [
              'Seattle Sounders FC', //1
              'San Jose Earthquakes', //2
              'Sporting KC',   //3
              'Houston Dynamo', //4
              'Real Salt Lake',  //5
              'LA Galaxy', //6
              'Portland Timbers', //7
              'Colorado Rapids',  //8
              'FC Dallas',  //9
              'Vancouver Whitecaps FC', //10
           ]
        },
        yAxis: {
            labels: {
                style: {
                    color: 'red'
                }
             },
            title: {
                text: 'Points'
              
            }
        },
        series: [{
            name: 'Points',
            data: [
              {y: 2, color: '#00FF00'}, //1
              {y: 6, color: '#6B89EB'}, //2
              {y: 6, color: '#3416F7'}, //3
              {y: 4, color: '#F78E16'}, //4
              {y: 4, color: '#F73416'}, //5
              {y: 3, color: '#FFFF00'}, //6
              {y: 3, color: '#009900'}, //7
              {y: 3, color: '#A20707'}, //8
              {y: 3, color: '#2B41CD'}, //9
              {y: 5, color: '#9CA7EE'}, //10
            ]
        }]
    });
});