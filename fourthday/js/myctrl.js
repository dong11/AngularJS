/**
 * Created by dong on 2016/10/18.
 */
angular.module('app', [])
    //value值可改变  constant值不可改变
.value('realname', 'zhaoliu')
.constant("http", "www.baidu.com")
.factory("Data", function(){
    return {
        msg:"Hello World",
        setMsg:function() {
            this.msg = "Hello AngularJS"
        }
    }
})
.service("User", function(){
    this.firstname="上官";
    this.lastname="飞燕";
    this.getName=function(){
        return this.firstname + this.lastname;
    }
})
.controller('MyCtrl', function($scope, realname, http, Data, User){
    $scope.msg = "Hello World";
    $scope.realname = realname;
    $scope.http = http;
    $scope.data = Data;
    $scope.uname = User.getName();
});
