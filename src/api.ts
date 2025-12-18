import Groq from "groq-sdk"

const API_KEY = import.meta.env.VITE_API_KEY

const client = new Groq({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getResponse({
  sourceLang,
  targetLang,
  inputText
}: {sourceLang: string, targetLang: string, inputText: string}) {
  if (!inputText || inputText.trim().length === 0) {
    return {
      translatedText: "",
    };
  }

  const prompt = `
You are a professional translator.

Return the output STRICTLY as a JSON object with EXACTLY these fields:
{
  "translatedText": "...",
}

REQUIREMENTS:
- "translatedText": clean translation from ${sourceLang} to ${targetLang}.
- NEVER add explanations, markdown, comments, or text outside the JSON.
- NEVER wrap JSON in code fences.

Text to translate:
"""${inputText}"""
`;

  const response = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]
    })

  // --- гарантированно получаем строку ---
  const raw =
    typeof response.choices[0].message.content === "string"
      ? response.choices[0].message.content
      : JSON.stringify(response.choices[0].message.content);

  // Вытаскиваем JSON ИЗ ЛЮБОГО БЕСПОРЯДКА
  const jsonMatch = raw.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    console.error("MODEL RAW OUTPUT:", raw);
    throw new Error("Model returned invalid JSON");
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("JSON PARSE ERROR:", jsonMatch[0]);
    throw new Error("JSON parse failed");
  }

  return {
    translatedText: parsed.translatedText || "",
  };
}
