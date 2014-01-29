## Email Address extractor from HTML

This Node application extracts all email addresses given an HTML file. Not a URL because of lazy loading or URL not reflecting search terms or login requirements etc.. I wrote this in a hurry before going to bed so pardon the code quality.

## Installation
``` bash
npm install
```

## Running Locally

``` bash
FILE_PATH=/Users/denizozger/Desktop/ FILE_NAME=toExtract.html DELIMETER=, node --harmony emailExtractor.js
```

## How it works

See the self-explanatory environment variables. Delimeter is the character to use to seperate email addresses in the resulting file. The resulting file is created in FILE_PATH and it's called extractedEmailAddresses.txt

## Issues

Email addresses of the format foo@bar@gmail.com are assumed valid. You can easily change the regex tho.

## Contribution

If anyone needs this as a web application send me an email or better implement it and create a pull request.
