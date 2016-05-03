angular.module('ticketBookingSystem').factory('booking',function(Restangular) {

    return {
        bookTickets :  function(seats){
            return Restangular.all('booking').post({seats : seats});
        }
    };
});