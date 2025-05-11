import { generateContent } from '../services/aiService.js';
import { handleError } from '../utils/errorHandler.js';

export const contentController = {
  async generate(req, res) {
    try {
      const { prompt, contentType } = req.body;
      
      if (!prompt || !contentType) {
        return res.status(400).json({
          success: false,
          error: 'Prompt and content type are required'
        });
      }

      const content = await generateContent(prompt, contentType);
      
      res.json({
        success: true,
        content
      });
    } catch (error) {
      handleError(error, res);
    }
  }
};