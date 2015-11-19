angular.module('app').factory('mvIdentity', function($window) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = $window.bootstrappedUserObject;

    }
    return {
        currentUser: currentUser,
        isAuthendticated: function() {
            return !!this.currentUser;
        }
    }
})