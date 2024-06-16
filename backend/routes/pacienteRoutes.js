import express from 'express';
import { createPaciente, readPaciente, updatePaciente, deletePaciente } from '../controllers/pacienteController.js';

const router = express.Router();

// CRUD routes for Paciente
router.post('/', createPaciente);
router.get('/:id', readPaciente);
router.put('/:id', updatePaciente);
router.delete('/:id', deletePaciente);

export default router;