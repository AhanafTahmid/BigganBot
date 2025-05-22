const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
    try {
        const { message, "text": Text } = req.body;
        let prompt = message;
        prompt = `প্রশ্ন: ${message}\nউত্তরটি বাংলায় দাও।`;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ reply: text });
    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: "দুঃখিত, Gemini উত্তর দিতে পারেনি।" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
