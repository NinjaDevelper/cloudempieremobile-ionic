angular.module('scanModule', ['ionic', 'ui.router', 'ngCordova'])
        .controller('scanController', ["$scope", "$state", function ($scope, $state) {
        $scope.data = {
            scanInp: ''
        };      
       $scope.captureContainerId= function()
       {
         alert($scope.data.scanInp);  
       };
}]);