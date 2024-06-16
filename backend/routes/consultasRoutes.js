import express from 'express';
import { createConsulta, getConsulta, updateConsulta, deleteConsulta } from '../controllers/consultasController.js';

const router = express.Router();

router.post('/', createConsulta);
router.get('/:id', getConsulta);
router.put('/:id', updateConsulta);
router.delete('/:id', deleteConsulta);

export default router;
