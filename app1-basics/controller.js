angular.module('app').controller('mainCtrl', function($scope, mainSvc){
    $scope.test = 'The controller is working'
    $scope.test1 = mainSvc.test1;
   $scope.message = 'Hi!';
});







