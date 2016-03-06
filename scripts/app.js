angular
.module("ngClassifeds", ["ngMaterial"])
.config(function($mdThemingProvider) {
  $mdThemingProvider
  .theme('default')
  .primaryPalette('teal')
  .accentPalette('orange');
});
