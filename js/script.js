var toDo = angular.module("toDo", []);
var completedTask = angular.module("completedTask", []);

toDo.controller("toDoController",["$scope", function($scope){
  $scope.todos =[
    {
      "toDoName":"Build my Angular to-do application",
      "completed":true
    },
    {
      "toDoName":"Push completed items to another div",
      "completed":false
    }
  ];

// Add new to-do task to the list
  $scope.addToDo = function(){
    $scope.todos.push({"toDoName": $scope.newToDo, "completed":false});
    $scope.newToDo = "";
  };
// Remove completed tasks with the "completed" class
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.completed;
      $scope.completedTasks.push(item);
    });
  };
// Push completed tasks to another div
}]);
