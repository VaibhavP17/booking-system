angular.module('ticketBookingSystem').controller('CheckoutModalCtrl', function ($scope, $uibModalInstance) {
    $scope.ok = function () {
        $uibModalInstance.close();
    };
});
