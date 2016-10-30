angular.module('run1').controller('mainCtrl', function($scope, mainSvc){
$scope.employees = mainSvc.getData();
});
