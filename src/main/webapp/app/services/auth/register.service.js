(function () {
    'use strict';

    angular
        .module('vietduchospitalApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
