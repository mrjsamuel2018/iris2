// Run the yql query: "show tables"
angular
.module('myApp')
.run( function($http, $rootScope){
  // $http.get('http://www.google.com')  // comment1: CORS error . TO execute this use --disable-web-security
  $http.get('https://query.yahooapis.com/v1/public/yql?q=show%20tables&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
         .then(
            function(x){ 
                // console.log( x['data']['query']['results']);
                $rootScope.yqlShowTablesQueryResponse = x['data']['query']['results']['table'];
            }
         )
         .catch(function(err){ console.warn(err);} )
  }

);
// https://query.yahooapis.com/v1/public/yql?q=show%20tables&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys   