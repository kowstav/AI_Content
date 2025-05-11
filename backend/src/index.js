const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API endpoint for content generation
app.post('/generate', async (req, res) => {
  try {
    const { prompt, contentType } = req.body;
    
    // Call to Hugging Face API
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/meta-llama/Llama-2-70b-chat-hf',
      {
        inputs: `Generate ${contentType} content for: ${prompt}`,
        options: {
          temperature: 0.7,
          max_length: 500
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.HF_TOKEN}`
        }
      }
    );

    res.json({ 
      success: true, 
      content: response.data[0].generated_text 
    });
  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate content' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});