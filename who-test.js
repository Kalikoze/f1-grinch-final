var assert = require('chai').assert;
var Who = require('./who');
var Grinch = require('./grinch');

describe('Who', function() {

  it.skip('should have a name', function() {
    var who = new Who('Cindy-Lou');
    assert.equal(who.name, 'Cindy-Lou');
  });

  it.skip('should have no presents by default', function()  {
    var who = new Who('Cindy-Lou');
    assert.deepEqual(who.presents, []);
  });

  it.skip('should earn the first of the grinch\'s presents when it sings to him', function() {
    var who = new Who('Cindy-Lou');
    var grinch = new Grinch({presents: ['bicycles', 'plums', 'tricycles']});
    who.sing(grinch);
    assert.equal(who.presents.length, 1);
    assert.equal(who.presents[0], 'bicycles');
    assert.equal(grinch.presents[0], 'plums');
  });

  it.skip('should only have room for three presents', function() {
    var who = new Who('Cindy-Lou');
    var grinch = new Grinch({mood: 'maniacal', presents: ['drums', 'bicycles', 'plums', 'tricycles']});
    who.sing(grinch);
    who.sing(grinch);
    who.sing(grinch);
    who.sing(grinch);
    assert.equal(who.presents.length, 3);
  });

});

