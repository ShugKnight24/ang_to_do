var toDo = angular.module("toDo", []);

toDo.controller("toDoController",["$scope", function($scope){
// Completed Tasks Array
  $scope.completedTasks = [];
// Array for objects of tasks we will be adding to
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
// When clear completed button is pressed
  $scope.clearCompleted = function(){
    for (i=0; i<$scope.todos.length;i++){
      if ($scope.todos[i].completed){
      // First push completed tasks to another array
      $scope.completedTasks.push($scope.todos[i]);
      // Check if array is being filled by the object
      console.log($scope.completedTasks);
    };
  }
    // Then remove them from the to-do list
    $scope.todos = $scope.todos.filter(function(item){
      return !item.completed;

    });
  };
}]);
