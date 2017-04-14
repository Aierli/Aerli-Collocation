app.controller('AerliStyleCtrl',function($scope,$http){
	
	$scope.guesslist = []
	$scope.fashionlist = []
	$scope.guidelist = []
	$scope.featureslist = []
	$http.get('/Aerli/m.php',{
		params:{
			method:'fashion.dressManual',
			viewUserId:''
		}
	}).then(function(res){
		console.log(res)
		$scope.guesslist = res.data.data.tags
		$scope.fashionlist = res.data.data.topics
		$scope.guidelist = res.data.data.guideTags
		$scope.featureslist = res.data.data.medias
	})
	
})
