import pool from '../databaseb.js';

export const createMedico = async (req, res) => {
    const { horas, nome, especialidade } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO Medico (horas, nome, especialidade) VALUES (?, ?, ?)", [horas, nome, especialidade]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMedico = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Medico WHERE id = ?", [req.params.id]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateMedico = async (req, res) => {
    const { horas, nome, especialidade } = req.body;
    try {
        const [result] = await pool.query("UPDATE Medico SET horas = ?, nome = ?, especialidade = ? WHERE id = ?", [horas, nome, especialidade, req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteMedico = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Medico WHERE id = ?", [req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
