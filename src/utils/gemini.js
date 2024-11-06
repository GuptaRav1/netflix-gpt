import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_KEY } from "../../key";

const genAI = new GoogleGenerativeAI(GOOGLE_KEY);
const gemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default gemini;
