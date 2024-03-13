const fs = require('fs');

// Path to the input file
const inputFile = './partials/terms-of-service.html';

// Specify the encoding for reading the file
const encoding = 'utf-8';

// Read the content of the file
fs.readFile(inputFile, encoding, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Path to the output file
  const outputFile = 'output-tos.txt';

  // Write the content to a new file
  fs.writeFile(outputFile, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Content has been written to ${outputFile}`);
  });
});
