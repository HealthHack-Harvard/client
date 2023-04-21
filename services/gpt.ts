const openailib = require("openai");

const configuration = new openailib.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new openailib.OpenAIApi(configuration);

const solveQuestion = async (content) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a cardiologist who specializes in answering questions about diseases, treatment and prevention",
            },
            {
                role: "system",
                content: "You are going to answer with 'I don`t know about it` if the question its not directly or indirectly related to cardiovascular diseases"
            },
            { role: "user", content: content }
        ]
    })

    return completion.data.choices[0].message.content;
}

module.exports = {
    solveQuestion
}
