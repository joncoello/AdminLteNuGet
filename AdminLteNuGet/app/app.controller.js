var main;
(function (main) {
    'use strict';
    var MainController = (function () {
        function MainController() {
            this.loggedInUser = 'Rob Jones';
        }
        return MainController;
    }());
    main.MainController = MainController;
    angular.module('app').controller('mainController', MainController);
})(main || (main = {}));
