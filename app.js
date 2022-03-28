(function () {
  'use strict';
  angular.module('MyFirstApp', []);

  .controller("MyFirstController", function($scope)){

    $scope.name="Anita";
    $scope.sayHello = function () {

      return "Hello Coursra!";

    };
    }
  }};

})();
