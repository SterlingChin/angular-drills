angular.module('arrayApp').controller('arrayController', function($scope, arrayService){
$scope.test='The controller is working'
$scope.test1 = arrayService.test1;
$scope.employees = arrayService.getData();
});