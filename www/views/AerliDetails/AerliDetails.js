app.controller("AerliDetailsCtrl",function($scope,$http,$state){
	
	$scope.AerliDetails = []
	$http.get('/Aerli/m.php',{
		params:{
			method:'suit.getInfo',
			needCommentCount:10,
			needCollectCount:10,
			viewUserId:$state.params.userId,
			suitId:$state.params.suitId,
			isFromApp:1
		}
	}).then(function(res){
		console.log(res)
		$scope.AerliDetails = res.data.data
	})

//method=suit.getInfo&needCommentCount=10&needCollectCount=10&viewUserId=1376182024&suitId=1450215242&isFromApp=1
})