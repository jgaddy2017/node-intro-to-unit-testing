const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
    it('it should work', function(){

  
        [15, 30, 45].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });

        [3, 6, 9].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('fizz');
        });

        [5, 10, 20].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('buzz');
        });

        [1, 2, 4, 7].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal(input);
        });

    });
  });