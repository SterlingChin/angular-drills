angular.module('run1').controller('mainCtrl', function($scope, mainSvc){
mainSvc.getShipInfo().then(function(ships){
  $scope.ships = ships;
})
});
