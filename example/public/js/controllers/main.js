'use strict';

angular.module('urli18nApp')
  .controller('MainCtrl', function ($scope, $translate, i18nConstants, settings) {
    
    $scope.languageCode = settings.language;
    $scope.languageCodes = i18nConstants.getLanguageCodes();
          
    $scope.switchLanguage = function(languageCode) {
      $translate.use(languageCode);
      $scope.languageCode = languageCode;
    };

  });
