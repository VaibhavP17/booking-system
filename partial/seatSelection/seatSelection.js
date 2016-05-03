angular.module('ticketBookingSystem').controller('SeatselectionCtrl',function($scope, $stateParams, booking, $state){
    $scope.params = $stateParams;
    var ctr=0;
    $scope.rows = [];
    for (var i = 0; i < 5; i++) {
        var row = [];
        for (var j = 0; j < 5; j++) {
            ctr++;
            row.push({val: ctr});
        }
        $scope.rows.push(row);
    }

    $scope.count = 0;
    $scope.checkChanged = function(item){
        if(item.selected) {
            $scope.count++;
        }
        else {
            $scope.count--;
        }
    };

    $scope.proceedButton = function(){
        var seats = [];
        $scope.rows.filter(function(a){
            a.filter(function(b){
            if(b.selected){
                seats.push(b);
            }
        });
        });
        var bookingPromise = booking.bookTickets(seats).then(function(data){
            console.log('Success Callback');
            $state.go('home');
        }, function(err){
            console.log('Error Callback');
            $state.go('home');
        });
    };
});
