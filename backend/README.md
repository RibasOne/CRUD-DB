# Sistema de Gestão de Pacientes

Este projeto implementa um backend para um sistema de gestão de pacientes usando Node.js, Express e MySQL. O objetivo é fornecer operações CRUD para as entidades `Paciente`, `Endereço` e `Telefone`.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL
- VSCode com a extensão REST Client

## Configuração do Ambiente

1. Instale as dependências: 

- npm install

2. Configure o banco de dados MySQL:

- Crie as tabelas necessárias no banco de dados. Execute os seguintes comandos SQL:

CREATE TABLE Endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cidade VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero INT NOT NULL
);

CREATE TABLE Paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_endereco INT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    historico TEXT,
    FOREIGN KEY (id_endereco) REFERENCES Endereco(id)
);

CREATE TABLE Telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    numero VARCHAR(20) NOT NULL,
    tipo VARCHAR(50),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id)
);

CREATE TABLE Historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Medico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    horas INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    especialidade VARCHAR(255) NOT NULL
);

CREATE TABLE Consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    id_medico INT,
    horas INT NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id),
    FOREIGN KEY (id_medico) REFERENCES Medico(id)
);

3. Inicie o servidor:

- node server.js

- Navegue até a pasta requests e abra um dos arquivos .http (por exemplo, endereco.http).
- Envie as requisições clicando em "Send Request" acima de cada requisição.

# Ordem de Criação dos Registros

- Para criar um paciente, você deve primeiro criar um endereço. Aqui estão os passos detalhados:

1. Crie um Endereço:

- Abra requests/endereco.http.
- Envie a requisição de criação (Create Endereço).
- Copie o id gerado na resposta.

2. Crie um Paciente:

- Abra requests/paciente.http.
- Substitua o valor de id_endereco pelo id do endereço copiado na etapa anterior.
- Envie a requisição de criação (Create Paciente).
- Copie o id gerado na resposta.

3. Crie um Telefone:

- Abra requests/telefone.http.
- Substitua o valor de id_paciente pelo id do paciente copiado na etapa anterior.
- Envie a requisição de criação (Create Telefone).

4. Crie um Médico:

- Abra requests/medico.http.
- Envie a requisição de criação (Create Medico).
- Copie o id gerado na resposta.

5. Crie uma Consulta:

- Abra requests/consultas.http.
- Substitua o valor de id_paciente pelo id do paciente copiado na etapa anterior.
- Substitua o valor de id_medico pelo id do médico copiado na etapa anterior.
- Envie a requisição de criação (Create Consulta).