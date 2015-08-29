angular.module('stocksService', [])

// super simple service
// each function returns a promise object 
	.factory('Stocks', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/stocks');
			},
			create : function(stocksData) {
				return $http.post('/api/stocks', stocksData);
			},
			delete : function(id) {
				return $http.delete('/api/stocks/' + id);
			}
		}
	}]);
