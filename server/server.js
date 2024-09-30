const express = require("express");
const axios = require("axios");
const cors = require("cors");  // Uncomment to handle CORS
require('dotenv').config(); // Load environment variables
const PORT = 4000;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming requests with JSON payloads

const YOUR_API_KEY = process.env.OPENAI_API_KEY || "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";

app.post("/postdata", async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).send("No message provided.");
    }

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
        }, {
            headers: {
                'Authorization': `Bearer ${YOUR_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const botResponse = response.data.choices[0].message.content;
        res.json({ response: botResponse });
    } catch (error) {
        console.error("Error communicating with OpenAI API:", error.response ? error.response.data : error.message);
        res.status(500).send('Error occurred while communicating with OpenAI API');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
