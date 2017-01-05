/**
 * Created by Administrator on 2017/1/5.
 */
angular.module("sevices",[])
.factory("indexDate",function($http){
    return $http({url:"1.txt"})
    //     .then(function(data){
    //
    // })
})