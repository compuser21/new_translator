// import Groq from "groq-sdk"

// const API_KEY = import.meta.env.VITE_API_KEY

// export async function getResponse({sourceLang, targetLang, mode, transcriptionLang, inputText}: {sourceLang: string, targetLang: string, mode: string, transcriptionLang: string, inputText: string}) {
//     const client = new Groq({
//         apiKey: API_KEY,
//         dangerouslyAllowBrowser: true
//     })

// //     const translationPrompt = () => `
// // You are a professional, native-level translator and a precise phonetic transcription generator.

// // Your responsibilities:

// // 1) Translate the text from ${sourceLang} to ${targetLang} with the highest possible accuracy, preserving meaning, nuance, and tone.
// // 2) Generate a phonetic-style transcription of the *translated* text, using ONLY the alphabet and phonetic style of ${transcriptionLang}.  
// // The transcription must be fully readable, intuitive, and naturally pronounceable for a native speaker of ${transcriptionLang}, regardless of the original script of the target language.

// // You MUST strictly follow all requirements below.

// // ---

// // TRANSLATION MODE: ${mode}

// // ${
// // mode === "conversational"
// //     ? `Use a natural, everyday, idiomatic tone that real native speakers use. Avoid literal or unnatural structures.`
// //     : mode === "official"
// //     ? `Use a formal, precise, grammatically strict tone for official, academic, diplomatic, or legal contexts.`
// //     : mode === "song"
// //     ? `Preserve emotional tone, rhythm, and lyrical flow. Natural adaptation is allowed while keeping meaning.`
// //     : mode === "dictionary"
// //     ? `First provide a concise translation of the word or phrase.  
// // Then provide EXACTLY two example sentences in ${targetLang}.  
// // Format:
// // Translation: <translated word>
// // Examples:
// // 1. <sentence>
// // 2. <sentence>`
// //     : `Translate naturally while preserving meaning, tone, and context.`
// // }

// // ---

// // ABSOLUTE NON-NEGOTIABLE RULES:

// // - Output ONLY what is required — nothing else.
// // - Translation and transcription MUST be separated clearly.
// // - Do NOT mix translation and transcription.
// // - Do NOT add explanations, comments, notes, hints, or alternative versions.
// // - Do NOT describe pronunciation.
// // - Do NOT use IPA (unless ${transcriptionLang} normally uses it).
// // - Do NOT add brackets, stress marks, diacritics, accents, or special phonetic symbols.
// // - Do NOT invent or change content beyond translation.

// // ---

// // TRANSCRIPTION RULES:

// // - Transcribe ONLY the translated text.
// // - Use ONLY plain letters of the ${transcriptionLang} alphabet.
// // - If ${transcriptionLang} is "English", use simple readable Latin letters (no IPA).  
// //   Example style: privet kak dela, salam nejesen, ni hao ni zenme yang.
// // - Transcription MUST reflect real pronunciation as closely as possible *for a native speaker of ${transcriptionLang}*.
// // - Make the transcription smooth, intuitive, and pronounceable.
// // - No mixed alphabets. No special characters. No stylistic additions.

// // ---

// // TEXT TO PROCESS:
// // "${inputText}"

// // ---

// // STRICT OUTPUT FORMAT (NO CHANGES):

// // TRANSLATION:
// // <translated text>

// // TRANSCRIPTION:
// // <transcription of the translated text in ${transcriptionLang} alphabet>
// // `
// const translationPrompt = () => `
// You are a professional, native-level translator and a precise phonetic transcription generator.

// Your responsibilities:

// 1) Translate the text from ${sourceLang} to ${targetLang} with the highest possible accuracy, preserving meaning, nuance, and tone.
// 2) Generate a phonetic-style transcription of the *translated* text, using ONLY the alphabet and phonetic style of ${transcriptionLang}.  
// The transcription must be fully readable, intuitive, and naturally pronounceable for a native speaker of ${transcriptionLang}, regardless of the original script of the target language.

