function onlyDigits(str) {
  var checkString = str.search(/[^0-9]/);
  if (checkString === -1) {
    return true;
  }
  else {
    return false;
  };
}

function formatPhoneNumber(str) {
  var areaCode = "(" + str.slice(0,3) + ")";
  var firstThree = str.slice(3,6);
  var lastFour = str.slice(6);
  return areaCode + ' ' + firstThree + "-" + lastFour;
}

function formatCreditCardNumber(str) {
  return str.slice(0,4) + " " + str.slice(4,8) + " " + str.slice(8,12) + " " + str.slice(12);
}

function missingInteger(str) {
  var num = 0;
  for (var i=0; i < str.length; i++) {
    if (str.indexOf(num) === -1) {
      return num;
    }
    num++;
  }
}

function repeatChar(char, count) {
  var newString = '';
  for  (var i=0; i < count; i++) {
    newString += char;
  }
  return newString;
}

function delimitWord(str, char) {
  var newWord = '';
  for (var i=0; i<str.length-1; i++) {
    newWord += str.charAt(i) + char;
  }
  newWord += str.charAt(str.length-1);
  return newWord;
}

function reverseWord(str) {
  var newString = '';
  for (var i = str.length-1; i>=0; i--) {
    newString += str.substr(i,1);
  }
  return newString;
}

function reverseSentence(str) {
  var arr = str.split(" ");
  var newSentence = "";
  for (var i = arr.length-1; i >= 1; i--) {
    newSentence += arr[i] + " ";
  }
  newSentence += arr[0];
  return newSentence;
}

function kabobCase(str) {
  var kabob = str.replace(/\W/g, "-");
  return kabob;
}

function camelCase(str) {
  var arr = str.split(" ");
  
}
