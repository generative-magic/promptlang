

import { Configuration, OpenAIApi } from 'openai';
  
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function generateHelloWorld() {
const prompts = ["\nHelloWorld. Write a website using HTML and CSS that says hello world.\n"];
const promptText = prompts.length > 0 ? prompts[0] : "";
const promptConfig = {"temperature":"0","max_token":"1000"};

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: promptText,
    max_tokens: parseInt(promptConfig.max_token),
    n: 1,
    stop: null,
    temperature: parseFloat(promptConfig.temperature),
});

return response.data.choices[0].text.trim();
}

async function main() {
const response = await generateHelloWorld();
console.log("GPT-3 Response:", response);
}

main();
  