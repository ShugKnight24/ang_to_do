var toDo = angular.module("toDo", []);

toDo.controller("toDoController",["$scope", function($scope){
  $scope.completedTask = [];
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
      $scope.completedTask.push($scope.todos[i]);
      console.log($scope.completedTask);
    };
  }
    // Then remove them from the to-do list
    $scope.todos = $scope.todos.filter(function(item){
      return !item.completed;

    });
  };
}]);
