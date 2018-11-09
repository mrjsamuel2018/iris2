'use strict';

angular
    .module ('myApp', ['ui.router'
  ])
    .config (['$urlRouterProvider', '$stateProvider',  function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise ('/home');

        $stateProvider
            .state ('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'homeCtrl'
          })
          .state ('pie', {
            url: '/pie',
            templateUrl: 'pie.html',
            controller: 'pieCtrl'
          })
          .state ('chart', {
            url: '/chart',
            templateUrl: 'chart.html',
            controller: 'chartoneCtrl'
          })
              //sub page1
              .state('chart.chartone',{
                url: '/chart.chartone',
                templateUrl: 'one.html',
                controller: 'chartoneCtrl'
              })
              //sub page2
              .state('chart.charttwo',{
                url: '/chart.charttwo',
                templateUrl: 'two.html',
                controller: 'charttwoCtrl'
              })
        
        // 4. yql
          .state ('yql', {
            url: '/yql',
            templateUrl: 'yql.html',
            controller: 'yqlCtrl'
          })
        
        // 5. tv channels
          .state ('tv', {
            url: '/tv',
            templateUrl: 'tv.html',
            controller: 'tvCtrl'
          })  
              
        ;

      }]);

    // wiring lodash
    angular
      .module('myApp')
      .constant('_', window._ );
    