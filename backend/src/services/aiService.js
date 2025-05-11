import axios from 'axios';

export const generateContent = async (prompt, contentType) => {
  try {
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

    return response.data[0].generated_text;
  } catch (error) {
    throw new Error('Failed to generate content: ' + error.message);
  }
};