/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-school-project',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    //this is where we initialize firebase 
    firebase: {
      apiKey: "AIzaSyAE0UZQzMJPiAc98m414wVSzzt2dBPa7uw",
      authDomain: "chef-tracker-ember.firebaseapp.com",
      databaseURL: "https://chef-tracker-ember.firebaseio.com",
      storageBucket: "chef-tracker-ember.appspot.com",
      messagingSenderId: "721445006213"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
