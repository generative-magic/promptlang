
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_hello_world():
    prompts = ["\nHelloWorld. Write a website using HTML and CSS that says hello world.\n"]
    prompt_text = prompts[0] if prompts else ""
    promptConfig = {"temperature":"0","max_token":"1000"}

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
  