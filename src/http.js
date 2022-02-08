const { FIGMA_API, FIGMA_TOKEN } = process.env;
const { default: axios } = require('axios');

const http = axios.create({
    baseURL: FIGMA_API,
    headers: {
        'X-Figma-Token': FIGMA_TOKEN
    }
});

module.exports = http;