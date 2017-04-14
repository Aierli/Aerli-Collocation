app.controller('AerliHomeCtrl',function($scope,$http,homes,$ionicSlideBoxDelegate){
	$scope.model = {
    	activeIndex:0
  	};

  	$scope.pageClick = function(index){
    //alert(index);
    	$scope.model.activeIndex = 1;
  	};

  	$scope.slideHasChanged = function($index){
    //alert($index);

 	 };
  	$scope.delegateHandle = $ionicSlideBoxDelegate;
	
	$scope.pageClick = function() {
    	$ionicSlideBoxDelegate.next();
  	}
	
	
	$scope.banners = [];
	$scope.inSeasons = [];
	$scope.suitTabss = [];
	$scope.buyBlockLists = [];
	$scope.moduless = [];
	$scope.aerlilist = [];
	$scope.getitem = []
	$http.get('/Aerli/m.php',{
		params:{
			method:'index.getHomeData'
		}
	}).then(function(res){
		console.log(res)
		$scope.banners = res.data.data.banner
		console.log($scope.banners)
		$scope.inSeasons = res.data.data.inSeason
		console.log($scope.inSeasons)
		$scope.suitTabss = res.data.data.suitTabs
		console.log($scope.suitTabss)
		$scope.buyBlockLists = res.data.data.buyBlockList
		console.log($scope.buyBlockLists)
		$scope.moduless = res.data.data.modules
		console.log($scope.moduless)
		
	}).catch(function(aer){
		console.log('获取失败')
	})
	
	$http.get('/Aerli/m.php',{
		params:{
			fromPageId:0,
			pageSize:20,
			viewUserId:'',
			method:'index.getChoicenessList',
			page:1
		}
	}).then(function(res){
		console.log(res)
		$scope.aerlilist = res.data.data.result
	})
	//加载更多
	console.log(homes)
	
	$scope.page = 2;
	$scope.isLoading = true
	$scope.getres = function(){
		$scope.isLoading = false
		console.log('请求')
		homes.getHome($scope.page).then(function(res){
			console.log($scope.page)
			console.log(res)
			$scope.page++;
			$scope.aerlilist = res.data.data.result;
			$scope.isLoading = true;
			$scope.$broadcast('scroll.infiniteScrollComplete')
		})
	}
	
	$scope.loadMore = function(){
		if($scope.isLoading){
			$scope.getres()
		}
	}
	
})
.factory('homes',function($http){
	var getHome = function(i){
		return $http.get('/Aerli/m.php',{
			params:{
				fromPageId:0,
				viewUserId:'',
				method:'index.getChoicenessList',
				pageSize:20*i
			}
		}).then(function(res){
			return res
		})
	}
	return {getHome}
})
.filter("myhref",function(){
	return function(a){
		//从“=”将字符串分割成为数组，
		return a.split("=").splice(-1,1).join().split("&").splice(0,1).join()
//		http://ichuanyi.com/m/page/media/?mediaId=1458828486
	}
})
