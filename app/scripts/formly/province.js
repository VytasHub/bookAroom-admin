// scripts/formly/province.js
(function() {

    'use strict';

    angular
        .module('bookAroomApp')
        .factory('province', province);

    function province() {
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

        return {
            getProvinces: getProvinces
        }
    }

})();
