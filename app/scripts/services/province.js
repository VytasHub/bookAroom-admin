'use strict';

/**
 * @ngdoc service
 * @name bookAroomApp.province
 * @description
 * # province
 * Factory in the bookAroomApp.
 */
angular.module('bookAroomApp')
    .factory('province', function() {
        function getProvinces() {
            return [{
                    "name": "Galway",
                    "value": "Galway"
                }, {
                    "name": "Dublin",
                    "value": "Dublin"
                }, {
                    "name": "Athlone",
                    "value": "Athlone"
                }, {
                    "name": "Limerick",
                    "value": "Limerick"
                },

            ];
        }

        // Public API here
        return {
            getProvinces: getProvinces
        };
    });
