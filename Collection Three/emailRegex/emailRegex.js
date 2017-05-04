/**
 * Write a function that, given an email address, will return true if the
 * email address is valid and false if it's not.
 *
 * don't worry too much about passing _all_ the tests. 100% perfect email
 * validation is complicated. Almost all websites don't even follow the
 * specification perfectly but get through as many as you can.
 */

/**
  * usage example:
  * validateEmail("me@vctr.me"); // should return `true`
  * validateEmail("email@123.123.123.123"); // should return `true`
  * validateEmail("email@domain.name"); // should return `true`
  * validateEmail(".email@domain.com"); // should return `false`
  * validateEmail("email@domain.com."); // should return `false`
  */

var validateEmail = function(address) {
  /* START SOLUTION */
  // a crappy solution
  // return address.match(/^\s*[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/) !== null;
  // the spec solution
  return address.match(/^\s*(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\s*$/) !== null;
  /* END SOLUTION */
};

