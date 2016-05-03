angular.module('ticketBookingSystem').controller('HomeCtrl', function ($scope) {

    $scope.noOfSeatSelected = 1;

    $scope.noOfSeats = [];
    for (var i = 1; i <= 10; i++) {
        $scope.noOfSeats.push({number : i});
    }

});
