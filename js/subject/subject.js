/**
 * Created by Administrator on 2017/2/13 0013.
 */
(function(angular){
     var app=angular.module('mainApp.subject',['httpApp']);
     app.controller('subjectCtrl',['$scope','$routeParams','jsonpService',
         function($scope,$routeParams,jsonpService){
          $scope.subject={};
          //通过$routeParams获取跳转后地址栏上的参数
          // $scope.test=$routeParams;
          //根据传递过来的参数id拼接url
          var url='https://api.douban.com/v2/movie/subject/'+$routeParams.id;
          var obj={
              'apikey':'00fa6c0654689a0202ef4412fd39ce06'
          };
          jsonpService.getJsonp(url,obj,function(data){
              $scope.subject=data;
              $scope.$apply();
          })
     }])
})(angular)