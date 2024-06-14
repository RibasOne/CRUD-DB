import pool from '../database.js';

export const createTelefone = async (req, res) => {
    const { id_paciente, numero, tipo } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO Telefone (ID_Paciente, Numero, Tipo) VALUES (?, ?, ?)", [id_paciente, numero, tipo]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readTelefone = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM Telefone WHERE ID = ?", [id]);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTelefone = async (req, res) => {
    const { id } = req.params;
    const { id_paciente, numero, tipo } = req.body;
    try {
        await pool.query("UPDATE Telefone SET ID_Paciente = ?, Numero = ?, Tipo = ? WHERE ID = ?", [id_paciente, numero, tipo, id]);
        res.status(200).json({ message: 'Telefone atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTelefone = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM Telefone WHERE ID = ?", [id]);
        res.status(200).json({ message: 'Telefone deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};