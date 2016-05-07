angular.module('ticketBookingSystem', ['ui.bootstrap','ui.router','ngAnimate','restangular']);

angular.module('ticketBookingSystem').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/ttnd/');
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "partial/home/home.html",
        controller: "HomeCtrl",
    }).state('seatSelect', {
        url: "/select-seat?noOfSeats",
        templateUrl: "partial/seatSelection/seatSelection.html",
        controller: "SeatselectionCtrl"
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('ticketBookingSystem').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
