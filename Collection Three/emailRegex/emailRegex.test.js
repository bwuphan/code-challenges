 

describe('validateEmail', function() {

  it('should exist', function() {
    should.exist(validateEmail);
  });

  it('should be a function', function() {
    validateEmail.should.be.a.Function;
  });

  it('should return a boolean', function() {
    // your validateEmail should actually return a boolean (true or false)
    // NOT something `falsy` like null or undefined, 0, or ''
    // NOR something `truthy` like {}, [], 1, or 'something'
    should.exist(validateEmail(''));
    validateEmail('').should.be.a.Boolean;
  });

  // invalid emails
  var levels = {
    easy: {
      invalid: [
        'oh crap...',                   // yeah...
        '@domain.com',                  // email addresses can't have an emtpy name
        'plainaddress',                 // email addresses need a user address portion
        'Joe Smith <email@domain.com>', // containing an email address does not make you an email address
        'email.domain.com'              // email addresses have to have a @
      ],
      valid: [
        'me@vctr.me',
        'email@domain.com',
        'email@domain-one.com'
      ]
    },
    medium: {
      invalid: [
        '.email@domain.com',            // email user names can't start with a `.`
        'email.@domain.com',            // email user names can't end with a `.`
        'email..email@domain.com',      // a subdomain can't be empty `` string
        'me@vctr.me:1337',              // email protocol already uses a specific url
        'email@-domain.com',            // domains cant start with a `-`
        'email@domain'                 // nobody lives tlds
      ],
      valid: [
        'me@vctr.me',
        'email@domain.com',
        'email@domain-one.com',
        'firstname-lastname@domain.com',
        'firstname+lastname@domain.com',
        'firstname.lastname@domain.com',
        'email@domain.co.jp',
        'email@domain.name',
        'email@domain.web'
      ]
    },
    hard: {
      invalid: [
        'email@domain.com.',            // tlds can't have a `.`
        'email@domain..com',            // the empty `` string isn't a domain name
        'あいうえお@domain.com',          // email addresses aren't unicode friendly
        'π@314.159.265'                 // email addresses aren't unicode friendly
      ],
      valid: [
        '1234567890@domain.com',
        'email@123.123.123.123',
        'email@[123.123.123.123]',
        'email@subdomain.domain.com',
        'me@cool.people.vctr.me',
        'you+would^think$this#is&an*invalid!email~but_it.is!!}@those-w3c-jerks.wtf'
      ]
    }
  };

  //-------- MEDIUM ---------//

  for (var i = 0; i < levels.easy.invalid.length; i++) {
    (function(i, emails) {
      it('should return false when given the invalid email address "' + emails[i] + '"', function() {
        // difficulty level: medium
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === false`';
        validateEmail(emails[i]).should.equal(false, failureMessage);
      });
    })(i, levels.easy.invalid);
  }

  for (var i = 0; i < levels.easy.valid.length; i++) {
    (function(i, emails) {
      it('should return true when give the valid email address "' + emails[i] + '"', function() {
        // difficulty level: medium
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === true`';
        validateEmail(emails[i]).should.equal(true, failureMessage);
      });
    })(i, levels.easy.valid);
  }

  //-------- HARD ---------//

  for (var i = 0; i < levels.easy.invalid.length; i++) {
    (function(i, emails) {
      it('should return false when given the invalid email address "' + emails[i] + '"', function() {
        // difficulty level: hard
        // nice job! you made it to the `hard` level. you're on
        // your way to becoming a JavaScript RegExp ninja!
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === false`';
        validateEmail(emails[i]).should.equal(false, failureMessage);
      });
    })(i, levels.easy.invalid);
  }

  for (var i = 0; i < levels.easy.valid.length; i++) {
    (function(i, emails) {
      it('should return true when give the valid email address "' + emails[i] + '"', function() {
        // difficulty level: hard
        // nice job! you made it to the `hard` level. you're on
        // your way to becoming a JavaScript RegExp ninja!
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === true`';
        validateEmail(emails[i]).should.equal(true, failureMessage);
      });
    })(i, levels.easy.valid);
  }

  // ------- NIGHTMARE --------- ///

  for (var i = 0; i < levels.easy.invalid.length; i++) {
    (function(i, emails) {
      it('should return false when given the invalid email address "' + emails[i] + '"', function() {
        // difficulty level: nightmare
        // holy cannoli, batman! You made it to `nighmare` mode!
        // only a select few master JavaScripters have ever made it past
        // `nightmare` mode and made it out alive!
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === false`';
        validateEmail(emails[i]).should.equal(false, failureMessage);
      });
    })(i, levels.easy.invalid);
  }

  for (var i = 0; i < levels.easy.valid.length; i++) {
    (function(i, emails) {
      it('should return true when give the valid email address "' + emails[i] + '"', function() {
        // difficulty level: nightmare
        // holy cannoli, batman! You made it to `nighmare` mode!
        // only a select few master JavaScripters have ever made it past
        // `nightmare` mode and made it out alive!
        var failureMessage = 'expected `valideEmail("' + emails[i] + '") === true`';
        validateEmail(emails[i]).should.equal(true, failureMessage);
      });
    })(i, levels.easy.valid);
  }

});
