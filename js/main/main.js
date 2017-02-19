/**
 * Created by Administrator on 2017/2/12 0012.
 */
(function(angular){
     //主模块
    var app=angular.module('mainApp',[
        'ngRoute',
        'mainApp.in_theaters',
        'mainApp.subject'
    ]);

    //创建路由表
    app.config(['$routeProvider','$locationProvider',function($routeProvider,
    $locationProvider){
         //解决nagular1.6版本的去除!问题
         $locationProvider.hashPrefix('');
         $routeProvider
             //配置正在热映的模块
             .when('/movie/:type/:page?',{
                 templateUrl:'js/in_theaters/template.html',
                 controller:'in_theatersCtrl'
             })
             .when('/subject/:id',{
                 templateUrl:'js/subject/subject.html',
                 controller:'subjectCtrl'
             })
             .otherwise({
                 //在redirectTo 什么条件都不匹配的情况下调用
                 redirectTo:'/movie/in_theaters:page?'
             })
    }])
    app.controller('myCtrl',['$scope','$route',function($scope,$route){
           $scope.searchText='';
           $scope.search=function(){
               console.log($scope.searchText);
               if($scope.searchText.length>=1){
                 $route.updateParams({'type':'search','q':$scope.searchText});
                 $scope.searchText='';
             }
           }
    }])
})(angular)