
//angular.module('bookAroomApp')
    //.controller('CitiesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {


angular.module('bookAroomApp')
    .controller('WorkBenchController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {


  var IrlWorkBenches = new Firebase('https://bookaroomfirebase.firebaseio.com/WorkBenches');
    $scope.WorkBenches = $firebaseArray(IrlWorkBenches);
    
    //wired to the plus button
    $scope.showForm = function(){
       
        $scope.addFormShow = true;   //turn on the addForm visibility
        
        $scope.editFormShow = false;  //turn off the editForm visibility
        clearForm();
    }
    
     //wired to the minus button - to turn off the visibility of the addParks form
    $scope.hideForm = function(){
        $scope.addFormShow = false; 
       
    }
    
    //clearing up the scope of the variables
    function clearForm(){
        $scope.Address ='';
        $scope.CityTown='';
        $scope.WName='';
        
    }
    
    //To check is Valid need to take in parameter 
    $scope.addFormSubmit = function(isValid){
        
    //if(isValid){
        $scope.WorkBenches.$add({
            
            Address:$scope.Address,
            CityTown:$scope.CityTown,
            WName:$scope.WName
        });
        //clearForm();
    //}
        
    }//$scope
    
    //function to handle the edit button by pulling data based on id
    $scope.showCity = function(item){
        
        $scope.addFormShow = false;   //turn on the addForm visibility
        $scope.editFormShow = true;  //turn off the editForm visibility
        
        $scope.Address = item.Address;
        $scope.CityTown = item.CityTown;
        $scope.WName = item.WName;
        
    }
    
    //function to handle actual update to the firebase db after edit
    $scope.editFormSubmit = function(){
        
        var id = $scope.id; //to keep a reference of the product being edited
        
        var record = $scope.WorkBenches.$getRecord(id); //to store the whole park we're editing
        record.Address = $scope.Address;
        record.name = $scope.name;
        record.reknown = $scope.reknown;
        
        
        $scope.WorkBenches.$save(record); //commit changes to firebase
        clearForm();
       
    }
   
    //function to delete city
    $scope.deleteCity = function(item){
        $scope.WorkBenches.$remove(item);
        
    }
    
}]);    //}]); Old version
