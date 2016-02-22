'use strict';

/**
 * @ngdoc function
 * @name bookAroomApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the bookAroomApp
 */
angular.module('bookAroomApp')
    .controller('ViewCtrl', function($scope) {
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.searchWorkbench = ''; // set the default search/filter term

        // create the list of sushi rolls 
        $scope.workbench = [{
            city_town_name: 'Galway',
            address: 'Eyre Square',
            roomName: 'GreenRoom'
        }, {
            city_town_name: 'Galway',
            address: 'Eyre Square',
            roomName: 'RedRoom'
        }, {
            city_town_name: 'Athlone',
            address: 'Main Street',
            roomName: 'BlackRoom'
        }, {
            city_town_name: 'Dublin',
            address: 'By the River',
            roomName: 'Blue Room'
        }];
    });
