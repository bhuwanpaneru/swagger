'use strict';

var utils = require('../utils/writer.js');
var Domain = require('../service/DomainService');

module.exports.findDomain = function findDomain (req, res, next, domainname) {
  Domain.findDomain(domainname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forgotDomain = function forgotDomain (req, res, next, domainname) {
  Domain.forgotDomain(domainname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
