(function(){
	'use strict';

	angular.module('app', [])
		.controller('MainController', MainController);




	function MainController($log){
		
		this.submit = function(){
			$log.debug('form submitted', this);
		};

	}
})();