import express from 'express';
import * as OpenAiService from './services/openai.js';

const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (request, response) => {
    response.send('API GPT4');
})

app.get('/question', async (request, response) => {
    const answer = await OpenAiService.solveQuestion();
    response.send(`Resposta: ${answer}`);
    // rota: http://localhost:8081/summary?url=https://www.google.com
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


