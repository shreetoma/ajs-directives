var app  = angular.module('myApp', [])
app.controller('myController',function($scope){
    $scope.employee={
        name:'Shreetoma',
            id:'73523'
    }

    $scope.employee1={
        name:'Shree',
            id:'23456'
    }
})
app.directive('myInformation',function(){
    return{
        restrict:'M',
        scope:{
            employeeInfo: '=info'
        },
        template:'<h4>{{employeeInfo.name}}</h4><h6>{{employeeInfo.id}}</h6>'
    };
    
});