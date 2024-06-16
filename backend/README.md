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

3. Inicie o servidor:

- node server.js

4. Testando a API com a Extensão REST Client do VSCode

Navegue até a pasta requests e abra um dos arquivos .http (por exemplo, endereco.http).
Envie as requisições clicando em "Send Request" acima de cada requisição.

5. Ordem de Criação dos Registros

- Crie um Endereço:

Abra requests/endereco.http.
Envie a requisição de criação (Create Endereço).
Copie o id gerado na resposta.

- Crie um Paciente:

Abra requests/paciente.http.
Substitua o valor de id_endereco pelo id do endereço copiado na etapa anterior.
Envie a requisição de criação (Create Paciente).
Copie o id gerado na resposta.

- Crie um Telefone:

Abra requests/telefone.http.
Substitua o valor de id_paciente pelo id do paciente copiado na etapa anterior.
Envie a requisição de criação (Create Telefone).
