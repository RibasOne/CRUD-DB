import pool from '../database.js';

export const createConsulta = async (req, res) => {
    const { id_paciente, id_medico, horas, data } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO Consultas (id_paciente, id_medico, horas, data) VALUES (?, ?, ?, ?)", [id_paciente, id_medico, horas, data]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getConsulta = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Consultas WHERE id = ?", [req.params.id]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateConsulta = async (req, res) => {
    const { id_paciente, id_medico, horas, data } = req.body;
    try {
        const [result] = await pool.query("UPDATE Consultas SET id_paciente = ?, id_medico = ?, horas = ?, data = ? WHERE id = ?", [id_paciente, id_medico, horas, data, req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteConsulta = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Consultas WHERE id = ?", [req.params.id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
