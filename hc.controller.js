'use strict';
angular
    .module('myApp')
    .controller('hcController', function ($scope) {

     // Sample data for pie chart
    $scope.tvChannelsPieData = [{
            name: "ESPN",
            y: 10
        }, {
            name: "TBS",
            y: 15,
            sliced: true,
            selected: true
        }, {
            name: "Netflix",
            y: 40
        }, {
            name: "Amazon Prime",
            y: 5
        }, {
            name: "FOX",
            y: 15
        }, {
            name: "Comedy Central",
            y: 15
    }]  
      
    
    // Sample options for chart
    $scope.chartOptions = {
        title: {
            text: 'Temperature data'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };

    // Sample data for pie chart
    $scope.pieData = [{
            name: "Microsoft Internet Explorer",
            y: 56.33
        }, {
            name: "Chrome",
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: "Firefox",
            y: 10.38
        }, {
            name: "Safari",
            y: 4.77
        }, {
            name: "Opera",
            y: 0.91
        }, {
            name: "Proprietary or Undetectable",
            y: 0.2
    }]
});