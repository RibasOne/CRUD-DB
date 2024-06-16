import express from 'express';
import { createHistorico, getHistorico, updateHistorico, deleteHistorico } from '../controllers/historicoController.js';

const router = express.Router();

router.post('/', createHistorico);
router.get('/:id', getHistorico);
router.put('/:id', updateHistorico);
router.delete('/:id', deleteHistorico);

export default router;
