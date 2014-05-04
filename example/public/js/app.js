'use strict';

angular
  .module('urli18nApp', [
    'ngRoute',
    'url.i18n'
  ])
  .config(function ($routeProvider, TranslationProvider, settings) {

    // Set default language
    TranslationProvider.setPreferredLanguage(settings.language);

    $routeProvider
      .when('/', {
        templateUrl: 'public/js/templates/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
