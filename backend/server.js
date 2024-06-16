import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js';
import telefoneRoutes from './routes/telefoneRoutes.js';

const app = express();
app.use(express.json());

app.use('/pacientes', pacienteRoutes);
app.use('/enderecos', enderecoRoutes);
app.use('/telefones', telefoneRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});