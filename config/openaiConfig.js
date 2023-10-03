const { OpenAI } = require('openai');
require('dotenv').config();

const configuration = new OpenAI({
      apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAI(configuration);

module.exports = openai;
