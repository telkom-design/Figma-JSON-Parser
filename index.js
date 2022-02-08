require('dotenv').config();
const fs = require('fs/promises');

const parsing = require('./src/parsing');
const http = require('./src/http');
const makeFolder = require('./src/makeFolder');

const { FIGMA_ID, OUTPUT_MAIN } = process.env;

(async () => {
  try {
    await makeFolder()
    await parsing()
  } catch (err) {
    const { data } = await http.get(`/v1/files/${FIGMA_ID}`)
    await fs.writeFile(OUTPUT_MAIN, JSON.stringify(data))
    await parsing()
  }
})();