var app = angular.module("myApp", []); 
app.controller("myCtrl", function ($scope, $http) {
    //$scope.students=[
    //    {id:1, name:"Võ Nhựt Kha", country:"Việt Nam", age:"21"},
    //    {id:2, name:"Huỳnh Kiến Minh", country:"Taiwan", age:"21"},
    //    {id:3, name:"Vương Văn Hậu", country:"Việt Nam", age:"21"}
    //];

    $http.get("/api/EmployeeData")
        .then(function (response) {
            $scope.students = response.data;
        });

    $scope.id=-1;
    $scope.addStudent=function(){
        id=$scope.id;
        if(id==-1){
            //$scope.students.name = ($scope.addFullName);
            //$scope.students.age = ($scope.addAge);
            //$scope.students.country = ($scope.addCountry);
            
            //$scope.students.push($scope.students);

            var data = { lastname: $scope.addFullName, firstname: $scope.addAge, salary: $scope.addCountry };
            $http.post("/api/EmployeeData", JSON.stringify(data) );
        }
        else $scope.update_Student();        
    }
    $scope.deleteStudent = function (x) {
        var data = { id: $scope.students[x].ID};
        $http.delete("/api/EmployeeData/" + $scope.students[x].ID, JSON.stringify(data));
        console.log($scope.students[x].ID);
    }
    $scope.updateStudent=function(id){
        $scope.addFullName = $scope.students[id].LastName;
        $scope.addAge = $scope.students[id].FirstName;
        $scope.addCountry = $scope.students[id].Salary;
        $scope.id = id + 1;
        //var data = { id: $scope.id, lastname: $scope.addFullName, firstname: $scope.addAge, salary: $scope.addCountry };
        //$http.put("/api/EmployeeData", JSON.stringify(data));
    }
    
    $scope.update_Student=function(){
       // id = $scope.id;
        //$scope.students[id].LastName = $scope.LastName;
        //$scope.students[id].FirstName = $scope.FirstName;
        //$scope.students[id].Salary = $scope.Salary;

        var data = { id: $scope.id, lastname: $scope.addFullName, firstname: $scope.addAge, salary: $scope.addCountry };
        $http.put("/api/EmployeeData", JSON.stringify(data));
    }
    
});

