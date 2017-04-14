app.controller('AerliIntroduceCtrl',function($scope,$http,$state){
	
	$scope.AerliIntroduce = []
	
	$http.get('/Aerli/m.php',{
		params:{
			method:'goods.getInfo',
			goodsId:$state.params.goodsId,
			isFromApp:1
		}
	}).then(function(res){
		console.log(res)
		$scope.AerliIntroduce = res.data.data
		$scope.imgs = $scope.AerliIntroduce.photoAlbum
		function transform(obj){
			    var arr = [];
			    for(var item in obj){
			        arr.push(obj[item]);
			    }
			    return arr;
			}
		$scope.len = transform($scope.imgs).length
	}).catch(function(ars){
		console.log('获取失败')
	})
	
	
	$http.get('/Aerli/m.php',{
		params:{
			method:'goods.getExtra',
			goodsId:$state.params.goodsId
		}
	}).then(function(res){
		console.log(res)
		$scope.teletext = res.data.data.teletext
		$scope.sizeMaterial = res.data.data.sizeMaterial
		$scope.commentStatistics = res.data.data.commentStatistics
	}).catch(function(ars){
		console.log('获取失败')
	})
	
	
//	$http.get('/Aerli.m.php',{
//		params:{
//			fromPageId:0,
//			pageSize:40,
//			method:'goods.getCommentList',
//			page:1,
//			goodsId:$state.params.goodsId
//		}
//	}).then(function(res){
//		console.log(res)
//	}).catch(function(ars){
//		console.log('获取失败')
//	})
	
	
	$scope.boolphototext = true
	$scope.boolsize = false
	$scope.boolvalue = false
	$scope.phototext = function(){
		$scope.boolphototext = true
		$scope.boolsize = false
		$scope.boolvalue = false
	}
	$scope.size = function(){
		$scope.boolphototext = false
		$scope.boolsize = true
		$scope.boolvalue = false
	}
	
})
.filter("myfilte",function(){
	return function(value){
		if(value){
			return value.toFixed(2)
		}
	}
})