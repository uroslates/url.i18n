# About url.i18n

This repo is an angular.js custom module for your application's i18n support.

url.18n is built upon a great **angular-translate** module. The motivation was driven by the fact that most angular-translate examples I saw required you to clutter your configure method callback with a lot of translation specific configuration. 
On the other hand I really like encapsulating everything in its own modules and registering them with minimal configuration needed. Therefor if you like it you could follow this path and use this way of adding i18n support to your angular.js apps.


##  Usage

* In order to use this in your applications you will first need to downlaod and add **angular-translate.js** as a dependency to your application. 

I am usually using bower, so for me it required this 2 things:
1) Adding following line to my bower.json file:

  "angular-translate": "~2.0.1"

2) Including the library to my index.html page:

  <script src="bower_components/angular-translate/angular-translate.js"></script>

* The next thing is copying the entire structure of i18n/ folder within your application source code. Where you will put this module depends on your application architecture (& structure).

* After previous step is done load the module files in your index.html page:

  <script src="scripts/modules/i18n/index.js"></script>
  <script src="scripts/modules/i18n/constants.js"></script>
  <script src="scripts/modules/i18n/providers/translation-provider.js"></script>
  <script src="scripts/modules/i18n/lang/sr.js"></script>
  <script src="scripts/modules/i18n/lang/de.js"></script>
  <script src="scripts/modules/i18n/lang/en.js"></script>

Note: I like my modules to have clear files separation hence you'll see everything in its own file. I find this especially usefull for a large teams. But you could easily use only 1 file and concatenate all my files within it. I do grunt for building so I have separate tasks for doing that for production versions.

* To your main application's angular module add url.i18n as a dependency

  angular.module('myApplication', ['url.i18n'])

With this you're good to go with using this module for i18n support within your application. The only thing to do is change your templates and global controller to be able to switch languages. Check out **example** folder for an example.


### Additional configuration

With this module if you would like to predefine the default language you would have to inject the TranslationProvider into your config handler and use the following command:

  TranslationProvider.setPreferredLanguage('de');

You can find an example for this within **example** folder.

## Author

# About url.i18n

This repo is an angular.js custom module for your application's i18n support.

url.18n is built upon a great **angular-translate** module. The motivation was driven by the fact that most angular-translate examples I saw required you to clutter your configure method callback with a lot of translation specific configuration. 
On the other hand I really like encapsulating everything in its own modules and registering them with minimal configuration needed. Therefor if you like it you could follow this path and use this way of adding i18n support to your angular.js apps.


##  Usage

* In order to use this in your applications you will first need to downlaod and add **angular-translate.js** as a dependency to your application. 

I am usually using bower, so for me it required this 2 things:
1) Adding following line to my bower.json file:

  "angular-translate": "~2.0.1"

2) Including the library to my index.html page:

  <script src="bower_components/angular-translate/angular-translate.js"></script>

* The next thing is copying the entire structure of i18n/ folder within your application source code. Where you will put this module depends on your application architecture (& structure).

* After previous step is done load the module files in your index.html page:

  <script src="scripts/modules/i18n/index.js"></script>
  <script src="scripts/modules/i18n/constants.js"></script>
  <script src="scripts/modules/i18n/providers/translation-provider.js"></script>
  <script src="scripts/modules/i18n/lang/sr.js"></script>
  <script src="scripts/modules/i18n/lang/de.js"></script>
  <script src="scripts/modules/i18n/lang/en.js"></script>

Note: I like my modules to have clear files separation hence you'll see everything in its own file. I find this especially usefull for a large teams. But you could easily use only 1 file and concatenate all my files within it. I do grunt for building so I have separate tasks for doing that for production versions.

* To your main application's angular module add url.i18n as a dependency

  angular.module('myApplication', ['url.i18n'])

With this you're good to go with using this module for i18n support within your application. The only thing to do is change your templates and global controller to be able to switch languages. Check out **example** folder for an example.


### Additional configuration

With this module if you would like to predefine the default language you would have to inject the TranslationProvider into your config handler and use the following command:

  TranslationProvider.setPreferredLanguage('de');

You can find an example for this within **example** folder.

All language speicific translations are declared as angular constants that are than injected within i18nConstants provider. When adding a new language this is wher you'll have to configure it (add new entry to languages object referencing your new language's constant file).


## Author

[Uroš Lates]: http://uroslates.com/