const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { GoogleGenerativeAI } = require('@google/genai');
const prisma = require('../prismaClient');

const SECRET = process.env.JWT_SECRET || 'secret';
const ai = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

// Middleware to authenticate user
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const companyPrompt = `Kamu adalah asisten hukum perusahaan Indonesia yang ahli dalam regulasi perundang-undangan resmi Indonesia, termasuk:
- UU No. 40 Tahun 2007 tentang Perseroan Terbatas
- UU No. 20 Tahun 2008 tentang UMKM
- UU Cipta Kerja 2020
- Perpres No. 19 Tahun 2024 tentang Percepatan Pengembangan Industri Gim Nasional
- PP No. 184 Tahun 1961 tentang Pendirian Perusahaan Negara Industri Makanan dan Minuman
- Dan peraturan terkait lainnya dari database JDIH BPK (peraturan.bpk.go.id)

Berikan checklist persyaratan legal yang relevan berdasarkan jenis usaha yang disebutkan user. Untuk setiap poin checklist, sertakan referensi regulasi yang mendasarinya. Gunakan Bahasa Indonesia yang mudah dipahami masyarakat umum.

Response HARUS HANYA dalam format JSON dengan struktur berikut dan TIDAK ADA teks lain (tidak ada markdown code blocks):
{
  "status": "AMAN",
  "summary": "Penjelasan singkat",
  "details": ["Detail 1"],
  "recommendation": "Rekomendasi",
  "checklist": [
    { "item": "Izin X", "description": "Deskripsi izin", "reference": "UU Y" }
  ]
}`;

const linkPrompt = `Kamu adalah pakar keamanan siber yang menganalisis URL untuk mendeteksi phishing, link palsu, dan ancaman digital. Analisis URL yang diberikan dan tentukan apakah aman, mencurigakan, atau palsu. Berikan alasan teknis yang mudah dipahami dalam Bahasa Indonesia dan rekomendasikan tindakan yang tepat.

Response HARUS HANYA dalam format JSON dengan struktur berikut dan TIDAK ADA teks lain:
{
  "status": "AMAN | MENCURIGAKAN | PALSU",
  "summary": "Penjelasan singkat",
  "details": ["Detail 1"],
  "recommendation": "Rekomendasi",
  "official_alternative": "Link asli jika ada"
}`;

const emailPrompt = `Kamu adalah ahli verifikasi email dan keamanan digital. Analisis alamat email yang diberikan untuk menentukan apakah email tersebut asli atau merupakan email phishing/spoofing. Jika palsu, berikan email resmi perusahaan yang seharusnya jika kamu mengetahuinya. Gunakan Bahasa Indonesia yang mudah dipahami.

Response HARUS HANYA dalam format JSON dengan struktur berikut dan TIDAK ADA teks lain:
{
  "status": "VALID | MENCURIGAKAN | PALSU",
  "summary": "Penjelasan singkat",
  "details": ["Detail 1"],
  "recommendation": "Rekomendasi",
  "official_alternative": "Email asli jika ada"
}`;

const callGemini = async (prompt, input) => {
  const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(`${prompt}\n\nInput dari user: ${input}`);
  let text = result.response.text();
  // Clean markdown block if any
  text = text.replace(/```json/g, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse Gemini JSON:", text);
    throw new Error('Invalid JSON response from AI');
  }
};

router.post('/company', authenticate, async (req, res) => {
  try {
    const { input } = req.body;
    const aiResult = await callGemini(companyPrompt, input);
    
    // Save to history
    await prisma.checkHistory.create({
      data: {
        userId: req.userId,
        type: 'company',
        input,
        status: aiResult.status || 'AMAN',
        result: JSON.stringify(aiResult)
      }
    });
    
    res.json(aiResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menganalisis perusahaan' });
  }
});

router.post('/link', authenticate, async (req, res) => {
  try {
    const { input } = req.body;
    const aiResult = await callGemini(linkPrompt, input);
    
    await prisma.checkHistory.create({
      data: {
        userId: req.userId,
        type: 'link',
        input,
        status: aiResult.status || 'AMAN',
        result: JSON.stringify(aiResult)
      }
    });
    
    res.json(aiResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menganalisis link' });
  }
});

router.post('/email', authenticate, async (req, res) => {
  try {
    const { input } = req.body;
    const aiResult = await callGemini(emailPrompt, input);
    
    await prisma.checkHistory.create({
      data: {
        userId: req.userId,
        type: 'email',
        input,
        status: aiResult.status || 'VALID',
        result: JSON.stringify(aiResult)
      }
    });
    
    res.json(aiResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menganalisis email' });
  }
});

module.exports = router;
