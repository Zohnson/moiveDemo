/**
 * Created by Administrator on 2017/2/12 0012.
 */
(function(angular){
     //主模块
    var app=angular.module('mainApp',[
        'ngRoute',
        'mainApp.in_theaters'
    ]);
    //创建路由表
    app.config(['$routeProvider','$locationProvider',function($routeProvider,
    $locationProvider){
         //解决nagular1.6版本的去除!问题
         $locationProvider.hashPrefix('');
         $routeProvider
             //配置正在热映的模块
             .when('/in_theaters',{
                 templateUrl:'js/in_theaters/template.html',
                 controller:'in_theatersCtrl'
             })
    }])
    app.controller('myCtrl',['$scope',function($scope){

    }])
})(angular)