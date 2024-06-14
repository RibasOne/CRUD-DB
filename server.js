import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// DATABASE CONFIG
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

// CRUDs

// CRUD Paciente

// Create
async function createPaciente(nome, id_endereco, email, historico) {
    const [result] = await pool.query("INSERT INTO Paciente (Nome, ID_Endereco, Email, Historico) VALUES (?, ?, ?, ?)", [nome, id_endereco, email, historico]);
    return result;
}

// Read
async function readPaciente(id) {
    const [result] = await pool.query("SELECT * FROM Paciente WHERE id = ?", [id]);
    return result;
}

// Update
async function updatePaciente(id, nome, id_endereco, email, historico) {
    const [result] = await pool.query("UPDATE Paciente SET Nome = ?, ID_Endereco = ?, Email = ?, Historico = ? WHERE ID = ?", [nome, id_endereco, email, historico, id]);
    return result;
}

// Delete
async function deletePaciente(id) {
    const [result] = await pool.query("DELETE FROM Paciente WHERE id = ?", [id]);
    return result;
}

// CRUD Endereco

// Create
async function createEndereco(cidade, bairro, rua, numero) {
    const [result] = await pool.query("INSERT INTO Endereco (Cidade, Bairro, Rua, Numero) VALUES (?, ?, ?, ?)", [cidade, bairro, rua, numero]);
    return result.insertId;
}

// Read
async function readEndereco(id) {
    const [result] = await pool.query("SELECT * FROM Endereco WHERE id = ?", [id]);
    return result;
}

// Update
async function updateEndereco(id, cidade, bairro, rua, numero) {
    const [result] = await pool.query("UPDATE Endereco SET Cidade = ?, Bairro = ?, Rua = ?, Numero = ? WHERE ID = ?", [cidade, bairro, rua, numero, id]);
    return result;
}

// Delete
async function deleteEndereco(id) {
    const [result] = await pool.query("DELETE FROM Endereco WHERE id = ?", [id]);
    return result;
}

// CRUD Telefone

// Create
async function createTelefone(id_paciente, numero, tipo) {
    const [result] = await pool.query("INSERT INTO Telefone (ID_Paciente, Numero, Tipo) VALUES (?, ?, ?)", [id_paciente, numero, tipo]);
    return result;
}

// Read
async function readTelefone(id) {
    const [result] = await pool.query("SELECT * FROM Telefone WHERE ID = ?", [id]);
    return result;
}

// Update
async function updateTelefone(id, id_paciente, numero, tipo) {
    const [result] = await pool.query("UPDATE Telefone SET ID_Paciente = ?, Numero = ?, Tipo = ? WHERE ID = ?", [id_paciente, numero, tipo, id]);
    return result;
}

// Delete
async function deleteTelefone(id) {
    const [result] = await pool.query("DELETE FROM Telefone WHERE ID = ?", [id]);
    return result;
}