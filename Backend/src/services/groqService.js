import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeResumeWithGroq = async (resumeText) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an expert ATS Resume Analyzer.

Analyze the resume and return ONLY valid JSON.

Required format:

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Rules:
- atsScore should be between 0 and 100.
- strengths should contain 3-5 points.
- weaknesses should contain 3-5 points.
- suggestions should contain 3-5 actionable improvements.
- Do NOT return markdown.
- Do NOT wrap response in \`\`\`json.
- Return JSON only.
`,
        },
        {
          role: "user",
          content: resumeText,
        },
      ],
      temperature: 0.3,
    });

    const response =
      completion.choices[0].message.content;

    const cleanedResponse = response
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

      return {
        atsScore: 0,
        strengths: [],
        weaknesses: [
          "Unable to parse AI response",
        ],
        suggestions: [
          "Try uploading the resume again",
        ],
      };
    }
  } catch (error) {
    console.error("Groq Error:", error);

    throw new Error(
      "Failed to analyze resume"
    );
  }
};