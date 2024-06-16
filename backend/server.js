import express from 'express';
import dotenv from 'dotenv';
import enderecoRoutes from './routes/enderecoRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';
import telefoneRoutes from './routes/telefoneRoutes.js';
import historicoRoutes from './routes/historicoRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import consultasRoutes from './routes/consultasRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/enderecos', enderecoRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/telefones', telefoneRoutes);
app.use('/historicos', historicoRoutes);
app.use('/medicos', medicoRoutes);
app.use('/consultas', consultasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
