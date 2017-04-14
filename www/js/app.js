var app = angular.module('App',['ionic'])
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/AerliHome')
	$stateProvider.state('AerliHome',{
		url:'/AerliHome',
		templateUrl:'../views/AerliHome/AerliHome.html',
		controller:'AerliHomeCtrl'
	})
	.state('AerliItem',{
		url:'/AerliItem',
		templateUrl:'../views/AerliItem/AerliItem.html',
		controller:'AerliItemCtrl'
	})
	.state('AerliStyle',{
		url:'/AerliStyle',
		templateUrl:'../views/AerliStyle/AerliStyle.html',
		controller:'AerliStyleCtrl'
	})
	.state('AerliPopular',{
		url:'/AerliPopular/:id',
		templateUrl:'../views/AerliPopular/AerliPopular.html',
		controller:'AerliPopularCtrl'
	})
	.state('AerliFashion',{
		url:'/AerliFashion/:Id',
		templateUrl:'../views/AerliFashion/AerliFashion.html',
		controller:'AerliFashionCtrl'
	})
	.state('AerliElement',{
		url:'/AerliElement/:id',
		templateUrl:'../views/AerliElement/AerliElement.html',
		controller:'AerliElementCtrl'
	})
	.state('AerliLogin',{
		url:'/AerliLogin',
		templateUrl:'../views/AerliLogin/AerliLogin.html',
		controller:'AerliLoginCtrl'
	})
	.state('AerliDetails',{
		url:'/AerliDetails/:userId/:suitId',
		templateUrl:'../views/AerliDetails/AerliDetails.html',
		controller:'AerliDetailsCtrl'
	})
	.state('AerliIntroduce',{
		url:'/AerliIntroduce/:goodsId',
		templateUrl:'../views/AerliIntroduce/AerliIntroduce.html',
		controller:'AerliIntroduceCtrl'
	})
	
})
.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

			}
			if(window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})