'use strict';

const fs = require('fs'),
      htmlparser = require('htmlparser2');

var filePath = process.env.FILE_PATH || '/Users/denizozger/Desktop/';
var fileName = process.env.FILE_NAME || 'toExtract.html';
var delimeter = process.env.DELIMETER || ', ';
const extractedEmailAddressesFilename = 'extractedEmailAddresses.txt';

fs.readFile(filePath + fileName, 'utf8', function (err, data) {
  if (err) {
    return console.error('Cant even read the file mate.. ' + err);
  }

  var emailAddressCount = 0;

  var parser = new htmlparser.Parser({
      ontext: function(text){
        if (isValidEmailAddress(text)) {
          console.log('Appending email #' + ++emailAddressCount + ' (' + text + ')');
          // Did you know? fs.appendFile does not open/close the file each time. Yay Node.
          fs.appendFile(filePath + extractedEmailAddressesFilename, text + delimeter, function (err) {
            if(err) {
              return console.log('Bah, cant write to file! :/ ' + err);
            }
          });
        }
      }
  });

  parser.write(data);
  parser.end();

  console.log('Happy days');
});

// http://stackoverflow.com/a/9204568/2498874
function isValidEmailAddress(emailAddress) {
  var re = /\S+@\S+\.\S+/;
  
  return re.test(emailAddress);
}