import { GoogleGenerativeAI } from '@google/generative-ai';
import { getCompanyPrompt, getLinkPrompt, getEmailPrompt } from '@/lib/prompts';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { type, input } = await request.json();

    if (!type || !input) {
      return Response.json({ error: 'Type dan input diperlukan.' }, { status: 400 });
    }

    let prompt;
    if (type === 'perusahaan') prompt = getCompanyPrompt(input);
    else if (type === 'link') prompt = getLinkPrompt(input);
    else if (type === 'email') prompt = getEmailPrompt(input);
    else return Response.json({ error: 'Tipe tidak valid.' }, { status: 400 });

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Strip markdown code fences if present
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const data = JSON.parse(cleaned);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Analysis error:', error);
    return Response.json(
      { error: 'Terjadi kesalahan saat menganalisis. Coba lagi.' },
      { status: 500 }
    );
  }
}
