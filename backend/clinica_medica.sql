CREATE SCHEMA IF NOT EXISTS clinica_medica;
USE clinica_medica;

-- Tabela de Endereço
CREATE TABLE Endereco (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Cidade VARCHAR(100),
    Bairro VARCHAR(100),
    Rua VARCHAR(100),
    Numero INT
);

-- Tabela de Paciente
CREATE TABLE Paciente (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Endereco INT,
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Historico TEXT,
    FOREIGN KEY (ID_Endereco) REFERENCES Endereco(ID)
);

-- Tabela de Histórico
CREATE TABLE Historico (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Data_Criacao DATE,
    Data_Atualizacao DATE
);

-- Tabela de Telefone
CREATE TABLE Telefone (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    Numero VARCHAR(15),
    Tipo ENUM('Residencial', 'Celular', 'Comercial'),
    FOREIGN KEY (ID_Paciente) REFERENCES Paciente(ID)
);

-- Tabela de Médico
CREATE TABLE Medico (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Horas INT,
    Nome VARCHAR(100),
    Especialidade VARCHAR(100)
);

-- Tabela de Consultas
CREATE TABLE Consultas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    ID_Medico INT,
    Horas INT,
    Data DATE,
    FOREIGN KEY (ID_Paciente) REFERENCES Paciente(ID),
    FOREIGN KEY (ID_Medico) REFERENCES Medico(ID)
);