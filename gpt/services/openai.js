import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const solveQuestion = async (content) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "Você é um cardiologista especialista em responder perguntas sobre doenças, tratamento e prevenção"},
            {role: "user", content: "Como posso me preparar para um ecocardiograma?"}
        ]
    })
    return completion.data.choices[0].message.content;
}

export { solveQuestion }