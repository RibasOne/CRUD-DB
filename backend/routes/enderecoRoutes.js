import express from 'express';
import { createEndereco, readEndereco, updateEndereco, deleteEndereco } from '../controllers/enderecoController.js';

const router = express.Router();

// CRUD routes for Endereco
router.post('/', createEndereco);
router.get('/:id', readEndereco);
router.put('/:id', updateEndereco);
router.delete('/:id', deleteEndereco);

export default router;