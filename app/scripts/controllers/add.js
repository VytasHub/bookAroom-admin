'use strict';

/**
 * @ngdoc function
 * @name bookAroomApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the bookAroomApp
 */
angular.module('bookAroomApp')
    .controller('AddCtrl', function($scope, province) {
        var vm = this;

        // The model object that we reference
        // on the  element in index.html
        vm.rental = {};

        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the  element
        vm.rentalFields = [{
            key: 'province',
            type: 'select',
            templateOptions: {
                label: 'City/Town',
                // Call our province service to get a list
                // of provinces and territories
                options: province.getProvinces()
            },
        }, {
            key: 'address',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Workbench Address',
                placeholder: 'Enter Address of Workbench',
                required: true
            }
        }, {
            key: 'Workbench room name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Workbench room name',
                placeholder: 'Enter room name',
                required: true
            }
        }, ];

    });
