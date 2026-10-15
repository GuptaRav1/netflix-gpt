import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_KEY);

const FALLBACK_MODELS = [
	"gemini-3.1-flash-lite",
	"gemini-3.5-flash-lite",
	"gemini-3.5-flash",
	"gemini-3.8-flash",
];

const gemini = {
	generateContent: async (prompt) => {
		let lastError = null;
		for (const modelName of FALLBACK_MODELS) {
			try {
				const model = genAI.getGenerativeModel({ model: modelName });
				const result = await model.generateContent(prompt);
				if (result?.response?.text()) {
					return result;
				}
			} catch (error) {
				console.warn(
					`Gemini model ${modelName} returned error, attempting fallback:`,
					error?.message || error
				);
				lastError = error;
			}
		}
		throw lastError;
	},
};

export default gemini;
