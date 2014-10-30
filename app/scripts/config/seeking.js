'use strict';

angular
  .module('advmPrototypeApp')
  .config(function ($stateProvider){
  	$stateProvider
  	.state('seeking', {
	  url: '/seeking',
	  abtract: true,
	  templateUrl: 'views/seeking/_parent.html'
	})

	.state('seeking.query', {
		url: '/query',
		templateUrl: 'views/seeking/select-industry.html'
	})

	.state('seeking.specialists', {
		url: '/specialists',
		templateUrl: 'views/seeking/specialists.html'
	})

	.state('seeking.newRequest', {
		url: '/new-request',
		templateUrl: 'views/seeking/new-request.html'
	})

	.state('seeking.newRequest.question', {
		url: '/question',
		templateUrl: 'views/seeking/new-request-question.html'
	})

	.state('seeking.newRequest.tags', {
		url: '/tags',
		templateUrl: 'views/seeking/new-request-tags.html'
	})

	.state('seeking.newRequest.register', {
		url: '/register',
		templateUrl: 'views/seeking/register.html'
	})

	.state('seeking.newRequest.confirm', {
		url: '/confirm',
		templateUrl: 'views/seeking/new-request-confirmed.html'
	})

	.state('seeking.dashboard', {
		url: '/dashboard',
		templateUrl: 'views/seeking/dashboard.html'
	})

	.state('seeking.requests', {
		url: '/requests',
		templateUrl: 'views/seeking/requests.html'
	})

	.state('seeking.request', {
		url: '/request',
		templateUrl: 'views/seeking/pitches.html'
	})

	.state('seeking.pitch', {
		url: '/pitch',
		templateUrl: 'views/seeking/pitch.html'
	})
  });