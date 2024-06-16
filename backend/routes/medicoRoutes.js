import express from 'express';
import { createMedico, getMedico, updateMedico, deleteMedico } from '../controllers/medicoController.js';

const router = express.Router();

router.post('/', createMedico);
router.get('/:id', getMedico);
router.put('/:id', updateMedico);
router.delete('/:id', deleteMedico);

export default router;
