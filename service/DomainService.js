'use strict';


/**
 * Enter Doamin name
 * This can search a domain name.
 *
 * domainname String The domain name for login
 * returns List
 **/
exports.findDomain = function(domainname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Forgot your Domain Name
 * This can send a reset domain request by email/username.
 *
 * domainname String The user name/ email for find a domain
 * returns List
 **/
exports.forgotDomain = function(domainname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

