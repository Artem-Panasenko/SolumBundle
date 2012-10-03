/**
 * Date related constraints
 */

// Check if we are in a node.js environment for unit testing
if (typeof require === 'function') {
  solum = require('../solum.js');
  ko    = require('../../tests/mocha/mocks/mock-ko.js');
}

// Access services library (if needed) through root variable - easier to rename refactor later
(function (root) {
  "use strict";
  var constraints = root.services.validation.constraints;
  constraints.date = {};

  /*
  var self, dateNumberFormat;

  self = this;
  dateNumberFormat = config.dateAndNumberFormatLocalization;


  // DATE Constraints

  self.date = function (subject, params) {
    var year, month, day, test;

    if (!dateNumberFormat.date.pattern.test(subject)) {
      throw {error: "errors.form.date.invalid_format"};
    }

    // Y/M/d value validation
    test  = Date.parseExact(subject, dateNumberFormat.date.format);

    if (test === null) {
      throw {error: "errors.form.date.invalid_format"};
    }

    year  = test.getFullYear();
    month = test.getMonth();
    day   = test.getDay() + 1; // 0 indexed for day of month

    try {
      Date.validateDay(day, year, month);
    } catch (e) {
      throw {error: "errors.form.date.invalid_format"};
    }

    return true;
  };

  self.minDate = function (subject, params) {
    var min, test;
    min  = params.minDate;
    test = Date.parseExact(subject, dateNumberFormat.date.format);

    if (test < min) {
      throw {error: "errors.form.date.min_date"};
    }

    return true;
  };

  self.maxDate = function (subject, params) {
    var max, test;
    max  = params.maxDate;
    test = Date.parseExact(subject, dateNumberFormat.date.format);
    if (test > max) {
      throw {error: "errors.form.date.max_date"};
    }

    return true;
  };/**/

}(solum));
