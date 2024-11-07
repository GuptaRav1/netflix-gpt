import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_KEY);
const gemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default gemini;
