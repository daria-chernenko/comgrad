module.exports = function () {
  return {
    fallbackLocale: null,
    inputPath: 'translations',
    publicOnly: false,
    wrapTranslationsWithNamespace: false,
    errorOnNamedArgumentMismatch: false,
    errorOnMissingTranslations: false,
    stripEmptyTranslations: false,
    requiresTranslation() {
      return true;
    },
  };
};
