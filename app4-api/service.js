angular.module('apiApp').service('mainSvc', function($http){
    this.test1 = 'service is working';
    var baseUrl = 'http://swapi.co/api'
    this.getShipInfo = function(ship){
        return $http ({
            method: 'GET',
            url: baseUrl + /starships/
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data.results)
                return response.data.results;
            } 
            return "All your base are belong to us"
        })
    }
})