//In this activity, you will have to look at some documentation and figure out the format!

describe('String Challenge', function() {

  challenge('Implement the `onlyDigits` function to return true if the string only contains digits and false otherwise.', function() {

    var result = onlyDigits('7654');
    chai.assert.isTrue(result);

    result = onlyDigits('76z8');
    chai.assert.isFalse(result);
  });

  challenge('Implement the `formatPhoneNumber` function.', function() {
    var result = formatPhoneNumber('2147864321');
    chai.assert.equal(result, '(214) 786-4321');
  });

  challenge('Implement the `formatCreditCardNumber` function.', function() {
    var result = formatCreditCardNumber('4147789012345678');
    chai.assert.equal(result, '4147 7890 1234 5678');
  });

  challenge('Implement the `missingInteger` function so that it returns the missing digit between 0 and 9.', function() {
    var result = missingInteger('123467890');
    chai.assert.equal(result, '5');

    var result = missingInteger('691457803');
    chai.assert.equal(result, '2');
  });

  challenge('Implement the `repeatChar` function so that it returns a string with the character repeated a certain number of times.', function() {

    var result = repeatChar('#', 4);
    chai.assert.equal(result, '####');

    result = repeatChar('|', 8);
    chai.assert.equal(result, '||||||||');
  });

  challenge('Implement the `delimitWord` function so that you can pass any word in and it will return a word all characters delimited by the specified char.', function() {

    var result = delimitWord('BROTHERHOOD', '.');
    chai.assert.equal(result, 'B.R.O.T.H.E.R.H.O.O.D');
  });

  challenge('Implement the `reverseWord` function so that you can pass any word in and it will reverse the letters.', function() {
    var result = reverseWord('bucket');
    chai.assert.equal(result, 'tekcub');
  })

  challenge('Implement the `reverseSentence` function so that you can pass any sentence in and it will reverse the order of the words.', function() {
    var result = reverseSentence('I bought a steak');
    chai.assert.equal(result, 'steak a bought I');
  });

  challenge('Implement the `kabobCase` function so that you can pass any string of words in and get a kabob-cased version returned.', function() {

    var result = kabobCase('the cheese is old and moldy');
    chai.assert.equal(result, 'the-cheese-is-old-and-moldy');
  });

  challenge('Implement the `camelCase` function so that you can pass any string of words in and get a camel-cased version returned.', function() {

    var result = camelCase('the cheese is old and moldy');
    chai.assert.equal(result, 'theCheeseIsOldAndMoldy');
  });

});
