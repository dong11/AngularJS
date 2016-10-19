/**
 * Created by dong on 2016/10/18.
 */
angular.module('app', [])
.controller('UserCtrl', function($scope){
    $scope.user = {
        uname:"",
        pwd:"",
        job:"",
        sex:"",
        hobby:""
    };
});
