/**
 * Created by Administrator on 2017/2/12 0012.
 */
(function(angular){
     var app=angular.module('mainApp.in_theaters',['httpApp']);


     app.controller('in_theatersCtrl',['$scope','$route','$routeParams','jsonpService',
         function($scope, $route,$routeParams,jsonpService){

         $scope.text='正在加载';

         //电影列表总数
         $scope.subjects=[];

         //电影总数
         $scope.total=0;
         //定义页面容量
         $scope.pageCount=6;
         //总页数
         $scope.maxPage=0;
         //当前页数
         //$routeParams保存了地址栏中的参数
         $scope.page=parseInt($routeParams.page||'1');

         //上一页按钮
        $scope.upPage=function(){
            if($scope.page>1){
                $scope.page--;
            }
            //通过$route.updateParams更新url中锚点参数
            $route.updateParams({'page':$scope.page});
        }

        //下一页按钮
        $scope.downPage=function(){
            if($scope.page<$scope.maxPage){
                $scope.page++;
            }
            //通过$route.updateParams更新url中锚点参数
            $route.updateParams({'page':$scope.page});
        }

         //通过jsonpService获取到正在热映模块的数据
         var url='https://api.douban.com/v2/movie/'+$routeParams.type;
         var obj={
             'apikey':'00fa6c0654689a0202ef4412fd39ce06',
              start:($scope.page-1)*$scope.pageCount,//页面开始的电影条目序号
              count:$scope.pageCount,//每个页面返回的电影条目数量
              q:$routeParams.q
         }
         jsonpService.getJsonp(url,obj,function(data){
              $scope.text=data.title;
              $scope.subjects=data.subjects;

              $scope.total=data.total;
              $scope.maxPage=Math.ceil(parseInt(data.total)/$scope.pageCount);
              $scope.$apply();
         })
     }])
})(angular)