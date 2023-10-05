const openai = require('../config/openaiConfig');

const generateMeta = async (title) =>
{

        const description = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": `Come up with a description for a Youtube video called ${title}`}],
            max_tokens: 100
        });

    console.log(description.choices[0].message);

    const tags = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": `come up with 10 keywords for a youtube video called ${title}`}],
        max_tokens: 100
    });

    console.log(tags.choices[0].message);

}

const generateImage = async (desc) => {
    const image = await openai.createImageVariation({
        prompt: desc,
        n: 1,
        size: '512x512'
    });
    console.log(image.data.data[0].url)
}

module.exports = { generateMeta, generateImage  }