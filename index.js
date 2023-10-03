const readline = require('readline')
const { generateMeta } = require('./controllers/openaiController.js')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Youtube Video Title: \n', generateMeta)
