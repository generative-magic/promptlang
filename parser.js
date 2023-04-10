import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const filepath = "examples/helloworld/helloworld.prompt";
const inputPrompt = readFileSync(filepath, "utf8");

const promptConfigPattern = /<PROMPTCONFIG>([\s\S]*?)<\/PROMPTCONFIG>/;
const promptPattern = /<PROMPT>([\s\S]*?)<\/PROMPT>/;

const promptConfigMatch = inputPrompt.match(promptConfigPattern);
const promptMatch = inputPrompt.match(promptPattern);

const promptConfig = {};
const prompts = [];

if (promptConfigMatch) {
  const configLines = promptConfigMatch[1].split("\n");
  for (const line of configLines) {
    const [key, value] = line.split("=");
    if (key && value) {
      promptConfig[key.trim()] = value.trim();
    }
  }
}

if (promptMatch) {
  prompts.push(promptMatch[1]);
}

console.log("Prompt Config:", promptConfig);
console.log("Prompts:", prompts);


function createPythonFile(promptConfig, prompts, outputPath) {
    const pythonCode = `
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_hello_world():
    prompts = ${JSON.stringify(prompts)}
    prompt_text = prompts[0] if prompts else ""
    promptConfig = ${JSON.stringify(promptConfig)}

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt_text,
        max_tokens=int(promptConfig["max_token"]),
        n=1,
        stop=None,
        temperature=float(promptConfig["temperature"]),
    )
    return response.choices[0].text.strip()

def main():
    response = generate_hello_world()
    print("GPT-3 Response:", response)

if __name__ == "__main__":
    main()
  `;
  
    writeFileSync(outputPath, pythonCode, "utf8");
  }
  
  function createJavaScriptFile(promptConfig, prompts, outputPath) {
    const jsCode = `

import { Configuration, OpenAIApi } from 'openai';
  
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function generateHelloWorld() {
const prompts = ${JSON.stringify(prompts)};
const promptText = prompts.length > 0 ? prompts[0] : "";
const promptConfig = ${JSON.stringify(promptConfig)};

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
  `;
  
    writeFileSync(outputPath, jsCode, "utf8");
  }
  
  // Call the functions to create the Python and JavaScript files
  const pythonOutputPath = join("examples", "helloworld", "use_prompt.py");
  createPythonFile(promptConfig, prompts, pythonOutputPath);
  
  const jsOutputPath = join("examples", "helloworld", "use_prompt.js");
  createJavaScriptFile(promptConfig, prompts, jsOutputPath);