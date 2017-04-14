app.controller('navCtrl',function($scope,$http){
	$scope.navbtns = []
	$scope.navshow = false;
	$scope.btnClick = function() {
		$scope.navshow = !$scope.navshow;
	}
	$scope.imgclick=function(){
		$scope.navshow=false;
	}
	$http.get('/Aerli/m.php',{
		params:{
			method:"Nav.getNavLeftButtons"
		}
	}).then(function(res){
		console.log(res)
		$scope.navbtns = res.data.data
	})
})