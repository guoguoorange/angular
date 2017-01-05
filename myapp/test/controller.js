/**
 * Created by Administrator on 2017/1/5.
 */
angular.module("ctrls",["sevices"])
.controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
   indexDate.then(function(data){
       $scope.data=data.data;
       console.log(1)
    })
}])
    .controller("list",function($scope,$routeParams){
    $scope.id=$routeParams.id
})
