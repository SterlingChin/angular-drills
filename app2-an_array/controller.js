angular.module('run1').controller('arrayController', function($scope, mainSvc){
$scope.employees = mainSvc.getData();
});
