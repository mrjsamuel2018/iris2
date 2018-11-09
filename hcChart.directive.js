// Directive for generic chart, pass in chart options
'use strict';
angular
    .module('myApp')
    .directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            // console.log('============', element[0], scope);
            Highcharts.chart(element[0], scope.options);
        }
    };
});