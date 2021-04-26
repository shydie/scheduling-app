/* eslint-env node */

'use strict';

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: [
      'HOST',
      'CLINICIAN_ID'
    ],
    failOnMissingKey: false
  };
};
