import pool from '../database.js';

export const createHistorico = async (req, res) => {
    try {
        const [result] = await pool.query("INSERT INTO Historico (data_criacao, data_atualizacao) VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)");
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getHistorico = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Historico WHERE id = ?", [req.params.id]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateHistorico = async (req, res) => {
    try {
        const [result] = await pool.query("UPDATE Historico SET data_atualizacao = CURRENT_TIMESTAMP WHERE id = ?", [req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteHistorico = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Historico WHERE id = ?", [req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
