import pool from '../database.js';

export const createEndereco = async (req, res) => {
    const { cidade, bairro, rua, numero } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO Endereco (Cidade, Bairro, Rua, Numero) VALUES (?, ?, ?, ?)", [cidade, bairro, rua, numero]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readEndereco = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM Endereco WHERE ID = ?", [id]);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateEndereco = async (req, res) => {
    const { id } = req.params;
    const { cidade, bairro, rua, numero } = req.body;
    try {
        await pool.query("UPDATE Endereco SET Cidade = ?, Bairro = ?, Rua = ?, Numero = ? WHERE ID = ?", [cidade, bairro, rua, numero, id]);
        res.status(200).json({ message: 'Endereço atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteEndereco = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM Endereco WHERE ID = ?", [id]);
        res.status(200).json({ message: 'Endereço deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};