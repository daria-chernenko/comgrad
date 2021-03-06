'use strict';
module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'gradient-company',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false,
      },
    },
    APP: {
    },
    googleFonts: ['VT323', 'Delius'],
  };
  if (environment === 'development') {
  }
  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }
  if (environment === 'production') {
  }
  return ENV;
};
