app.controller('AerliFashionCtrl',function($scope,$http,$state){
	console.log($state.params.Id)
	$scope.fashionlist = []
	$http.get('/Aerli/m.php',{
		params:{
			mediaId:$state.params.Id,
			method:'media.getMedia',
			pageSize:20,
			page:1,
			isFromApp:NaN,
			isICYPage:false
		}
	}).then(function(res){
		console.log(res)
		$scope.fashionlist = res.data.data
	})
	
})