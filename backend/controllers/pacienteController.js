import pool from '../database.js';

export const createPaciente = async (req, res) => {
    const { nome, id_endereco, email, historico } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO Paciente (Nome, ID_Endereco, Email, Historico) VALUES (?, ?, ?, ?)", [nome, id_endereco, email, historico]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readPaciente = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM Paciente WHERE ID = ?", [id]);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePaciente = async (req, res) => {
    const { id } = req.params;
    const { nome, id_endereco, email, historico } = req.body;
    try {
        await pool.query("UPDATE Paciente SET Nome = ?, ID_Endereco = ?, Email = ?, Historico = ? WHERE ID = ?", [nome, id_endereco, email, historico, id]);
        res.status(200).json({ message: 'Paciente atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePaciente = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM Paciente WHERE ID = ?", [id]);
        res.status(200).json({ message: 'Paciente deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};