angular.module('app').controller('myNavBarLoginCtrl', function($scope) {
    $scope.signin = function(username, password) {
        console.log('signin in function is working')
    }
})