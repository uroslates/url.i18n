'use strict';

angular.module('url.i18n')

	.provider('i18nConstants', ['TranslationsEN', 'TranslationsDE', 'TranslationsSR',
		function i18nConstantsProvider(TranslationsEN, TranslationsDE, TranslationsSR) {
		
			this.languages = {
				en: {
					code: 'en',
					translations: TranslationsEN
				},
				de: {
					code: 'de',
					translations: TranslationsDE
				},
				sr: {
					code: 'sr',
					translations: TranslationsSR
				}
			};

			this.getLanguageCodes = function() {
				var langCodes = [];
				for(var lang in this.languages) {
					langCodes.push(this.languages[lang].code);
				}
				return langCodes;
			};

			this.$get = [function() {
				return this;
			}];

		}
	]);