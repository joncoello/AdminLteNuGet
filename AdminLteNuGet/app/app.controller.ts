module main {
    'use strict';
    
    export class MainController {

        loggedInUser: string;

        constructor() {
            this.loggedInUser = 'Rob Jones';
        }

    }

    angular.module('app').controller('mainController', MainController);

}