const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://utfs.io/f/NyKlEsePJFL1QGbvVz7Gka27SZUIDXRTlMdFuNr34vhfBnCL';
const outputPath = path.join(__dirname, '..', 'public', 'favicon.png');

https.get(url, (response) => {
  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Favicon downloaded successfully');
  });
}).on('error', (error) => {
  console.error('Error downloading favicon:', error.message);
});
