var app = angular.module('myApp', []);
app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: '/Angular JS/to do/sample1.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  });
/*app.controller('main', function($scope){
  $scope.todo = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];
});*/