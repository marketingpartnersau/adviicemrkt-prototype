'use strict';

angular
  .module('advmPrototypeApp')
  .config(function ($stateProvider){
  	$stateProvider
  	.state('giving', {
	  url: '/giving',
	  abstract: true,
	  templateUrl: 'views/giving/_parent.html',
	  controller: 'GivingCtrl'
	})

	.state('giving.register', {
		url: '/advice',
		abstract: true,
		templateUrl: 'views/giving/signup.html'
	})

	.state('giving.register.skills', {
	  url: '/skills',
	  templateUrl: 'views/giving/select-skills.html'
	})

	.state('giving.register.opportunities', {
		url: '/advice-requests',
		templateUrl: 'views/giving/opportunities.html',
		controller: function($scope, requests){
			$scope.requests = requests.requests;
		}
	})

	.state('giving.register.signup', {
		url: '/register',
		templateUrl: 'views/giving/register.html'
	})

	.state('giving.opportunities', {
		url: '/advice-requests',
		templateUrl: 'views/giving/opportunities.html',
		controller: function($scope, $modal, requests){
			$scope.requests = requests.requests;

			$scope.newPitch = function(request){
				$modal.open({
					templateUrl: 'views/giving/modal-new-pitch.html',
					resolve: {
						request: function(){
							return request;
						}
					},
					controller: function($scope, request){
						$scope.request = request;
					}
				})
			};
		}
	})

	.state('giving.dashboard', {
		url: '/dashboard',
		template: '<h2>This is the dashboard</h2>'
	})

	.state('giving.pitches', {
		url: '/my-pitches',
		templateUrl: 'views/giving/pitches.html'
	})

	.state('giving.clients', {
		url: '/my-clients',
		templateUrl: 'views/giving/clients.html'
	})
  });