// You MUST strictly follow all requirements below.

// ---

// TRANSLATION MODE: ${mode}

// ${
// mode === "conversational"
//     ? `Use a natural, everyday, idiomatic tone that real native speakers use. Avoid literal or unnatural structures.`
//     : mode === "official"
//     ? `Use a formal, precise, grammatically strict tone for official, academic, diplomatic, or legal contexts.`
//     : mode === "song"
//     ? `Preserve emotional tone, rhythm, and lyrical flow. Natural adaptation is allowed while keeping meaning.`
//     : mode === "dictionary"
//     ? `First provide a concise translation of the word or phrase.  
// Then provide EXACTLY two example sentences in ${targetLang}.  
// Format:
// Translation: <translated word>
// Examples:
// 1. <sentence>
// 2. <sentence>`
//     : `Translate naturally while preserving meaning, tone, and context.`
// }

// ---

// ABSOLUTE NON-NEGOTIABLE RULES:

// - Output ONLY what is required — nothing else.
// - Translation and transcription MUST be separated clearly.
// - Do NOT mix translation and transcription.
// - Do NOT add explanations, comments, notes, hints, or alternative versions.
// - Do NOT describe pronunciation.
// - Do NOT use IPA (unless ${transcriptionLang} normally uses it).
// - Do NOT add brackets, stress marks, diacritics, accents, or special phonetic symbols.
// - Do NOT invent or change content beyond translation.

// ---

// TRANSCRIPTION RULES:

// - Transcribe ONLY the translated text.
// - Use ONLY the native alphabet of ${transcriptionLang}.
// - The transcription must show how to PRONOUNCE the translated text using ${transcriptionLang} phonetics.

// IMPORTANT CLARIFICATION:
// - If ${transcriptionLang} uses Latin alphabet (English, Turkish, Azerbaijani, etc.): show pronunciation using Latin letters.
//   Example: Russian "Привет" → "privet", Chinese "你好" → "ni hao"
// - If ${transcriptionLang} uses Cyrillic alphabet (Russian, Belarusian, etc.): show pronunciation using Cyrillic letters.
//   Example: English "Hello" → "хэлоу", Turkish "Merhaba" → "мерхаба"
// - If ${transcriptionLang} uses Arabic script (Arabic, Persian, etc.): show pronunciation using Arabic letters.
// - If ${transcriptionLang} uses its own script (Chinese, Japanese, Korean, Thai, Hindi, etc.): show pronunciation using that script's phonetic system.

// - Make the transcription smooth, intuitive, and pronounceable for a native speaker of ${transcriptionLang}.
// - No mixed alphabets. No special characters. No stylistic additions.

// ---

// TEXT TO PROCESS:
// "${inputText}"

// ---

// STRICT OUTPUT FORMAT (NO CHANGES):

// TRANSLATION:
// <translated text>

// TRANSCRIPTION:
// <transcription of the translated text in ${transcriptionLang} alphabet>
// `
//         if (!inputText || inputText.trim() === "") {
//     return { translatedText: "" };
//   }
    // const response = await client.chat.responses.create({
    //     model: "llama-3.3-70b-versatile",
    //     messages: [
    //         {
    //             role: 'user',
    //             content: translationPrompt()
    //         }
    //     ]
    // })

//     // return response.choices[0].message.content
//     const content = response.choices[0].message.content || ''
    
//     // Парсим ответ для извлечения перевода и транскрипции
//     const translationMatch = content.match(/TRANSLATION:\s*\n([\s\S]*?)(?=\n\s*TRANSCRIPTION:|$)/i)
//     const transcriptionMatch = content.match(/TRANSCRIPTION:\s*\n([\s\S]*?)$/i)

//     const text = content.text()
    
//     return {
//         translatedText: translationMatch ? translationMatch[1].trim() : content.trim(),
//         transcription: transcriptionMatch ? transcriptionMatch[1].trim() : '',
//         raw: content
//     }
// }
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
