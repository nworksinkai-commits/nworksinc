/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (Category: ${p.category}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the Corporate Concierge for "nworksinc". 
  Your tone is professional, helpful, efficient, and welcoming.
  
  nworksinc specializes in:
  1. Computer Hardware (Wholesale/Retail)
  2. Creative Design (Logos, Branding)
  3. Branding Solutions (Signage, Merchandise)
  4. Digital Media (Photography, Video)
  5. Leather Products (Lworks - custom wallets, engraving)
  
  Here is our current service/product catalog:
  ${productContext}
  
  Answer customer questions about our services, company vision (Unique design & financial growth), and assist them in understanding what we offer.
  Since most services require a quote, encourage users to add items to their quote list or contact us directly at 0737 346 920.
  Keep answers concise (under 3 sentences usually).`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Initialization using process.env.API_KEY directly as configured in vite.config.ts
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our support system at the moment.";
  }
};