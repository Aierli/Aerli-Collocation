app.controller('AerliLoginCtrl',function($scope,$http){
	
	$http.get('/Aerli/m.php',{
		params:{
			method:'userinfo.getPreRegImage'
		}
	}).then(function(res){
		console.log(res)
		$scope.loginlist = res.data.data.topImage
	})
	
})
