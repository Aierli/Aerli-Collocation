app.controller('AerliPopularCtrl',function($scope,$http,populars){
	
	
	$scope.popularlist = []
	$http.get('/Aerli/m.php',{
		params:{
			fromPageId:0,
			pageSize:20,
			page:1,
			cardId:177,
			method:'goods.getListByCard',
			page:1
		}
	}).then(function(res){
		console.log(res)
		$scope.popularlist = res.data.data
	})
	//加载更多
	$scope.page = 2;
	$scope.loadings = true;
	$scope.popularloading = function(){
		$scope.loadings = false;
		console.log('加载')
		populars.popularCont($scope.page).then(function(res){
			console.log('已经加载啦')
			$scope.page++;
			$scope.popularlist = res.data.data
			$scope.loadings = true;
			$scope.$broadcast('scroll.infiniteScrollComplete');
		})
	}
	$scope.loadMore = function(){
		if($scope.loadings){
			$scope.popularloading()
		}
	}
	
})
.factory('populars',function($http){
	var popularCont = function(i){
		return $http.get('/Aerli/m.php',{
			params:{
				fromPageId:0,
				pageSize:20*i,
//				page:1,
				cardId:177,
				method:'goods.getListByCard'
			}
		}).then(function(res){
			return res
		})
	}
	return {popularCont}
})