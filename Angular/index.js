(function(){
	'use strict';

	angular.module('app', ['ngMessages'])
		.controller('MainController', MainController)
		.directive('github', github);



	function github($log, $http, $q){
		return {
			restrict:'A',
			require: 'ngModel',
			link: function($scope, $element, $attrs, ngModel){

				

				ngModel.$validators.github = function(value){
					$log.debug(value);

					return true;
				};

				ngModel.$asyncValidators.github = function(value){


					return $http.get('https://api.github.com/users/'+value)
						.then(function(response){
							return $q.reject(false);
						}, function(errors){
							return true;
						});
				}

			}
		}
	}


	function MainController($log){

		this.submit = function(){
			$log.debug('form submitted', this);
		};


		this.click = function(e){
			$log.debug('form clicked', this, e);
		};

	}
})();