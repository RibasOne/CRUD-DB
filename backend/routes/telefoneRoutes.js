import express from 'express';
import { createTelefone, readTelefone, updateTelefone, deleteTelefone } from '../controllers/telefoneController.js';

const router = express.Router();

router.post('/', createTelefone);
router.get('/:id', readTelefone);
router.put('/:id', updateTelefone);
router.delete('/:id', deleteTelefone);

export default router;