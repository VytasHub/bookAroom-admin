//angular.module('bookAroomApp')
//.controller('CitiesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {


angular.module('bookAroomApp')
    .controller('WorkBenchController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {


        var IrlWorkBenches = new Firebase('https://bookaroomfirebase.firebaseio.com/WorkBenches');
        var fireBaseKey = IrlWorkBenches.key();
        $scope.WorkBenches = $firebaseArray(IrlWorkBenches);

        //wired to the plus button
        $scope.showForm = function() {

            $scope.addFormShow = true; //turn on the addForm visibility

            $scope.editFormShow = false; //turn off the editForm visibility
            clearForm();
        }

        //wired to the minus button - to turn off the visibility of the addParks form
        $scope.hideForm = function() {
            $scope.addFormShow = false;

        }

        //clearing up the scope of the variables
        function clearForm() {
            $scope.Address = '';
            $scope.CityTown = '';
            $scope.WName = '';

        }

        //To check is Valid need to take in parameter 
        $scope.addFormSubmit = function() {

                //if(isValid){
                $scope.WorkBenches.$add({

                    Address: $scope.Address,
                    CityTown: $scope.CityTown,
                    WName: $scope.WName
                    booked: $scope.false
                    suspended: $scope.false
                });
                //clearForm();
                //}

            } //$scope

        //function to handle the edit button by pulling data based on id
        $scope.showWorkbench = function(item) {
            console.log("show button is called ");
            $scope.addFormShow = false; //turn on the addForm visibility
            $scope.editFormShow = true; //turn off the editForm visibility

            $scope.Address = item.Address;
            $scope.CityTown = item.CityTown;
            $scope.WName = item.WName;
            $scope.id = item.$id;
             console.log("item " + JSON.stringify(item));
        }

        //function to handle actual update to the firebase db after edit
        $scope.editFormSubmit = function() {
            console.log("editFormSubmit is called ");

            // var id = "WorkBench2"; //$scope.id; //to keep a reference of the product being edited
            console.log("id:" + $scope.id);

            // //console.log("Id "+id);
            // //window.alert(id);
            var record = $scope.WorkBenches.$getRecord($scope.id); //to store the whole park we're editing
            console.log("record " + JSON.stringify(record));

            //record.key = fireBaseKey;
            record.Address = $scope.Address || null;
            record.CityTown = $scope.CityTown || null;
            record.WName = $scope.WName || null;
            //record.Address = $scope.Address;
            //ecord.CityTown = $scope.CityTown;
            //record.WName = $scope.WName;





            // console.log("record " + JSON.stringify(record));

            $scope.WorkBenches.$save(record); //commit changes to firebase
            // clearForm();

        }


        //function to delete city
        $scope.deleteWorkbench = function(item) {
            $scope.WorkBenches.$remove(item);

        }

    }]); //}]); Old version
