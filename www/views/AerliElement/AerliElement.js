app.controller('AerliElementCtrl',function($scope,$http,$state){
	
	$scope.elementlist = []
	$http.get('/Aerli/m.php',{
		params:{
			mediaId:$state.params.id,
			method:'media.getMedia',
			pageSize:20,
			page:1,
			isFromApp:NaN,
			isICYPage:false
		}
	}).then(function(res){
		console.log(res)
		$scope.elementlist = res.data.data
	})
})