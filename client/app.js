var app = angular.module('starter', [
    'angular-meteor',
    'ui.router',
    'ngMaterial',
]);

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['starter']);
    if (Meteor.isCordova) {
        StatusBar.hide();
    }
}
