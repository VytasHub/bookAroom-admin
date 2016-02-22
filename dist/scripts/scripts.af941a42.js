"use strict";angular.module("bookAroomApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/view",{templateUrl:"views/view.html",controller:"ViewCtrl",controllerAs:"view"}).when("/add",{templateUrl:"views/add.html",controller:"AddCtrl",controllerAs:"add"}).otherwise({redirectTo:"/"})}]),angular.module("bookAroomApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bookAroomApp").controller("AboutCtrl",["$scope",function(a){}]),angular.module("bookAroomApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bookAroomApp").controller("ViewCtrl",["$scope",function(a){a.sortType="name",a.sortReverse=!1,a.searchWorkbench="",a.workbench=[{city_town_name:"Galway",address:"Eyre Square",roomName:"GreenRoom"},{city_town_name:"Galway",address:"Eyre Square",roomName:"RedRoom"},{city_town_name:"Athlone",address:"Main Street",roomName:"BlackRoom"},{city_town_name:"Dublin",address:"By the River",roomName:"Blue Room"}]}]),angular.module("bookAroomApp").controller("AddCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bookAroomApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- JS --><!--  <script src="app.js"></script> --><!-- <div class="container" ng-app="yoAdminApp" ng-controller="AboutCtrl"> --><!-- Displays blue box sort order atributes\n  <div class="alert alert-info">\n    <p>Sort Type: {{ sortType }}</p>\n    <p>Sort Reverse: {{ sortReverse }}</p>\n    <p>Search Query: {{ searchFish }}</p>\n  </div> --> <form> <div class="form-group"> <div class="input-group"> <div class="input-group-addon"><i class="fa fa-search"></i></div> <input type="text" class="form-control" placeholder="Search Workbench" ng-model="searchWorkbench"> </div> </div> </form> <table class="table table-bordered table-striped"> <thead> <tr> <td> <a href="#/about" ng-click="sortType = \'city_town_name\'; sortReverse = !sortReverse"> Workbench City/Town <span ng-show="sortType == \'city_town_name\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'city_town_name\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#/about" ng-click="sortType = \'address\'; sortReverse = !sortReverse"> Workbench Address <span ng-show="sortType == \'address\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'address\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#/about" ng-click="sortType = \'roomName\'; sortReverse = !sortReverse"> Workbench room name <span ng-show="sortType == \'roomName\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'roomName\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> </tr> </thead> <tbody> <tr ng-repeat="workbenchList in workbench | orderBy:sortType:sortReverse | filter:searchWorkbench"> <td>{{ workbenchList.city_town_name }}</td> <td>{{ workbenchList.address }}</td> <td>{{ workbenchList.roomName }}</td> </tr> </tbody> </table> <!-- </div> -->'),a.put("views/add.html","<p>This is the add view.</p>"),a.put("views/contact.html","<p>This is the contact view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>BOI Workbench</h1> <p class="lead"> <!-- <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> --> Book a room with ease. </p> <!-- <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> --> </div> <!-- <div class="row marketing">\n  <h4>HTML5 Boilerplate</h4>\n  <p>\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\n  </p>\n\n  <h4>Angular</h4>\n  <p>\n    AngularJS is a toolset for building the framework most suited to your application development.\n  </p>\n\n  <h4>Karma</h4>\n  <p>Spectacular Test Runner for JavaScript.</p>\n</div>\n -->'),a.put("views/view.html",'<form> <div class="form-group"> <div class="input-group"> <div class="input-group-addon"><i class="fa fa-search"></i></div> <input type="text" class="form-control" placeholder="Search Workbench" ng-model="searchWorkbench"> </div> </div> </form> <table class="table table-bordered table-striped"> <thead> <tr> <td> <a href="#/view" ng-click="sortType = \'city_town_name\'; sortReverse = !sortReverse"> Workbench City/Town <span ng-show="sortType == \'city_town_name\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'city_town_name\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#/view" ng-click="sortType = \'address\'; sortReverse = !sortReverse"> Workbench Address <span ng-show="sortType == \'address\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'address\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#/view" ng-click="sortType = \'roomName\'; sortReverse = !sortReverse"> Workbench room name <span ng-show="sortType == \'roomName\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'roomName\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> </tr> </thead> <tbody> <tr ng-repeat="workbenchList in workbench | orderBy:sortType:sortReverse | filter:searchWorkbench"> <td>{{ workbenchList.city_town_name }}</td> <td>{{ workbenchList.address }}</td> <td>{{ workbenchList.roomName }}</td> </tr> </tbody> </table>')}]);