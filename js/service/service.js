/**
 * Created by Administrator on 2017/2/13 0013.
 */
(function(angular){
      var app=angular.module('httpApp',[]);
      app.service('jsonpService',function(){
          this.getJsonp=function(url,params,fun){
             var strUrl=url+'?';
             for(var key in params){
                 strUrl+=key+'='+params[key]+'&';
             }
             var jsonpName='jsonp_'+Math.random().toString().substring(2);
              strUrl+='callback='+jsonpName;
              var script=document.createElement('script');
              script.src=strUrl;
              document.body.appendChild(script)
              window[jsonpName]=function(data){
                  fun(data);
                  document.body.removeChild(script);
              }
          }
      })
})(angular)
