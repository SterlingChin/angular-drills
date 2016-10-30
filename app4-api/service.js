angular.module('run1').service('mainSvc', function($http){
  var baseUrl = "http://swapi.co/api";
  this.getShipInfo = function(){
    return $http({
      method: 'GET',
      url: baseUrl + "/starships/"
    }).then(function(response){
      if(response.status === 200){
        return response.data.results;
      }
      return "Death Star broke your shit";
    });
  };
});
