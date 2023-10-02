const {Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const openai = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;