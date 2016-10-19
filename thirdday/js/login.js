/**
 * Created by dong on 2016/10/18.
 */
angular.module('app', [])

.controller('login', function($scope){
    $scope.uname = "";
    $scope.password = "";
    $scope.errormsg = "";
    $scope.login = function(){
        if($scope.uname == "admin" && $scope.password == "123456") {
            alert("登陆成功");
        } else {
            $scope.errormsg = "用户名或密码不正确!";
        }
    }
});
