import express from 'express';
import { createPaciente, readPaciente, updatePaciente, deletePaciente } from '../controllers/pacienteController';

const router = express.Router();

router.post('/', createPaciente);
router.get('/:id', readPaciente);
router.put('/:id', updatePaciente);
router.delete('/:id', deletePaciente);

export default router;