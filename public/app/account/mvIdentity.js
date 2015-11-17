angular.module('app').factory('mvIdentity', function() {
    return {
        currentUser: undefined,
        isAuthendticated: function() {
            return !!this.currentUser;
        }
    }
})