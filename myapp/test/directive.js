/**
 * Created by Administrator on 2017/1/5.
 */
angular.module("directive",[])
    .directive("menu",function(){
        return {
            restrict:"A",
            /*"ECMA"元素，类名，注释，属性,默认识别属性和标签两种*/
//                    template:"<div>div</div>"
            /*要替换的东西特别复杂，就引用一个文件*/
            templateUrl:"demo.html",
            /*只能放在里面，如果要替换，则要加true*/
//                    replace:true,
            /*文件里面只能有一个根标签*/
            transclude:true,
            /*想保存以前指令的东西*/
            scope:{

            },
            /*每个指令数据都是独立的*/
            /*可以写true;&;=;@;
             * scope:@,
             * 就可以获取“=”里面的东西*/
            link:function($scope,b,c){
                /*a:当前指令的$scope*/
//                        a.abc="指令的$scope"
                $scope.data=[
                    {name:"111",son:[
                        {name:"1-1"},
                        {name:"1-2"},
                        {name:"1-3"},
                    ]},
                    {name:"222",son:[
                        {name:"2-1"},
                        {name:"2-2"},
                        {name:"2-3"},
                    ]},
                    {name:"333",son:[
                        {name:"3-1"},
                        {name:"3-2"},
                        {name:"3-3"},
                    ]},

                ];
                $scope.a=0;
                $scope.change=function(id){
                    $scope.a=id;
                }
            }
        }
    })