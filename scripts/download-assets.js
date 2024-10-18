const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  {
    url: 'https://utfs.io/f/NyKlEsePJFL1ncc7GMTzK0DieJCdHugIhQzFcZ9V7nXtpa8m',
    filename: 'logo.png'
  },
  {
    url: 'https://utfs.io/f/NyKlEsePJFL1QGbvVz7Gka27SZUIDXRTlMdFuNr34vhfBnCL',
    filename: 'favicon.png'
  }
];

assets.forEach(asset => {
  const outputPath = path.join(__dirname, '..', 'public', asset.filename);

  https.get(asset.url, (response) => {
    const fileStream = fs.createWriteStream(outputPath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`${asset.filename} downloaded successfully`);
    });
  }).on('error', (error) => {
    console.error(`Error downloading ${asset.filename}:`, error.message);
  });
});
