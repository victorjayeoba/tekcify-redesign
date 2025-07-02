const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

const fontUrls = {
  'Satoshi-Regular.woff2': 'https://api.fontshare.com/v2/fonts/download/satoshi/woff2/400',
  'Satoshi-Medium.woff2': 'https://api.fontshare.com/v2/fonts/download/satoshi/woff2/500',
  'Satoshi-Bold.woff2': 'https://api.fontshare.com/v2/fonts/download/satoshi/woff2/700',
};

const fontsDir = path.join(__dirname, '../public/fonts');

async function downloadFonts() {
  console.log('Creating fonts directory if it doesn\'t exist...');
  await fs.ensureDir(fontsDir);

  console.log('Downloading Satoshi font files...');
  for (const [fileName, url] of Object.entries(fontUrls)) {
    try {
      console.log(`Downloading ${fileName}...`);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const filePath = path.join(fontsDir, fileName);
      await fs.writeFile(filePath, response.data);
      console.log(`Downloaded ${fileName}`);
    } catch (error) {
      console.error(`Error downloading ${fileName}:`, error.message);
    }
  }
  console.log('Font download complete!');
}

downloadFonts().catch(console.error); 