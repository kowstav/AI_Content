import express from 'express';
import { contentController } from '../controllers/contentController.js';

const router = express.Router();

router.post('/generate', contentController.generate);

export default router;