app.controller('AerliItemCtrl',function($scope,$http,$window){
	
	$scope.isShow = false
	$scope.actives = 0
	$scope.zindex = 0
	$scope.isClick = function(i){
		$scope.actives = i
		$scope.zindex = i
	}
	
	
	$scope.itemlist = []
	$http.get('/Aerli/m.php',{
		params:{
			method:'goods.getTagCategory'
		}
	}).then(function(res){
		console.log(res)
		$scope.itemlist = res.data.data.tags
	})
})


